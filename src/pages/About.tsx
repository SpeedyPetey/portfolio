export default function About() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                I'm Peter Scholtens, a Computer Engineering student at the University of British Columbia 
                with a passion for creating innovative solutions through technology. My journey spans 
                full-stack development, DevOps, hardware integration, and emerging technologies like AR and AI.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              <p className="text-muted-foreground mb-4">
                Currently pursuing my Bachelor of Applied Science in Computer Engineering at UBC (2020-2025), 
                I've gained hands-on experience through internships across Canada and Japan. From developing 
                real-time bus tracking systems to creating hardware acceleration solutions, I thrive on 
                solving complex problems with elegant technical solutions.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-2 text-blue-700">Full Stack Development</h3>
                  <p className="text-sm text-muted-foreground">React, Flutter, Vue.js, Node.js, Firebase, MongoDB</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">DevOps & Cloud</h3>
                  <p className="text-sm text-muted-foreground">AWS (Certified), Linux, Docker, Git, GCP, CI/CD</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <p className="text-sm text-muted-foreground">Java, Python, C++, JavaScript, Kotlin, Dart</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Specialized</h3>
                  <p className="text-sm text-muted-foreground">AR/VR, Machine Learning, Hardware Integration</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">International Experience</h2>
              <p className="text-muted-foreground mb-4">
                Selected as <span className="text-blue-700 font-medium">1 of 9 from ~400 applicants</span> for the Canada-Japan Coop Program, I spent 8 months 
                in Japan working as a System Design Engineer at Taiyo Industrial. This experience not only 
                enhanced my technical skills but also developed my cross-cultural communication abilities.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Vancouver, BC</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">University:</span>
                  <span>UBC</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Degree:</span>
                  <span>Computer Engineering</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Graduation:</span>
                  <span>May 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Certification:</span>
                  <span>AWS Cloud Practitioner</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>English</span>
                  <span className="text-muted-foreground">Native</span>
                </li>
                <li className="flex justify-between">
                  <span>Chinese</span>
                  <span className="text-muted-foreground">Limited Working</span>
                </li>
                <li className="flex justify-between">
                  <span>Japanese</span>
                  <span className="text-muted-foreground">Limited Working</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 