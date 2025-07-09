import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from 'next-themes';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <themeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {/* Radix UI Theme Provider */}
    <Theme>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Theme>
    </themeProvider>
  </StrictMode>,
)
