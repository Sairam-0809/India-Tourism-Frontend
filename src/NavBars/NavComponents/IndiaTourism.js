import React, { useState,useEffect } from 'react'
import axios from 'axios'
 import { NavLink, useLocation } from 'react-router-dom'

const IndiaTourism = () => {
  const [TData,setTData]=useState([])
  const location=useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
    const fetchData=async()=>{
      try{
        const response=await axios.get('https://the-india-tourism.onrender.com/pages/tourPacakges')
        setTData(response.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[location.pathname])
  return (
    <div className='HomeWrapper'>
      <div className='Slider'>
{/* <SlideSlider/> */}
<img src="https://www.theindiatourism.com/images/the-india-tourism.jpg" alt='Not found' />
      </div>

        <div className='EntireTextWrapper'>
        <div className='TotalTextContainer' style={{marginTop:"-5rem"}}>
          <h3>Tourism of India</h3> 
          <p className='Font-medium justify'>

India Tourism, <b>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra</b> along with a few others are some of the best <b>places to visit</b> in India. With a variety of attractions, these places urge you to travel to your heart's content. And, whatever you are going to explore, will surely leave a long-lasting impression on you. 
<b>Beaches, backwaters</b>, vast stretches of <b>deserts</b>, snow-laden peaks and Indian <b>wildlife sanctuaries</b> make the country one of the best winter destinations. Tourism India during the winter season are perfect ways of bidding farewell to the previous year and welcoming the new one excitingly.
 When the sun starts shining brightly, people throng the picturesque hill stations with snow-laden peaks. A perfect escape from the scorching heat and soaring temperature can be found only in India.

  </p>


  <div className='EntireCardWrapper' style={{marginBottom:"3rem"}}>
  {/* {
  TData.map((item)=>(
  
    <div key={item.id} className='CardWrapper'>
      <NavLink to={`/stateIndividual/${item.id}`}>


      <img src={item.imagesrc} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{item.heading}</h2>
      </NavLink>
      
      </div> 
      
  ))
 } */}


<div className='CardWrapper'>
    <NavLink to='/golden' target="_blank">
   <img src='https://www.theindiatourism.com/images/Golden-Triangle-package.webp' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Golden Triangle Tours</h2>
   </NavLink>
   </div>
   <div className='CardWrapper'>
   <NavLink to='/shopping' target="_blank">

   <img src='https://www.theindiatourism.com/images/India-Shopping-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>India Shopping Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/food'>

   <img src='https://www.theindiatourism.com/images/India-Food-Tours.jpg' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>India Food Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
    <NavLink to='/north'>
   <img src='https://www.theindiatourism.com/images/tajmahalagra.webp' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>North India Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
    <NavLink to='/south' target="_blank">
   <img src='https://www.theindiatourism.com/images/SouthIndia.webp' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>South India Tours</h2>
   </NavLink> </div>

   <div className='CardWrapper'>
    <NavLink to='/luxury'>
   <img src='https://www.theindiatourism.com/images/Budget-Tour.webp' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>India Luxury Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/solo' target="_blank">
   <img src='https://www.theindiatourism.com/images/keralatour.webp' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Solo Woman India Tours</h2>
   </NavLink></div>

   <div className='CardWrapper'>
   <NavLink to='/budget'>

   <img src='https://www.theindiatourism.com/images/rajasthanpackages.webp' alt='Not Found' className='CardImgWrapper'/>
   <h2 className='Font-vSmall'>Budget India Tours</h2>
   </NavLink></div>





  </div>     
</div>

</div>
    </div>
  )
}

export default IndiaTourism