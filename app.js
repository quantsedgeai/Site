// Animated Counter Component
function animateCounter(element, start, end, duration = 2000, suffix = '') {
  if (!element) return;
  
  const startTime = performance.now();
  const startValue = parseFloat(start) || 0;
  const endValue = parseFloat(end) || 0;
  const isDecimal = end.toString().includes('.');
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out cubic)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentValue = startValue + (endValue - startValue) * easeOut;
    
    // Format the number based on type
    let displayValue;
    if (suffix === '%') {
      displayValue = currentValue.toFixed(2) + suffix;
    } else if (suffix === 'B+' || suffix === 'M+') {
      displayValue = '$' + currentValue.toFixed(1) + suffix;
    } else if (isDecimal) {
      displayValue = currentValue.toFixed(2);
    } else {
      displayValue = Math.floor(currentValue).toString();
    }
    
    element.textContent = displayValue;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Chart Animation
function generateChartPath() {
  const width = 100, height = 100, points = 20;
  const baseValue = 65, trendUp = -25;
  let pathData = [], areaData = [`M 0 ${height}`];
  
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const progress = i / points;
    const trend = baseValue + (trendUp * progress);
    const volatility = Math.sin(progress * Math.PI * 4) * 5;
    const noise = (Math.random() - 0.5) * 3;
    const y = Math.max(20, Math.min(70, trend + volatility + noise));
    
    pathData.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    areaData.push(`L ${x} ${y}`);
  }
  
  areaData.push(`L ${width} ${height}`, 'Z');
  
  return {
    line: pathData.join(' '),
    area: areaData.join(' '),
    lastY: baseValue + trendUp,
    lastX: width
  };
}

function animateChart() {
  const chartLine = document.getElementById('chart-line');
  const chartArea = document.getElementById('chart-area');
  const chartDot = document.getElementById('chart-dot');
  const currentValue = document.getElementById('current-value');
  
  if (!chartLine || !chartArea || !chartDot) return;
  
  let currentData = generateChartPath();
  
  function update() {
    const newData = generateChartPath();
    const transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    [chartLine, chartArea, chartDot].forEach(el => el.style.transition = transition);
    
    chartLine.setAttribute('d', newData.line);
    chartArea.setAttribute('d', newData.area);
    chartDot.setAttribute('cx', newData.lastX);
    chartDot.setAttribute('cy', newData.lastY);
    
    if (currentValue) {
      const value = 22.4 + (Math.random() - 0.5) * 2;
      currentValue.textContent = `+${value.toFixed(1)}%`;
      currentValue.style.color = '#00FFC6';
    }
    
    currentData = newData;
  }
  
  // Initial render
  chartLine.setAttribute('d', currentData.line);
  chartArea.setAttribute('d', currentData.area);
  chartDot.setAttribute('cx', currentData.lastX);
  chartDot.setAttribute('cy', currentData.lastY);
  
  setInterval(update, 3000);
}

// Initialize Animated Counters
function initAnimatedCounters() {
  const counterData = [
    { selector: '.hero-stats [data-counter="volume"]', end: 1.2, suffix: 'B+' },
    { selector: '.hero-stats [data-counter="sharpe"]', end: 2.34, suffix: '' },
    { selector: '.hero-stats [data-counter="institutions"]', end: 287, suffix: '' },
    { selector: '.hero-stats [data-counter="uptime"]', end: 99.98, suffix: '%' }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const data = counterData.find(d => element.matches(d.selector));
        if (data && !element.hasAttribute('data-animated')) {
          element.setAttribute('data-animated', 'true');
          // Add staggered delay based on index
          const delay = Array.from(element.parentElement.parentElement.children).indexOf(element.parentElement) * 200;
          setTimeout(() => {
            animateCounter(element, 0, data.end, 2500, data.suffix);
          }, delay);
        }
      }
    });
  }, { threshold: 0.5 });

  counterData.forEach(data => {
    const element = document.querySelector(data.selector);
    if (element) {
      observer.observe(element);
    }
  });
}

// Enhanced Team Card Hover Effects
function initTeamHoverEffects() {
  const teamCards = document.querySelectorAll('#team .text-center');
  
  teamCards.forEach((card, index) => {
    const image = card.querySelector('img');
    const name = card.querySelector('h3');
    const title = card.querySelector('p[class*="text-accent"], p[class*="text-purple-400"], p[class*="text-blue-400"]');
    
    if (image && name && title) {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.transition = 'transform 0.3s ease';
        
        // Add subtle rotation and scale
        image.style.transform = 'scale(1.05) rotate(2deg)';
        image.style.transition = 'transform 0.3s ease';
        
        // Enhance text
        name.style.transform = 'translateY(-2px)';
        title.style.transform = 'translateY(-1px)';
        name.style.transition = 'transform 0.2s ease';
        title.style.transition = 'transform 0.2s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        image.style.transform = 'scale(1) rotate(0deg)';
        name.style.transform = 'translateY(0)';
        title.style.transform = 'translateY(0)';
      });
    }
  });
}

// Enhanced Chart Loading Animation
function enhanceChartAnimations() {
  const chart = document.querySelector('#performance .h-64');
  const chartElements = {
    line: document.getElementById('chart-line'),
    area: document.getElementById('chart-area'),
    dot: document.getElementById('chart-dot')
  };
  
  if (chart && chartElements.line) {
    // Add loading state
    chart.style.opacity = '0';
    chart.style.transform = 'translateY(20px)';
    chart.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            chart.style.opacity = '1';
            chart.style.transform = 'translateY(0)';
            
            // Animate chart elements
            Object.values(chartElements).forEach((el, index) => {
              if (el) {
                el.style.opacity = '0';
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transition = 'opacity 0.8s ease';
                }, index * 200);
              }
            });
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(chart);
  }
}

// Mobile Navigation Enhancement
function initMobileNavigation() {
  const nav = document.querySelector('header nav');
  const desktopNav = document.querySelector('nav.hidden.lg\\:flex');
  let navLinks = [];
  
  if (desktopNav) {
    navLinks = desktopNav.querySelectorAll('a');
  } else {
    // Fallback: find nav links directly
    navLinks = document.querySelectorAll('nav a.nav-link');
  }
  
  if (!nav || navLinks.length === 0) {
    return;
  }
  
  // Create mobile menu button
  const mobileButton = document.createElement('button');
  mobileButton.className = 'lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors';
  mobileButton.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  `;
  
  // Create mobile menu
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'absolute top-full left-0 right-0 glass border-t border-white/5 lg:hidden opacity-0 invisible transition-all duration-300 transform -translate-y-2';
  mobileMenu.innerHTML = `
    <div class="px-6 py-4 space-y-3">
      ${Array.from(navLinks).map(link => `
        <a href="${link.href}" class="block py-2 text-text-secondary hover:text-accent transition-colors">
          ${link.textContent}
        </a>
      `).join('')}
      <div class="pt-4 border-t border-white/10">
        <button class="btn btn-secondary w-full mb-3 py-2 rounded-lg">
          Sign In
        </button>
        <button class="btn btn-primary w-full py-2 rounded-lg">
          Get Access
        </button>
      </div>
    </div>
  `;
  
  // Insert elements
  const rightActions = nav.querySelector('.flex.items-center.space-x-4');
  rightActions.insertBefore(mobileButton, rightActions.firstChild);
  nav.appendChild(mobileMenu);
  
  // Toggle functionality
  let isOpen = false;
  mobileButton.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove('opacity-0', 'invisible', '-translate-y-2');
      mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
      mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-2');
      mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
  });
  
  // Close on link click
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      isOpen = false;
      mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-2');
      mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
  });
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && isOpen) {
      isOpen = false;
      mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-2');
      mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
  });
}

// FAQ Accordion
function initFAQAccordion() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('span:last-child');
      const isOpen = !content.classList.contains('hidden');
      
      // Close all other FAQs
      faqToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          const otherContent = otherToggle.nextElementSibling;
          const otherIcon = otherToggle.querySelector('span:last-child');
          otherContent.classList.add('hidden');
          otherContent.style.maxHeight = '0';
          otherIcon.textContent = '+';
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current FAQ
      if (isOpen) {
        content.classList.add('hidden');
        content.style.maxHeight = '0';
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
      }
      
      // Add smooth transition
      content.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
      icon.style.transition = 'transform 0.3s ease';
    });
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    animateChart();
    initSmoothScroll();
    initAnimatedCounters();
    initTeamHoverEffects();
    enhanceChartAnimations();
    initMobileNavigation();
    initFAQAccordion();
  });
} else {
  animateChart();
  initSmoothScroll();
  initAnimatedCounters();
  initTeamHoverEffects();
  enhanceChartAnimations();
  initMobileNavigation();
  initFAQAccordion();
}
