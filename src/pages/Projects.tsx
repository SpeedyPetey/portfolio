import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-blue-200">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">GATHER (Personal Startup)</h2>
              <p className="text-muted-foreground text-sm mb-4">
                A cross-platform social app for real-time voice messaging, media sharing, and 
                location-based interactions. Built with Firebase for authentication and instant communication.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Flutter</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Dart</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Firebase</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Real-time Communication</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">View Details</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-blue-200">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">AR Video Game</h2>
              <p className="text-muted-foreground text-sm mb-4">
                An AR FPS game where players use phones as controllers. Features machine learning 
                to recognize players by clothing and ranks shot quality with real-time image processing.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Augmented Reality</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Machine Learning</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Computer Vision</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Real-time Processing</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Video Demo</Button>
              <Button size="sm" variant="outline">Code</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Smart Glasses Imitation</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Raspberry Pi-based wearable device with OpenCV for facial recognition. Provides 
                personalized audio info about recognized people and translates live conversations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Raspberry Pi</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">OpenCV</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Facial Recognition</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Translation</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Code</Button>
              <Button size="sm" variant="outline">Details</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Bus Tracking System</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Real-time bus tracking and replay system built at BUSTRAK. Monitors 300+ buses 
                simultaneously with optimized API calls and interactive UI elements.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vue.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Real-time Systems</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Google Cloud</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Interactive Maps</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Professional Work</Button>
              <Button size="sm" variant="outline">Details</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Hardware Acceleration System</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Developed at Taiyo Industrial in Japan. Improved data transfer speeds by 90% 
                between controller PCs and electrical testing machines with custom GUI automation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">C++</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">MFC</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Hardware Integration</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">System Automation</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Professional Work</Button>
              <Button size="sm" variant="outline">Documentation</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">UBC Thunderbots</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Software Engineer Volunteer for Canada's only 6v6 soccer robot design team. 
                Contributed to 1st place victory in 2021 competition.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Robotics</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">C++</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Team Collaboration</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Competition</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Team Project</Button>
              <Button size="sm" variant="outline">Awards</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button asChild>
            <a href="https://github.com/speedypetey" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
} 