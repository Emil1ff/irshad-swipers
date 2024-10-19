import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SecTwo from './assets/components/Section-2/SecTwo.jsx'
import SecThree from './assets/components/Section-3/SecThree.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <SecTwo />
    <SecThree />
  </>
)
