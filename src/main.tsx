import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//App on line 8, seems like html but it is react's component thing
//index.ts or main.ts: This is the entry point of your application.
//It's where your app is initialized, and it might import and render your main component.