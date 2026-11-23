import { createRoot } from 'react-dom/client'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/space-grotesk'
import './styles/global.css'
import './styles/components.css'
import './styles/animations.css'
import { App } from './App.jsx'
import { profile } from './data/profile.js'

document.title = profile.name + ' | Developer Portfolio'
createRoot(document.getElementById('root')).render(<App />)
