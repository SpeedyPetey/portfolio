import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-muted-foreground mb-6">
            I'm Peter Scholtens, a passionate Computer Engineering student at UBC creating innovative solutions 
            through full-stack development, DevOps, and emerging technologies.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="/projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-muted-foreground">
              Computer Engineering student at UBC with hands-on experience in software development, 
              DevOps, and hardware integration. Proven track record through internships at BUSTRAK, 
              Taiyo Industrial, and Brave Technology Cooperative.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-3">Latest Projects</h2>
            <p className="text-muted-foreground">
              From AR gaming applications to cross-platform social apps, I build innovative solutions 
              that combine cutting-edge technology with practical problem-solving.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-primary">🎓</span>
              <span>UBC Computer Engineering</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-700">⚡</span>
              <span className="text-blue-700 font-medium">90% Speed Improvement (Hardware)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-700">🚀</span>
              <span className="text-blue-700 font-medium">15% API Reduction (Real-time Systems)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 