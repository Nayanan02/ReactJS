import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoriteColor from './usestate.jsx';  
// import Car from './props.jsx';  
import Brand from './props.jsx';
import CounterFunction from './FuncComponent.jsx'
import CounterClass from './Classcomponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FavoriteColor/>
    <Brand/>
    <CounterFunction/>
    <CounterClass/>
  </StrictMode>,
)
