import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./HotelList.css"
function HotelLIst({destination}) {


const navigate = useNavigate();     //Navigate hook
const openhoteldec = () => {
    navigate("/hotel");
}

    console.log({destination})
  return (
    <div>
      <div className="hotelListContainer">
        <div className="hotelListItem">
            <div className="hotelListImg">
            <img className='hotelListImg' src={require("../../propertieslistimg/hotel.png")} alt="" />
            </div>
            <div className="hotelListDisc">
                <div className="title">
                    Hotel Tara Valley view
                </div>
                <div className="hotellocation">
                    {destination}
                </div>
                <div className="hotelDescription">
                    Delux Double room(2 Adult + 1 Child) 
                    <br />
                    <small>1 extra-large duolbe bed</small>
                    <div className="onbookingcancelation">
                        Free Cancellation <br />
                        <small>You can cancel later, so lock in this great price today.</small>
                    </div>

                </div>

            </div>
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
                    <button onClick={openhoteldec}>
                        See Availability <FontAwesomeIcon icon={faArrowCircleRight}/>
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default HotelLIst
