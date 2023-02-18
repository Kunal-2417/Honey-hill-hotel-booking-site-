import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { useNavigate } from 'react-router-dom'
// import useFetch from '../../hook/usefetch'
import "./HotelList.css"
function HotelLIst({destination,item}) {
    // const { data, loading, error } = useFetch("/hotel/get?featured=true&max=500&min=1");



const navigate = useNavigate();     //Navigate hook
const openhoteldec = () => {
    const ID=item._id;
    navigate("/hotel",{state:{ID}});
}

    console.log({destination})
  return (
    <div>
      <div className="hotelListContainer">
        {(<>
        {/* {loading ? ("Loading Plz wait"):(<> {data.map(items=>( */}

        <div className="hotelListItem">
            <div className="hotelListImg">
            <img className='hotelListImg' src={require("../../propertieslistimg/hotel.png")} alt="" />
            </div>
            <div className="hotelListDisc">
                <div className="title">
                    {item.name}{/* Hotel Tara Valley view */}
                </div>
                <div className="hotellocation">
                    {item.city}
                </div>
                <div className="hotelDescription">
                    {item.desc}  {/* Delux Double room(2 Adult + 1 Child)  */}
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
                    {item.rating}
                </div>
                <small>45 reviews</small>
                <div className="pricecontainer">
                    <div className="hotelprice">
                        {item.cheapestPrice} <small>per day</small>
                    </div>
                    <small>+ Rs.150 taxesand charges</small>
                    <button onClick={openhoteldec}>
                        See Availability <FontAwesomeIcon icon={faArrowCircleRight}/>
                    </button>
                </div>
            </div>

        </div>
        {/* )) } */}
        </>)}
      </div>
    </div>
  )
}

export default HotelLIst
