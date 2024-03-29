import React, { useEffect,useState } from 'react'
// import SlideSlider from '../Slider'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const FoodTour = () => {
  const location=useLocation();
  const [PData,setPData]=useState([])

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

  },[location.pathname])
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
<img src="https://img.freepik.com/premium-photo/table-full-food-including-rice-curry-plate-food_900958-7307.jpg?size=626&ext=jpg&ga=GA1.1.980724779.1708416303&semt=ais" style={{height:"60vh",width:"100vw"}} alt='Not found' />
    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
        <h3>India Shopping Tour Packages </h3>
<p className='Font-Small justify'>
	
	
<b>India Food Tour</b> provides custom made India <a href="https://www.theindiatourism.com/india-food-tours/index.html">culinary tour packages</a> with Indian food tours, <b>cooking classes,</b> tea tasting, wine tasting, photo tours, bar crawls and many other fun things to do in India. These activities can be included in almost any general travel itinerary as addons. For more serious food lovers and discerning travelers, we offer custom designed <b>culinary travel itineraries</b> which offer the best of <b>culinary activities</b> as well as  many other interesting activities for the authentic India experience. A <a href="https://www.theindiatourism.com/india-food-tours/culinary-tour-south-india.html">food tour</a> is one of best ways to explore <b>cuisine,</b> sights and culture. It is a city tour, <b>food walk,</b> sightseeing, urban exploration and culinary tour of India city in one package. The eating part of the food tour include sampling different varieties of street food from various places in the <b>itinerary.</b> Food is all that you can eat, but we insist you to have a little of everything and enjoy the variety.  We place a lot of stress on hygiene and only trusted and safe vendors which serve good and hygienic food are on our list. Apart from the usual and must see, the food tours cover some under-rated and less explored places of India which very few people know about. there are some food items which are staple food for almost all across the country. Rice and various types of Indian bread like, chappatis, rotis, naan, and puris are consumed along with side dishes of pulses, vegetables, meat, yogurt and pickles. The curries and gravies are the ones that mainly differ in each zone.

	</p>
  <div className='EntireCardWrapper'>
{
  PData.filter((pack)=>pack.heading.includes('India Food Tours')).map((pack)=>(
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

export default FoodTour