
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses';
import ReviewSection from './components/ReviewSection'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'


// import ReviewRow from './components/ReviewRow'
// import ReviewCard from './components/ReviewCard'

const App = () =>{
  return(
    <div>
      <Navbar/> 
      
      <main>
        <div id = 'home'>
          <Home/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Courses/>
        </div>
        <div> 
          <ReviewSection/>
        </div>
        <div>
          <ContactUs/>
        </div>
        <div>
          <Footer/>
        </div>
      
      </main>
    </div>
  )
}

export default App;