export default function Education() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Education</h1>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">University of British Columbia (UBC)</h2>
                <p className="text-lg text-muted-foreground">Bachelor of Applied Science in Computer Engineering</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Sept 2020 - May 2025</p>
                <p className="text-sm font-medium">Vancouver, Canada</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Pursuing a comprehensive Computer Engineering degree with focus on software development, 
              hardware integration, and system design. Strong academic performance with Irving K. Barber 
              Transfer Scholarship for maintaining a GPA of 4.02/4.33.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Software Construction I & II</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Relational Databases</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">App Development</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Capstone Project</span>
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
                <h3 className="font-semibold mb-2">AWS Cloud Practitioner</h3>
                <p className="text-sm text-muted-foreground mb-2">Amazon Web Services</p>
                <p className="text-xs text-muted-foreground">Certified in cloud computing fundamentals</p>
              </div>
              <div className="border rounded-lg p-4 border-blue-200">
                <h3 className="font-semibold mb-2 text-blue-700">Canada-Japan Coop Program</h3>
                <p className="text-sm text-muted-foreground mb-2">International Experience</p>
                <p className="text-xs text-muted-foreground">1 of 9 selected from ~400 applicants</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg border border-blue-200">
                <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                <div>
                  <h3 className="font-medium text-blue-700">1st Place, Software Engineering Project Class</h3>
                  <p className="text-sm text-muted-foreground">Out of 18 teams for clean and well-documented code</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Irving K. Barber Transfer Scholarship</h3>
                  <p className="text-sm text-muted-foreground">Academic excellence with GPA of 4.02/4.33</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg border border-blue-200">
                <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                <div>
                  <h3 className="font-medium text-blue-700">UBC Thunderbots - 1st Place (2021)</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer Volunteer, Canada's only 6v6 soccer robot design team</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-medium">Ground Search and Rescue Member</h3>
                  <p className="text-sm text-muted-foreground">Nicola Valley SAR - highly selective entry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 