import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyles from './styles/global'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="container">
        <GlobalStyles />
        <h1>Revisão ao Vivo</h1>
        <p>
          Aqui vamos ver um exemplo de como usar Temas com o Styled Components! Peguem a pipoca e assistam o Show!
        </p>
        <button className="changetheme"
          onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Trocar Tema
        </button>
      </div >
    </ThemeProvider>
  )
}

export default App;