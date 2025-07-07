export default function About() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate developer with a love for creating innovative solutions 
                and beautiful user experiences. My journey in technology has been driven 
                by curiosity and a desire to solve complex problems.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              <p className="text-muted-foreground mb-4">
                Add your personal story here - how you got into development, what 
                motivates you, and what you're passionate about in your career.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Python, Databases</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <p className="text-sm text-muted-foreground">Git, Docker, AWS</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Design</h3>
                  <p className="text-sm text-muted-foreground">Figma, UI/UX Principles</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Your City, Country</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span>X+ Years</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span>Open to opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 