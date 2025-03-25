import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoriteColor from './Component/usestate.jsx'; 
import Timer from './Component/useeffect.jsx';  

// import Car from './props.jsx';  
import Brand from './Component/props.jsx';
import CounterFunction from './Component/FuncComponent.jsx'
import CounterClass from './Component/Classcomponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FavoriteColor/>
    <Timer/>
    <Brand/>
    <CounterFunction/>
    <CounterClass/>
  </StrictMode>,
)
