import React, { useEffect ,useState} from 'react'
// import SlideSlider from './../Slider'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Solotour = () => {
  const [PData,setPData]=useState([])

  const loc=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
    const getData=async()=>{
      try{
        const response=await axios.get('https://indiatourismbknd.onrender.com/pages/packs')
        setPData(response.data)
        // console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getData()

  },[loc.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
    
    <img src=" https://www.seeingsam.com/wp-content/uploads/2020/05/FeatureImagesWP-2.jpg"  style={{height:"60vh",width:"100vw"}}   alt='Not found' />

    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>Solo Tour Packages </h3>
<p className='Font-Small justify'>

	
	The biggest challenge is to travel and traveling is almost next to impossible for a <b>solo .</b> Without going too far we can land up to the most beautiful places in India itself with the aid of some trustful source where the journey is safe and secure. Exploring India solo requires taking certain precautions and sacrificing small freedoms. But it’s worth it.<br/>
Women searching the ultimate liberation may discover it in exploring the tourist destinations of India on their own. <a href="https://www.theindiatourism.com/solo-woman-india-tours/women-special-holiday-tour.html">Women Special packages.</a> Whether you're searching for a <b>luxury Women Tour</b> to unwind and enjoy, special holidays with loved ones, a trek to your most loved chillout spot or another tourist destination, Welgrow travels brings to you the best of Women Special tours. Remember your life again and add a little zest to it with energizing holidays.

Our women special luxury tours are suitable for women of all ages, from <a href="https://www.theindiatourism.com/solo-woman-india-tours/single-travel-tour-packages.html">single women</a> in their 30s to women who have invested years bringing up children, dealing with their home or building a fruitful vocation. We travel in little groups with similar lifestyle women, and our services are specially composed and customized for <a href="https://www.theindiatourism.com/solo-woman-india-tours/solo-women-trips-india.html">female travelers.</a>



	
</p>
<div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('Solo Woman India Tours')).map((pack)=>(
    <div key={pack.id} className='CardWrapper'>
<NavLink to={`/itp/${pack.id}`}>

      <img src={pack.img} alt={pack.img} className='CardImgWrapper'/>
     <h2 className='Font-vSmall'> {pack.head}</h2>
     </NavLink>
      </div>
  ))
}
</div>
</div>
</div>
</div>
  )
}

export default Solotour