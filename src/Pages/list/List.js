import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from "../../component/footer/Footer"
import Header from '../../component/Header/Header'
import Navbar from "../../component/Navbar/Navbar"
import { useState } from 'react'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';


import "./List.css"
import HotelLIst from '../../component/HotelList/HotelLIst'
import SearchFeature from '../../component/searchfeature/SearchFeature'
function List() {
  const location=useLocation();   //Location hook
  console.log(location);

  const [date, setDate] = useState(location.state.date)
  const [destination, setDestination] = useState(location.state.destination)
  const [option, setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false)


  const showdatemenu = () => {
    console.log("press");
    if (openDate === false) {
      let text = true;
      setOpenDate(text);
    }
    else {
      let text = false;
      setOpenDate(text);
    }
  }

  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="listContainer">
        <div className="listitems">          
            <div className="listSearch">
                <div className='searchTitle'>Search</div>
                <div className="searchItem">
                  <label htmlFor="">Destination</label>
              <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder={destination}/>
                </div>
            <div className="searchItem">
              <label htmlFor="">Check-in-Date</label>
              {/* <br/> */}
              {/* <input type="date" placeholder='20/11/2001' /> */}
              <span onClick={showdatemenu} >{`${format(date[0].startDate, "dd/MM/yyyy")}  to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date} className="date"
              />}
            </div>
            <div className="searchItem">
              <label htmlFor="">Options</label>
              <div className="optioncontainer">

              <div className="optionitems">
                <span>Min price <small>per day</small></span>
                <input type="number" className='optioninput' />
              </div>
              <div className="optionitems">
                <span>Max price <small>per day</small></span>
                <input type="number" className='optioninput' />
              </div>
              <div className="optionitems">
                <span>Adults</span>
                <input type="number" min={1} className='optioninput' placeholder={option.adult} />
              </div>
              <div className="optionitems">
                <span>Childrens</span>
                <input type="number" min={0} className='optioninput' placeholder={option.children} />
              </div>
              <div className="optionitems">
                <span>Room</span>
                <input type="number" min={1} className='optioninput' placeholder={option.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
            </div>
        <div className="listResult">
            <HotelLIst destination={destination}/>

        </div>
        </div>
      </div>
      <SearchFeature/>
      <Footer/>
    </div>
  )
}

export default List
