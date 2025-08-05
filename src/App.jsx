import { Route, Routes, useLocation } from "react-router";
import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Attachments/Navbar";
import AnimationTrail from "./pages/AnimationTrail";
import AboutUs from "./pages/AboutUs";
import Investors from "./pages/Investors";
import ContactUs from "./pages/ContactUs";
import JobDetails from "./pages/Careers/JobDetails";
import Ourteam from "./pages/teamour";

import { Career } from './pages/Careers/Career'
import Footer from './components/Home/Footer'
import EarlyAccess from './components/Home/EarlyAccess'
import Founders from './pages/Founders'
import teamour from './pages/teamour'
import LoadingPage from './components/LoadingPage'
import Momp from './pages/momp'
// import Lan from './components/multilanguage'
// import OpenCardComp from './components/OurTeam/OpenCardComp'
// import BacktoBottom from "./components/Home/backtobotton";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const hideNavBar = ["/momp"];
  const showNavbar = !hideNavBar.includes(location.pathname);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

    
  
  // useEffect(()=>{
  //   const script=document.createElement("script");
  //   script.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   document.body.appendChild(script);
  //   window.googleTranslateElementInit=()=>{
  //   new google.translate.TranslateElement({pageLanguage: 'te',includeLanguages:"en,ta,te,hi",layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element'); 
  //       };
  // },[])
  return (

    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          {showNavbar && <Navbar />}
   
           <div className='mt-20'>
             
          <Routes>
           
            <Route path="/" Component={Home} />
            <Route path="/animation" Component={AnimationTrail} />
            <Route path="/ourteams" Component={teamour} />
            <Route path="/about" Component={AboutUs} />
            <Route path="/investors" Component={Investors} />
            <Route path="/contactus" Component={ContactUs} />
            <Route path="/career" Component={Career} />
            <Route path="/jobdetails" Component={JobDetails} />
            <Route path="/founderbio" Component={Founders} />
            <Route path="/momp" Component={Momp} />
         
          
          </Routes>
            </div>
          {/* <EarlyAccess /> */}
        
          <Footer />
        </>
      )}
    </>
  
  );
}

export default App;
