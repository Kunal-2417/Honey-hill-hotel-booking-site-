import React from 'react'
import Header from '../../component/Header/Header'
import Navbar from '../../component/Navbar/Navbar'
import Footer from "../../component/footer/Footer"
import SearchFeature from "../../component/searchfeature/SearchFeature"
import "./Hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge,  faCheck,  faCoffee, faDog, faHourglass,  faLocationPin,  faParking,  faSpoon, faUserGroup } from '@fortawesome/free-solid-svg-icons'

function Hotel() {
  const HotelReservation=()=>{

  }
  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="hotelContainer">
        <div className="hotelName">
          <div className="heading">
            <div className="hotelTitle">
              Hotel Tara Valley View
            </div>
            <div className="hotelLocation">
              <FontAwesomeIcon icon={faLocationPin} /> <small>Kufri Road near sanjauli tunnel Sanjauli Shimla, Himachal Pradesh, 171012 Shimla, India</small>
            </div>

          </div>
          <div className="bookingButton">
            <button>Reserve or Book Now</button>
          </div>
        </div>
          <div className="Image">
            <img className='hotelImg' src={require("../../propertieslistimg/resort.png")} alt="" />
          </div>
        <div className="hotelItem">
            <div className="hotelDescription">
            HOTEL Tara Valley View has free bikes, garden, a terrace and restaurant in Shimla. This 3-star hotel offers room service and a 24-hour front desk. Guests can enjoy mountain views.

            At the hotel, rooms are fitted with a desk. The rooms have a private bathroom, free toiletries and bed linen.

            Guests at HOTEL Tara Valley View can enjoy a buffet breakfast.

            Victory Tunnel is 5.9 km from the accommodation, while Tara Devi Mandir is 2.9 km from the property. The nearest airport is Simla Airport, 17 km from HOTEL Tara Valley View.
            </div>
          <div className="hotelMoney">

            <span className='Besttym'> Perfect For Night Stay</span>
          <div className="hotelListPrice">
            <div className="review">
              8.7
            </div>
            <small>45 reviews</small>
            <div className="pricecontainer">
              <div className="hotelprice">
                Rs.18700 <small>per day</small>
              </div>
              <small>+ Rs.700 taxesand charges</small>
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
    </div>
  )
}

export default Hotel
