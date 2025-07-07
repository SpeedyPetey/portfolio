export default function Experience() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Work Experience</h1>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border border-blue-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-blue-700">Software Developer Intern</h2>
                <p className="text-lg text-muted-foreground">BUSTRAK</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">May 2024 - Aug 2024</p>
                <p className="text-sm font-medium">Toronto, ON</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Developed real-time bus tracking and replay systems using Vue.js, enabling administrators 
              to monitor 300+ buses simultaneously and significantly reducing response times to issues.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Reduced API calls by <span className="text-blue-700 font-medium">15%</span> through request batching and efficient state management</li>
                <li>Optimized backend handling, cutting Google Cloud Platform costs by 10%</li>
                <li>Redesigned UI elements with animations, draggable panels, and interactive maps</li>
                <li>Improved user satisfaction through feedback-driven interface improvements</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vue.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Google Cloud Platform</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Real-time Systems</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-blue-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-blue-700">System Design Engineer Intern</h2>
                <p className="text-lg text-muted-foreground">Taiyo Industrial Co., Ltd.</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">May 2023 - Dec 2023</p>
                <p className="text-sm font-medium text-blue-700">Wakayama, Japan</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Developed hardware acceleration solutions and automated testing systems while working 
              in Japan through the Canada-Japan Coop Program, gaining valuable international experience.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Improved data transfer speeds by <span className="text-blue-700 font-medium">90%</span> between controller PCs and electrical testing machines</li>
                <li>Automated repetitive system testing tasks with custom GUI application in MFC</li>
                <li>Saved ~160 hours per month in manual debugging through automation</li>
                <li>Created comprehensive documentation including circuit schematics and UML diagrams</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">C++</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">MFC</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Hardware Integration</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">System Design</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Firmware Engineer Intern</h2>
                <p className="text-lg text-muted-foreground">Brave Technology Cooperative</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">May 2022 - Aug 2022</p>
                <p className="text-sm font-medium">Vancouver, BC</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Worked on life-saving overdose-detection microcontroller systems, focusing on sensor 
              integration and system reliability improvements for critical healthcare applications.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Integrated new sensors into overdose-detection systems, reducing false negatives by ~20%</li>
                <li>Improved system reliability through watchdog protocols and optimized updates</li>
                <li>Reduced false positives and system downtime significantly</li>
                <li>Automated panic button configurations, improving production efficiency</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">C</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Firmware</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Microcontrollers</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Sensor Integration</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Additional Recognition</h2>
                <p className="text-lg text-muted-foreground">Various Positions</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Employee of the Month - Walmart</h3>
                  <p className="text-sm text-muted-foreground">Achieved in first month as cashier, demonstrating quick adaptation and excellence</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Software Engineer Volunteer - UBC Thunderbots</h3>
                  <p className="text-sm text-muted-foreground">Contributed to 1st place victory in 2021, Canada's only 6v6 soccer robot design team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 