import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TradingChart } from "@/components/TradingChart";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MagneticCursor } from "@/components/MagneticCursor";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <MagneticCursor />
      
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        
        {/* Performance Section */}
        <section id="performance" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Performance</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                Verifiable On-Chain
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Every trade, every metric, fully transparent and auditable on-chain.
              </p>
            </div>

            {/* Advanced Trading Chart */}
            <TradingChart />
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-24 px-6 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Technology</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                Built for Speed & Scale
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Enterprise infrastructure processing millions of signals per second.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-8 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mb-6">
                  <span className="text-purple-400 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Neural Architecture</h3>
                <p className="text-text-secondary mb-6">
                  Transformer models trained on 10+ years of market data with continuous learning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">98.7% accuracy</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Real-time adaptation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Multi-chain optimization</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center mb-6">
                  <span className="text-blue-400 text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ultra-Low Latency</h3>
                <p className="text-text-secondary mb-6">
                  Sub-millisecond execution with direct mempool access and MEV protection.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">12ms avg latency</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Direct RPC nodes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Flashbots integrated</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mb-6">
                  <span className="text-green-400 text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Non-Custodial Security</h3>
                <p className="text-text-secondary mb-6">
                  Your funds remain in your custody. We execute, you maintain full control.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Smart contract verified</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Multi-sig protected</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-text-secondary">Audited by leading firms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Team</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                Built by Veterans
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Former executives from leading trading firms and tech companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-accent/20">
                  <img
                    src="/images/team-harrison.png"
                    alt="Harrison"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Harrison</h3>
                <p className="text-accent text-sm font-medium mb-2">Co-Founder & CEO</p>
                <p className="text-text-tertiary text-sm">
                  Former Goldman Sachs VP, 12+ years in quantitative trading
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-purple-400/20">
                  <img
                    src="/images/team-dmitry.png"
                    alt="Dmitry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dmitry</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">Co-Founder & CTO</p>
                <p className="text-text-tertiary text-sm">
                  Former Google Senior Engineer, PhD in Machine Learning
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-blue-400/20">
                  <img
                    src="/images/team-dan.png"
                    alt="Dan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dan</h3>
                <p className="text-blue-400 text-sm font-medium mb-2">Head of Research</p>
                <p className="text-text-tertiary text-sm">
                  Former Citadel Quantitative Researcher, MIT PhD
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Demo</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                See It In Action
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Experience the power of AI-driven trading strategies.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-4xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Interactive Demo</h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Schedule a personalized demo to see our platform in action.
              </p>
              <button className="btn btn-primary px-8 py-3 rounded-xl glow">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}