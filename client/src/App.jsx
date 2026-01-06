import Menu from './pages/Menu'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Menu />
    </ThemeProvider>
  )
}

export default App
