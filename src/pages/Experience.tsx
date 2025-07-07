export default function Experience() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Work Experience</h1>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Senior Full Stack Developer</h2>
                <p className="text-lg text-muted-foreground">Company Name</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">2022 - Present</p>
                <p className="text-sm font-medium">Remote</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Led development of scalable web applications using modern technologies. 
              Collaborated with cross-functional teams to deliver high-quality software solutions.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Improved application performance by 40% through optimization</li>
                <li>Led a team of 5 developers on major product redesign</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AWS</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Frontend Developer</h2>
                <p className="text-lg text-muted-foreground">Previous Company</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">2020 - 2022</p>
                <p className="text-sm font-medium">On-site</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Developed responsive web applications and improved user experience across 
              multiple products. Worked closely with design team to implement pixel-perfect interfaces.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Reduced page load times by 50% through code optimization</li>
                <li>Built reusable component library used across 3 products</li>
                <li>Mentored 2 junior developers</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Git</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Junior Developer</h2>
                <p className="text-lg text-muted-foreground">First Company</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">2019 - 2020</p>
                <p className="text-sm font-medium">On-site</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Started my professional journey as a junior developer, learning best practices 
              and contributing to various web development projects.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Successfully completed 15+ feature implementations</li>
                <li>Participated in code reviews and team meetings</li>
                <li>Learned modern development workflows and tools</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">jQuery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 