import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const App = () => (
  <div className="container">
    <div>Name: create-mf-app-rspack with zephyr</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>Version: v1.1.1</div>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
