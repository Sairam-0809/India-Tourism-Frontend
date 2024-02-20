import React from 'react'
// import SlideSlider from '../../Slider'
const ContactUs=()=>{
    return(
       
    <div className='Wrapper'>
    <div className='Slider'>
      {/* <SlideSlider/> */}
      <img src=" https://www.theindiatourism.com/images/the-india-tourism.jpg" alt='Not found' style={{width:"100vw"}} />
    </div>
    <div className='EntireTextWrapper'>
    <div className='TotalTextContainer'>
    <h3 className='contact-title'>Contact Us</h3>
    <p className='Font-medium justify'>Thank you for showing your interest in The India Tourism Tour & Travel services. Please provide the information about your tour requirements in order to help us to serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 24 hours.</p>
     <br/>
     <div className='Container'>
    <div className='ContainerOne'>
     <h2>The India Tourism</h2>
     <h2 style={{color:'brown'}}>SAIRAM</h2>
     <img style={{color:'brown'}} src='https://www.theindiatourism.com/images/wa-logo.png' alt='WhatsApp: '/> <span style={{color:'brown'}}>+91 8850874914</span> 
     <h2>Office Hours:(9:30 am to 5:30 pm)</h2>
     <p  className='Font-Small' style={{color:'brown'}}     onClick={()=>window.location='mailto:sairamsachin914@gmail.com'}  >Email:info@theindiatourism.com</p>

     </div>

     <div className='ContainerTwo'>
        <img src='https://www.theindiatourism.com/images/paypal.png' alt='Paypal' />
     </div>
     <div className='ContainerThree'>
        <h3>Follow Us</h3>
        <div className='FollowsImgs'>
          <a href='www.facebook.com'> <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt='Fb' id='contImg'/></a>
          <a href='www.instagram.com'> <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt='instagram' id='contImg'/></a>
         <a href='www.linkedin.com'>  <img src=" https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt='linkedin' id='contImg'/></a>
        </div>
        <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.png' alt='Athithi DevoBhava'/>

     </div>

     </div>
     <div className='Container' style={{marginTop:"2rem"}}>
     <div className='ContainerOne'>
     <h2>Jaipur Head Office :</h2>
     {/* <h2 style={{color:'brown'}}>SAIRAM</h2>
     <img style={{color:'brown'}} src='https://www.theindiatourism.com/images/wa-logo.png' alt='WhatsApp: '/> <span style={{color:'brown'}}>+91 8850874914</span> 
     <h2>Office Hours:(9:30 am to 5:30 pm)</h2>
     <p  className='Font-Small' style={{color:'brown'}}     onClick={()=>window.location='mailto:sairamsachin914@gmail.com'}  >Email:info@theindiatourism.com</p> */}
<p className='address'>

   B-26 ,Shekhawath Colony, Sirsi Road,

</p>
    <p className='address'>
      Jaipur ,Rajasthan
      </p> 
      <p className='address'>
         Phone: <span>+91 - 9549279999</span></p></div>

     <div className='ContainerTwo'>
        <h2>Pushkar Branch</h2>
        <p className='address'>Motisar link Road ,Behind pushkar Railway Station
        </p>
     </div>
     <div className='ContainerThree'>
        <h2>Jodhpur Office</h2>
        <p className='address'>469 mohan nagar B , BJS colony
Jodhpur (Rajasthan)</p>
       
     </div>
     <div className='ContainerThree'>
      <h2>Jaisalmer Office:</h2>
      <p className='address'>469 mohan nagar B , BJS colony
Jodhpur (Rajasthan)</p>
     </div>

     </div>



     </div>
        </div>
        </div>
        

        
    )
}
export default ContactUs