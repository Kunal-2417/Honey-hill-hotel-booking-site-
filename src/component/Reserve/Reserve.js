import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import React from 'react'
import "./Reserve.css"
import useFetch from '../../hook/usefetch'
import { useContext } from 'react'
import { SearchContext } from '../../context/Searchcontext'
import { useNavigate } from 'react-router-dom'

function Reserve({ setOpen, hotelId }) {
  const { date } = useContext(SearchContext);
  console.log(date)
  const DateRangeinfo = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate)
    const date = new Date(start.getTime());
    let list = []
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  }
  const allDates =DateRangeinfo(date[0].startDate,date[0].endDate)

  const Availability=(roomNumber)=>{
    const isFound=roomNumber.unavailableDates.some(date=>
      allDates.includes(new Date(date).getTime())
    )
    return !isFound
  }

  const { data, loading, error } = useFetch(`/hotel/room/${hotelId}`)
  // console.log(data);
  const fix = () => {
    setOpen(false);
  }

  const [selectRoom, setSelectRoom] = useState([])
  const roomSelect = (e) => {
    const selected = e.target.checked
    const value = e.target.value
    setSelectRoom(selected ? [...selectRoom, value] : selectRoom.filter(items => items !== value))
  }
  // console.log(selectRoom)
  const navigate = useNavigate();

  const reserveRoom =async () => {
    try{
      await Promise.all(selectRoom.map((roomId)=>{
    const res = axios.put(`/hotelroom/bookroom/${roomId}`, { dates: allDates });
    return res.data;

      })
      );
      setOpen(false);
      navigate("/")
      
    }catch(error){

    }
  }
  return (
    <>
      <div className="reserve">
          <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={fix} />
        <div className="rcontainer">
          <span><h3>Select your room:</h3></span>
          {data.map((items) => (
            <div className="rItem" key={items?._id}>
              <div className="rInfo">
                <div className="rTitle">Title: <b>{items?.title}</b></div>
                <div className="rDesc">Description: <b>{items?.disc}</b></div>
                <div className="rMaxPeople">Maximum People:<b>{items?.maxPeople}</b></div>
                <div className="rPrice">Price:<b>{items?.price}</b></div>
              </div>
              <div className="rSelectRooms">

              {items?.roomNumbers.map(roomNumber => (
                <div className="room">
             
                  <label>{roomNumber?.number}</label>
                  <input type="checkbox"
                   value={roomNumber?._id}
                   onChange={roomSelect}
                   disabled={!Availability(roomNumber)}/>
                </div>
              ))
            }
            </div>

            </div>
          ))}
<button className='rButton' onClick={reserveRoom}>Reserve Now</button>
        </div>
      </div>
    </>
  )
}
Reserve.propsType = {
  setOpen: PropTypes.boolean
}
export default Reserve
