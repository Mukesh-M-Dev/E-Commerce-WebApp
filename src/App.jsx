import { useEffect, useState } from 'react'
import './App.css'
import HeaderView from './View/HeaderView'
import ContentView from './View/ContentView'  
import ToastView from './View/ToastView'
import SplashPage from './Components/SplashPage'
import { RegisterPage } from './Components/RegisterPage'
import LoginPage from './Components/LoginPage'
function App() {
  const [count, setCount] = useState(0)
  const [splash, setSplash] = useState(true);
  const [access, setAccess] = useState(true);
  const [authPage, setAuthPage] = useState("Login");
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false);
    },2000)
  },[])
  function ValidateAccess(){
    //alert("Access Granted")
    setAccess(false);
  }
  function validateAuthPage(value){
    setAuthPage(value);
  }
  return (
    <>
   {access ? 
   (splash ? <SplashPage/> : (authPage === "Login" ? <LoginPage checkAccess={ValidateAccess} checkAuthPage={validateAuthPage} /> : <RegisterPage checkAuthPage={validateAuthPage}/> ) )
   :
     (<div id="main-app" className=""><HeaderView/><ContentView/></div>)
  } 
      

    </>
  )
}

export default App
