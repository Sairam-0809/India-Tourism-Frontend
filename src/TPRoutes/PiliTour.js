import React, { useEffect,useState } from 'react'

import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const PiliTour = () => {
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
<img src='https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Vrindavan-min.jpg' style={{height:"60vh",width:"100vw"}}  alt='not found '/>
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>India's Piligrimage Tour Packages </h3>
<p className='Font-Small justify'>

	
	
<a href="https://www.theindiatourism.com/india-pilgrimage-tours/index.html">India Pilgrimage Tour</a> is a specialized segment of The India Tourism, offering best pilgrimage tour packages in India at most affordable prices! offers tours to various religious destinations in India such as <b>Varanasi,</b> vaishno devi, Mansarovar, <b>Mathura,</b> Dharamsala, <b>Amritsar,</b> <b>Rishikesh,</b> <b>Kedarnath,</b> <b>Badrinath,</b> Dwarka, Bodhgaya and <a href="https://www.theindiatourism.com/india-pilgrimage-tours/amarnath-yatra-tour.html">Amarnath</a> along with various other destinations for a spiritual experience in India. 
From temples of North to South and from holy places on the eastern side of the country to sacred shrines like Shirdi in the western part, we cover almost every pilgrimage place in India. The <b>12 Jyotirlinga</b> Darshan is the most revered pilgrim tour and allows the devotees of Lord Shiva to seek the blessings of the Almighty.

We at Pilgrimage cater our services to those looking to embark on the spiritual tours in India &amp; abroad like the <a href="https://www.theindiatourism.com/india-pilgrimage-tours/kailash-mansarovar-yatra-tour.html">Kailash Mansarovar,</a> <a href="https://www.theindiatourism.com/india-pilgrimage-tours/chardham-yatra-package.html">Char Dham,</a> Amarnath Yatra and many more. On this website, you'll find packages covering almost all the religious places in India.

With approximately 50+ pilgrimage tour packages, we can proudly say that you will find the best deals to explore all the holy places in India.<br/>
<br/>
Top 10 Pilgrimage Destinations of India<br/>
<br/>
<b><a href="https://www.theindiatourism.com/places-to-visit/ajmer-tourism.html">1. Ajmer Sharif</a></b><br/>
The Lake city of Ajmer is well known for the Dargah of Sufi saint Khwaja Moin-ud-din Chishti. The <a href="https://www.theindiatourism.com/places-to-visit/ajmer-dargah-shariff.html">'Dargah Sharif'</a> in Ajmer is held in great esteem by devotees of all communities.<br/>
<br/>
<b>2. Golden Temple</b><br/>
The Golden Temple or "Darbar Sahib" at <a href="https://www.theindiatourism.com/places-to-visit/amritsar-tourism.html">Amritsar</a> is the most sacred place for the Sikhs. The Golden temple symbolizes the magnificence of the Sikhs all over the world. <br/>
<br/>
<b>3. Haridwar</b><br/>
Haridwar is one of the most important Hindu pilgrim places of India. <a href="https://www.theindiatourism.com/places-to-visit/haridwar-tourism.html">Haridwar</a> has very rich religious and cultural heritage. In the Hindu scriptures, Haridwar is known by the name of Mayapur.<br/>
<br/>
<b>4. Mansarovar</b><br/>
Mount Kailash is a sacred pilgrimage place of Asia and lies in the South-West of Tibetan autonomous region of China-Nagri, towering 6714 meters (22022 ft) above the Tibetan Plateau.<br/>
<br/>
<b>5. Mathura</b><br/>
Mathura is an important place of Hindu pilgrimage. <a href="https://www.theindiatourism.com/agra-tour-packages/mathura-vrindavan-tour-package.html">Mathura</a> is also known as the Brajbhoomi - the land where Lord Krishna was born and spent his youth. Mathura is located on the banks of River Yamuna.<br/>
<br/>
<b>6. Varanasi</b><br/>
Varanasi is the oldest and the most sacred place for the Hindus. <a href="https://www.theindiatourism.com/places-to-visit/varanasi-tourism.html">Varanasi,</a> also known as the holy city, combines in itself the cultural essence and mysticism of India. Varanasi stands on the banks of river Ganga<br/>
<br/>
<b><a href="https://www.theindiatourism.com/places-to-visit/badrinath-tourism.html">7. Badrinath</a></b><br/>
Badrinath Temple is located in the state of Uttranchal in India. Nestled between the twin mountains of "Nar" and "Narayan", the holy Badrinath pilgrimage is visited by scores of devotees every year.<br/>
<br/>
<b>8. Pushkar</b><br/>
Located in the state of Rajasthan in India, <a href="https://www.theindiatourism.com/rajasthan-tours/ajmer-tour-packages.html">Pushkar pilgrimage</a> site is one of the holiest in India. This small town has around 500 temples and is considered to be very sacred by the Hindus.<br/>
<br/>
<b>9. Shirdi</b><br/>
There is nothing dandy or gaudy about Shirdi Sai Temple. The small temple is located in a sleepy little town called Shirdi in the state of Maharashtra in India. Don't expect to see commercialization<br/>
<br/>
<b>10/ Vaishno Devi</b><br/>
Located in the mighty Trikuta Mountains at a distance of 60 kilometers from Jammu, is the famous <a href="https://www.theindiatourism.com/india-pilgrimage-tours/vaishno-devi-cave-tour.html">Vaishno Devi Temple.</a> One of the most visited and worshipped pilgrimages in India


	
</p>
<div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('Piligrimage Tours')).map((pack)=>(
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

export default PiliTour