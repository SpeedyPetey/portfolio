import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("light")
    } else {
      // If system, switch to light first
      setTheme("light")
    }
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${isDark ? 'bg-primary' : 'bg-muted'}
      `}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-background transition-transform duration-200 ease-in-out
          ${isDark ? 'translate-x-6' : 'translate-x-1'}
        `}
      >
        <span className="flex h-full w-full items-center justify-center text-xs">
          {isDark ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  )
} 