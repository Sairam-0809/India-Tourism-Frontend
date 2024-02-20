import React from 'react'


const Footer = () => {
  return (
    <div className='FooterWrapper'>
    <div className='leftSide'>
        <div>
            <h2>The India Tourism</h2>
            <p  className='Font-Small'      onClick={()=>window.location='mailto:suprajakurapati8@gmail.com'}  >Email:info@theindiatourism.com</p>
        </div>
        <div>
        <div className='FollowsImgs'>
          <a href='www.facebook.com'> <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt='Fb' id='contImg'/></a>
          <a href='www.instagram.com'> <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt='instagram' id='contImg'/></a>
         <a href='www.linkedin.com'>  <img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt='linkedin' id='contImg'/></a>
        </div>
        <img src='https://www.theindiatourism.com/images/paypal.png' alt='Paypal' />

        </div>
    </div>
    <div className='BigImg'>
        <img src='https://www.theindiatourism.com/images/India-tour-footer.webp' alt='Not Found' id='BigImg'/>
        <div className='CopyWright'>
            <br/>
        <p class="Font-medium">© The India Tourism</p>
    </div>

    </div>
    </div>
  )
}

export default Footer