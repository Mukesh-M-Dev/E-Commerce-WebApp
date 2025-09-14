import { useEffect, useState, useRef } from 'react'
import './App.css'
import HeaderView from './View/HeaderView'
import HomePage from './Components/HomePage'  
import ToastView from './View/ToastView'
import SplashPage from './Components/SplashPage'
import { RegisterPage } from './Components/RegisterPage'
import LoginPage from './Components/LoginPage'
function App() {
  const [count, setCount] = useState(0)
  const [splash, setSplash] = useState(true);
  const [access, setAccess] = useState(false);
  const [authPage, setAuthPage] = useState("Login");
  const [userName, setUserName] =useState("");
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false);
    },2000)
  },[])
  function ValidateAccess(name){
    //alert("Access Granted")
    setAccess(true);
    setUserName(name);
  }
  function validateAuthPage(value){
    setAuthPage(value);
  }

   const toastRef = useRef();

  const showToast = (message, type) => {
    toastRef.current?.show(message, type);
  };
  return (
    <>
    <ToastView ref={toastRef}/>
   {!access ? 
   (splash ? <SplashPage/> : (authPage === "Login" ? <LoginPage checkAccess={ValidateAccess} checkAuthPage={validateAuthPage} showToast={showToast}/> : <RegisterPage checkAuthPage={validateAuthPage} showToast={showToast}/> ) )
   :
     (<HomePage userName={name}/>)
  } 
      

    </>
  )
}

export default App
