import { useEffect, useState, useRef } from 'react'
import './App.css'
import HomePage from './Components/HomePage'  
import ToastView from './View/ToastView'
import SplashPage from './Components/SplashPage'
import { RegisterPage } from './Components/RegisterPage'
import LoginPage from './Components/LoginPage'
function App() {
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
  function validateAuthPage(value = "Login"){
    //alert("from app", value);
    setAuthPage(value ? value : "Login");
    setAccess(false)
  }

   const toastRef = useRef();

  const showToast = (message, type) => {
    toastRef.current?.show(message, type);
  };
  return (
    <>
    <ToastView ref={toastRef}/>
   {!access ? 
   (splash ? <SplashPage/> : (authPage === "Login" ?
     <LoginPage checkAccess={ValidateAccess} checkAuthPage={validateAuthPage} showToast={showToast}/> : <RegisterPage checkAuthPage={validateAuthPage} showToast={showToast}/> ) )
   :
     (<HomePage userName={name} checkAuthPage={validateAuthPage}/>)
  } 
      

    </>
  )
}

export default App
