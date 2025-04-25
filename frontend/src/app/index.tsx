import { init } from '@telegram-apps/sdk-react'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.tsx'

try {
  init()
} catch {
  console.log('outside telegram usage')
}

const testManifestURL =
  'https://raw.githubusercontent.com/toqsukr/ton-certificate-system/refs/heads/master/frontend/tonconnect-manifest.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={testManifestURL}>
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  </StrictMode>
)
