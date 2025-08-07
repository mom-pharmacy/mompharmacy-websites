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
import { Career } from './pages/Careers/Career'
import Footer from './components/Home/Footer'
import EarlyAccess from './components/Home/EarlyAccess'
import Founders from './pages/Founders'
import Teamour from './pages/Teamour'
import LoadingPage from './components/LoadingPage'
import Momp from './pages/Momp'
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
            <Route path="/ourteams" Component={Teamour} />
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
