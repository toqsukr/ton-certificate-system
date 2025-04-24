import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl='http://localhost:5173/tonconnect-manifest.json'>
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  </StrictMode>
)
