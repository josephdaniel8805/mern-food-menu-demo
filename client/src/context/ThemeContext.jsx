import { createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: '#402218',
      secondary: '#865439',
      accent: '#C68B59',
      light: '#D7B19D'
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
