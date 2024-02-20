import React from 'react'
// import userIcon from './NavComponents/Images/8380015.jpg'
import { NavLink, useNavigate } from 'react-router-dom'

const NavOne = () => {
  const navigate=useNavigate()
  const handleNavigation=()=>{
    navigate('/')
  }
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  const checkToken=localStorage.getItem('token')

  return (
    <div className='NavOneWrapper'>
     <div className='ParentNav'>
         <div id='tourismimg'>
         <img src='https://www.theindiatourism.com/images/logo.webp' alt='India Tourism' className='navimg' />
         <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='Andhra Tourism' className='navimg' onClick={handleNavigation}/>

        </div>

       <div className='emailandCont Font-Small'>
       <p  className='Font-Small'      onClick={()=>window.location='mailto:theindiatourism@gmail.com'}  >Email:info@theindiatourism.com</p>
            <div className='ContactNav Font'>
            <img src='https://www.theindiatourism.com/images/india.webp' alt='Contact' id='contImg' onClick={() => window.open('tel:+91 9201579999')}/>:+91 91256799999</div>

            </div>  
            <div>
{checkToken?(      <button onClick={handleLogout} className='Logoutbtn Font-medium'><img src="https://cdn-icons-png.flaticon.com/128/6568/6568636.png" style={{width:"2rem",height:"2rem"}} /></button>):
              <NavLink to='/login'><img src= 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png' alt='User' id='UserImg'/>
              </NavLink>
}   
              </div>     

     </div>
    </div>
  )
}

export default NavOne