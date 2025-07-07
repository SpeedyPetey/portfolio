export default function Blog() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Building Modern Web Applications with React and TypeScript</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>December 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
                <span>•</span>
                <span>Web Development</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Exploring the benefits of using TypeScript in React applications and how it improves 
              developer experience and code quality. Learn about best practices and common patterns.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Best Practices</span>
            </div>
            <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">The Future of Frontend Development</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>December 10, 2024</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>Technology Trends</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              A deep dive into emerging trends in frontend development, including new frameworks, 
              tools, and methodologies that are shaping the future of web development.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Frontend</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Trends</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Future</span>
            </div>
            <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Optimizing React Performance: Tips and Tricks</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>December 5, 2024</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>Performance</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Learn practical techniques to optimize your React applications for better performance. 
              From memoization to code splitting, discover the tools and strategies that make a difference.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Performance</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Optimization</span>
            </div>
            <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">My Journey from Junior to Senior Developer</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>November 28, 2024</span>
                <span>•</span>
                <span>10 min read</span>
                <span>•</span>
                <span>Career</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Reflecting on my career journey, the challenges I faced, lessons learned, and advice 
              for developers looking to advance their careers in the tech industry.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Career</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Growth</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Advice</span>
            </div>
            <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Building Accessible Web Applications</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>November 20, 2024</span>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span>Accessibility</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Understanding the importance of web accessibility and practical steps to make your 
              applications inclusive for all users. Learn about ARIA, semantic HTML, and testing tools.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Accessibility</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ARIA</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Inclusive Design</span>
            </div>
            <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  )
} 