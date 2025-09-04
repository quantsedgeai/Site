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
  });
} else {
  animateChart();
  initSmoothScroll();
}
