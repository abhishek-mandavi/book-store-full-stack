import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },2000);
    return () => clearTimeout(timer);
  },[]);

  if(loading){
    return <Loading />;
  }

  return (
   <>
     <AuthProvide>
        <Navbar />
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
         <Outlet/>
        </main>
        <Footer/>
     </AuthProvide>
   </>

  )
}

export default App
