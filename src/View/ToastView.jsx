import React,{ useState,forwardRef,useImperativeHandle, useRef } from 'react'

const ToastView = forwardRef((props, ref) => {
  const [toast, setToast] = useState({ show: "", message: '', type: '' });
 const timeoutRef = useRef(null);
  useImperativeHandle(ref, () => ({
    show(message, type = 'info') {
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
      }
      setToast({ show: "show", message, type });
      timeoutRef.current = setTimeout(() => setToast({ show: '', message: '', type: '' }), 3000);
    }
  }));

  if (!toast.show) return null;
  return (
    <div id="toast" className={`toast ${toast.show} ${toast.type}`}>{toast.message}</div>
  )
})

export default ToastView