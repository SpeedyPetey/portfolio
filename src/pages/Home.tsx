import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-muted-foreground mb-6">
            I'm a passionate developer creating amazing digital experiences.
          </p>
          <div className="flex gap-4">
            <Button size="lg">View My Work</Button>
            <Button variant="outline" size="lg">Contact Me</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-muted-foreground">
              Brief introduction about yourself, your passion for development, 
              and what drives you in your career.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-3">Latest Projects</h2>
            <p className="text-muted-foreground">
              Showcase of recent work and projects that demonstrate your skills 
              and expertise in development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 