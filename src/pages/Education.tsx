export default function Education() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Education</h1>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">University/College Name</h2>
                <p className="text-lg text-muted-foreground">Degree in Computer Science</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
                <p className="text-sm font-medium">GPA: 3.8/4.0</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Relevant coursework, achievements, and key learnings from your degree program.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Data Structures</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Algorithms</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Software Engineering</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Database Systems</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Certifications</h2>
                <p className="text-lg text-muted-foreground">Professional Development</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">AWS Certified Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">Amazon Web Services</p>
                <p className="text-xs text-muted-foreground">Issued: 2023</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">React Developer Certification</h3>
                <p className="text-sm text-muted-foreground mb-2">Meta</p>
                <p className="text-xs text-muted-foreground">Issued: 2023</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Additional Learning</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Online Courses & Bootcamps</h3>
                  <p className="text-sm text-muted-foreground">Continuous learning through platforms like Coursera, Udemy, etc.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Technical Workshops</h3>
                  <p className="text-sm text-muted-foreground">Attended various tech conferences and workshops</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Open Source Contributions</h3>
                  <p className="text-sm text-muted-foreground">Learning through contributing to open source projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 