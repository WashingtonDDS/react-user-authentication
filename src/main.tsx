import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import { SignUp } from './pages/SignUp/index.tsx'
// import { SignIn } from './pages/SignIn/index.tsx'
import { Home } from './pages/Home/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <SignIn /> */}
    {/* <SignUp /> */}
    <Home />
  </React.StrictMode>,
)
