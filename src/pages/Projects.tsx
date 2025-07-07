import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">E-Commerce Platform</h2>
              <p className="text-muted-foreground text-sm mb-4">
                A full-stack e-commerce solution with React, Node.js, and MongoDB. 
                Features include user authentication, payment processing, and admin dashboard.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Node.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">MongoDB</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Stripe</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Live Demo</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Task Management App</h2>
              <p className="text-muted-foreground text-sm mb-4">
                A collaborative task management application with real-time updates, 
                drag-and-drop functionality, and team collaboration features.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Socket.io</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">PostgreSQL</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Live Demo</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Weather Dashboard</h2>
              <p className="text-muted-foreground text-sm mb-4">
                A responsive weather dashboard with location-based forecasts, 
                interactive charts, and weather alerts integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Chart.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">OpenWeather API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Tailwind CSS</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Live Demo</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Social Media Dashboard</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Analytics dashboard for social media management with data visualization, 
                post scheduling, and engagement tracking.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Next.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">D3.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Prisma</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vercel</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Live Demo</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Recipe Finder</h2>
              <p className="text-muted-foreground text-sm mb-4">
                A recipe discovery app with ingredient-based search, nutritional information, 
                and meal planning features.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vue.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vuex</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Spoonacular API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Firebase</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Live Demo</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
              <p className="text-muted-foreground text-sm mb-4">
                This very portfolio website built with React, TypeScript, and Tailwind CSS. 
                Features responsive design and smooth animations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Tailwind CSS</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vite</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Live Demo</Button>
              <Button size="sm" variant="outline">GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 