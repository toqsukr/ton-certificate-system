import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.tsx'

const testManifestURL =
  'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={testManifestURL}>
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  </StrictMode>
)
