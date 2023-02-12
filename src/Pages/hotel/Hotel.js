import React from 'react'
import Header from '../../component/Header/Header'
import Navbar from '../../component/Navbar/Navbar'
import Footer from "../../component/footer/Footer"
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../hook/usefetch'
import { useContext } from 'react'

import SearchFeature from "../../component/searchfeature/SearchFeature"
import "./Hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge,  faCheck,  faCoffee, faDog, faHourglass,  faLocationPin,  faParking,  faSpoon, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../../context/Searchcontext'
import { AuthContext } from '../../context/AuthContext'
import { useState } from 'react'
import Reserve from '../../component/Reserve/Reserve'

function Hotel() {
  const location = useLocation();   //Location hook
  const ID=location.state.ID
  const navigate=useNavigate();
  const { data, loading, error } = useFetch(`/hotel/get/${location.state.ID}`);
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false)
  
  
  const {date,city,option} = useContext(SearchContext)
  const {user}=useContext(AuthContext)
  console.log(date,city,option.room);
  console.log(data);
  const HotelReservation=()=>{
    if(user){
      setOpenModel(true);
    }else
    {
      navigate("/login")
    }
  }
const MILLISECONDS_PER_DAY=1000*60*60*24;
function dayDifference(date1,date2)
{
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const DiffDays=Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
  return DiffDays;
}
const numberofdays =dayDifference(date[0].endDate,date[0].startDate);

  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="hotelContainer">
        <div className="hotelName">
          <div className="heading">
            <div className="hotelTitle">
              {data.name}{/* Hotel Tara Valley View */}
            </div>
            <div className="hotelLocation">
              <FontAwesomeIcon icon={faLocationPin} /> <small>Kufri Road near sanjauli tunnel Sanjauli Shimla, Himachal Pradesh, 171012 Shimla, India</small>
            </div>

          </div>
          <div className="bookingButton">
            <button onClick={HotelReservation}>Reserve or Book Now</button>
          </div>
        </div>
          <div className="Image">
            <img className='hotelImg' src={require("../../propertieslistimg/resort.png")} alt="" />
          </div>
        <div className="hotelItem">
            <div className="hotelDescription">
            {data.name} has free bikes, garden, a terrace and restaurant in Shimla. This 3-star hotel offers room service and a 24-hour front desk. Guests can enjoy mountain views.

            At the hotel, rooms are fitted with a desk. The rooms have a private bathroom, free toiletries and bed linen.

            Guests at {data.name} can enjoy a buffet breakfast.

            Victory Tunnel is 5.9 km from the accommodation, while Tara Devi Mandir is 2.9 km from the property. The nearest airport is Simla Airport, 17 km from {data.name}.
            </div>
          <div className="hotelMoney">

            {/* <span className='Besttym'> Perfect </span> */}
          <div className="hotelListPrice">
            <div className="review">
              {data.rating}
            </div>
            <small>45 reviews</small>
            <div className="pricecontainer">
              <div className="hotelprice">
                {/* Rs. {data.cheapestPrice}* <small>per day</small> */}
                  Rs. {data.cheapestPrice * numberofdays*option.room}<small> for {numberofdays} days</small>
              </div>
              <small>{option.room} room</small>
              <button onClick={HotelReservation}>
                Reserve <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>
          </div>
        </div>
        <div className="moreFacilities">
          <div className="FacilitiesTitle">
            Most popular facilities
          </div>
           <div className="facilitiesLis">
            <FontAwesomeIcon className='Icon' icon={faSpoon} /> Restaurant    
            <FontAwesomeIcon className='Icon' icon={faBellConcierge} /> Room Service 
            <FontAwesomeIcon className='Icon' icon={faParking} /> Parking  
            <FontAwesomeIcon className='Icon' icon={faUserGroup} /> Family Room  
            <FontAwesomeIcon className='Icon' icon={faDog} /> Pet Allowed  
            <FontAwesomeIcon className='Icon' icon={faHourglass} /> 24-hours front desk 
            <FontAwesomeIcon className='Icon' icon={faCoffee} /> Breakfast
           </div>
        </div>

      </div>
      <SearchFeature/>
      <Footer/>
      {openModel && <Reserve setOpen={setOpenModel} hotelId={ID}/>}
    </div>
  )
}

export default Hotel
