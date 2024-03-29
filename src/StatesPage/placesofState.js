import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
// import SlideSlider from '../Slider';
const PlacesofState = () => {
    const individualid=useParams().id;
    const [TData,setTData]=useState([])

    const [PData,setPData]=useState([])
    const location=useLocation()
    useEffect(()=>{
      window.scrollTo(0,0)
        const fetchData=async()=>{
            try{
                const response=await axios.get('https://indiatourismbknd.onrender.com/pages/places')
                setPData(response.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[location.pathname])
    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await axios.get('https://indiatourismbknd.onrender.com/pages/tourPacakges')
          setTData(response.data)
          // console.log(response.data);
        }
        catch(err){
          console.log(err);
        }
      }
      fetchData()
    },[])

  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
   < img src=" https://img.freepik.com/premium-photo/famous-temples-khajuraho_163782-1258.jpg?size=626&ext=jpg&ga=GA1.1.980724779.1708416303&semt=ais"  style={{height:"60vh",width:"100vw"}}   alt='Not found' />


    </div>

      <div className='EntireTextWrapper'>
      <div className='TotalTextContainer'>
     {
        PData.filter((place)=>place.id===parseInt(individualid)).map((place,index)=>(

            <div key={place.id}>
                 <h3>{place.place}</h3>
                 <p className='justify Font-medium'>
                  {place.Description}
                  <br/>                  <br/>

                  {place.ptwo}
                  <br/>                  <br/>

                  {place.pthree}
                </p>

                <h3>Things to See in {place.heading.replace("Tourism","")}</h3>
<br/>

{
  // TData.map((item)=>(
    TData.filter((item)=>item.heading===place.heading).map((item,index)=>(
<div className='Dynamiccard'>
{
    PData.map((place)=>item.heading===place.heading?(

     <div key={place.id} className='CardWrapper'>
      <NavLink to={`/placesofstate/${place.id}`}>
     <img src={place.imagesrc} alt='Not Found' className='CardImgWrapper'/>
      <h2 className='Font-vSmall'>{place.place}</h2></NavLink>
 
</div>
    ):null
)
}
</div>
    ))}

                </div>
        ))
     }
     </div>




     </div>


</div>
  )
}

export default PlacesofState