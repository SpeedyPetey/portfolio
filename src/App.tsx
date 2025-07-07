import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { AppSidebar } from "@/components/AppSidebar"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Education from "@/pages/Education"
import Experience from "@/pages/Experience"
import Projects from "@/pages/Projects"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Router>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 pt-16 md:pt-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App