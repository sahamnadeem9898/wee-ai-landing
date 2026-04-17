export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Animated Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 ring-1 ring-purple-500/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-300">
                Now Available
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="mb-6 text-center text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your AI Assistant for
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Multiple Operations
            </span>
          </h1>

          {/* Hero Description */}
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-400 sm:text-xl">
            Wee AI streamlines your workflow with intelligent automation,
            handling everything from routine tasks to complex operations —
            all in one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group relative w-full overflow-hidden rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 sm:w-auto">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </button>
            <button className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-8 py-4 font-semibold text-white transition-all hover:border-neutral-600 hover:bg-neutral-800 sm:w-auto">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 top-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              The Old Way vs The Wee AI Way
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Stop juggling multiple tools and scattered workflows.
              Wee AI brings everything together.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem Card */}
            <div className="rounded-2xl border border-red-900/30 bg-gradient-to-br from-red-950/30 to-neutral-950 p-8">
              <div className="mb-4 inline-flex rounded-lg bg-red-500/10 p-3 ring-1 ring-red-500/20">
                <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Without Wee AI
              </h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Switching between 10+ different tools daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Manual, repetitive tasks eating up hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Inconsistent results and human errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>No centralized control or insights</span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-neutral-950 p-8 ring-1 ring-purple-500/10">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                With Wee AI
              </h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">✓</span>
                  <span>One unified AI assistant for all operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">✓</span>
                  <span>Intelligent automation handling repetitive work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">✓</span>
                  <span>Consistent, accurate results every time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">✓</span>
                  <span>Complete visibility and control from one dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Powerful Features, Simple Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Everything you need to supercharge your productivity and
              automate complex workflows.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-neutral-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-all group-hover:bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Lightning Fast
              </h3>
              <p className="text-neutral-400">
                Process tasks in seconds that used to take hours. Our AI
                works at machine speed while maintaining human-level quality.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-neutral-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-all group-hover:bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Fully Customizable
              </h3>
              <p className="text-neutral-400">
                Tailor Wee AI to your exact needs. Configure workflows,
                set preferences, and create custom automation rules.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-neutral-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-all group-hover:bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Enterprise Security
              </h3>
              <p className="text-neutral-400">
                Your data is protected with bank-level encryption, secure
                cloud infrastructure, and compliance with industry standards.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-neutral-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-all group-hover:bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Smart Integrations
              </h3>
              <p className="text-neutral-400">
                Connect with your favorite tools seamlessly. Wee AI works
                with the apps you already use every day.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-neutral-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-all group-hover:bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Real-time Analytics
              </h3>
              <p className="text-neutral-400">
                Track performance, monitor operations, and gain actionable
                insights with comprehensive analytics dashboards.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-neutral-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 ring-1 ring-purple-500/20 transition-all group-hover:bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Team Collaboration
              </h3>
              <p className="text-neutral-400">
                Work together effortlessly with shared workspaces, role-based
                access, and real-time collaboration features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-neutral-950 p-12 text-center">
            <div className="relative z-10">
              <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                Ready to Transform Your Workflow?
              </h2>
              <p className="mb-8 text-lg text-neutral-300">
                Join thousands of teams already using Wee AI to work smarter,
                not harder.
              </p>
              <button className="group relative overflow-hidden rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Background Gradient */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-600/20 to-transparent blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center text-neutral-500">
          <p className="text-sm">
            © 2026 Wee AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
