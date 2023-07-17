import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobolStyle } from './styles/themes/globol'
import { Router } from './Router'
import { ProfileDataProvider } from './context/ContextData'
import { AxiosLib } from './lib/axios'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProfileDataProvider>
          <Router />
          <AxiosLib />
        </ProfileDataProvider>
      </BrowserRouter>

      <GlobolStyle />
    </ThemeProvider>
  )
}
