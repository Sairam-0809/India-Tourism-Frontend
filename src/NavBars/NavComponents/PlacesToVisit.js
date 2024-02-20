import React from 'react'
// import SlideSlider from '../../Slider'
import { NavLink } from 'react-router-dom'

const PlacesToVisit = () => {
  return (
    <div className='HomeWrapper'>
    <div className='Slider'>
      <img src="https://img.freepik.com/free-photo/camel-caravan-dune-erg-chebbi-morocco_53876-139877.jpg?size=626&ext=jpg&ga=GA1.1.980724779.1708416303&semt=ais" style={{width:"100vw",height:"60vh"}}  alt='not found'/>
    </div>
    <div className='EntireTextWrapper'>
    <div className='TotalTextContainer'>
<h3>Top Tourist Destinations in India</h3>

<p className='Font-medium justify'>

<b>Top Tourist Destination India</b> is the home to numerous attractions, amenities, activities and beauties. It is not hard to believe that a land as diverse as India has a long list of travel destinations within its border. Starting from the valleys of <b>Kashmir</b> to the tri-colored sea of <b>Kanchipuram</b>, you will find numerous tourist attractions, which would suit your taste. If you were visiting India in winter, <b>Rajasthan</b>, <b>Agra</b>, <b>Maharashtra</b>, <b>Tamil Nadu</b>, <b>Kerala</b>, <b>Chandigarh</b>, <b>Karnataka</b>, Goa and other places would be in the top choice. If you choose to visit India in the monsoon, <b>Uttarakhand</b>, <b>Munnar</b>, <b>Mussorie</b>, <b>Cherrapunji</b> and Coorg are some of the places to choose. 
  </p>

  <div className='EntirePlacesWrapper'>
    <div className='visitWrapper'>
      <h3>Andhra Pradesh Tourism</h3>
      <img src='https://gumlet.assettype.com/swarajya/2021-07/bae51cbe-b00f-4342-ba00-18df9634edca/ramappa_temple.jpg?w=1200&auto=format%2Ccompress&ogImage=true' alt='Not Found' className='CardImgWrapper'/>
      <h3><NavLink to='/placesofstate/1'>Waranagl</NavLink></h3>
      <h3><NavLink to='/placesofstate/2'>Yaganti Caves</NavLink></h3>
      <h3><NavLink to='/placesofstate/5'>Ananthagiri Hills</NavLink></h3>
      <h3><NavLink to='/placesofstate/6'>Araku Valley</NavLink></h3>
      <h4><NavLink to='/stateIndividual/1'> View All</NavLink></h4>

    </div>

    <div className='visitWrapper'>
      <h3>Arunachal Pradesh Tourism</h3>
     <img src='https://gumlet.assettype.com/swarajya/2021-07/bae51cbe-b00f-4342-ba00-18df9634edca/ramappa_temple.jpg?w=1200&auto=format%2Ccompress&ogImage=true' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/9'>.Itanagar</NavLink></h3>
     <h3><NavLink to='/placesofstate/10'>.Bomdila</NavLink></h3>
     <h3><NavLink to='/placesofstate/11'>.Tawang</NavLink></h3>
     <h3><NavLink to='/placesofstate/12'>.Parasuram kund</NavLink></h3>
     <h4><NavLink to='/stateIndividual/2'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Assam Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Top-destination-Assam.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/17'>.Guwahati</NavLink></h3>
     <h3><NavLink to='/placesofstate/18'>.Majuli Island</NavLink></h3>
     <h3><NavLink to='/placesofstate/19'>.kaziranga Nationalpark</NavLink></h3>
     <h3><NavLink to='/placesofstate/21'>.Tejpur</NavLink></h3>
     <h4><NavLink to='/stateIndividual/3'> View All</NavLink></h4>

    </div>

    <div className='visitWrapper'>
      <h3>Bihar Tourism</h3>
     <img src='https://i0.wp.com/files.tripstodiscover.com/files/2015/10/Mahabodhi-temple-bodh-gaya.jpg?resize=800%2c600' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/25'>.Bodhgaya</NavLink></h3>
     <h3><NavLink to='/placesofstate/26'>.Patna</NavLink></h3>
     <h3><NavLink to='/placesofstate/27'>.Rajgir</NavLink></h3>
     <h3><NavLink to='/placesofstate/29'>.Nalanda</NavLink></h3>
     <h4><NavLink to='/stateIndividual/4'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Chattisgarh Tourism</h3>
     <img src='https://www.theindiatourism.com/images/Destination-Chhattisgarh.jpg' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/33'>.Mahamaya Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/34'>.Bambleshwari Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/36'>.Bhoramdeo Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/37'>.Achanakmar Wildlife</NavLink></h3>
     <h4><NavLink to='/stateIndividual/5'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Goa Tourism</h3>
     <img src='https://th.bing.com/th/id/OIP.XrMzbBElHBnHbboyFIlJYQHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/41'>.Aguoada Fort</NavLink></h3>
     <h3><NavLink to='/placesofstate/42'>.DhudhSagar Waterfalls</NavLink></h3>
     <h3><NavLink to='/placesofstate/43'>.Baga Beach</NavLink></h3>
     <h3><NavLink to='/placesofstate/45'>.Anjuna Beach</NavLink></h3>
     <h4><NavLink to='/stateIndividual/6'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Gujarat Tourism</h3>
     <img src='https://th.bing.com/th/id/OIP.cG80nvoi_BjpZk6Xt104swHaE8?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/49'>.Rani-ki-vav</NavLink></h3>
     <h3><NavLink to='/placesofstate/50'>.Gir National Park</NavLink></h3>
     <h3><NavLink to='/placesofstate/51'>.Dwarakadish Temple</NavLink></h3>
     <h3><NavLink to='/placesofstate/52'>.Rann of Kutch</NavLink></h3>
     <h4><NavLink to='/stateIndividual/7'> View All</NavLink></h4>
    </div>

    <div className='visitWrapper'>
      <h3>Haryana Tourism</h3>
     <img src='https://th.bing.com/th/id/OIP.GlybQV2GqV_izY0XmyjL1QHaE5?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Not found' className='CardImgWrapper'/>
     <h3><NavLink to='/placesofstate/57'>.Gurugram</NavLink></h3>
     <h3><NavLink to='/placesofstate/58'>.Kurukshetra</NavLink></h3>
     <h3><NavLink to='/placesofstate/59'>.panchkula</NavLink></h3>
     <h3><NavLink to='/placesofstate/60'>.Faridabad</NavLink></h3>
     <h4><NavLink to='/stateIndividual/8'> View All</NavLink></h4>
    </div>



  </div>

    </div>
    </div>

    </div>
  )
}

export default PlacesToVisit