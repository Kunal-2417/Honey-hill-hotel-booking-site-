import React from 'react'
import { useLocation} from 'react-router-dom'
import Footer from "../../component/footer/Footer"
import Header from '../../component/Header/Header'
import Navbar from "../../component/Navbar/Navbar"
import { useState } from 'react'
import { format } from 'date-fns';
import { useContext } from 'react';

import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/Searchcontext';


import "./List.css"
import useFetch from '../../hook/usefetch'
import refetch from '../../hook/usefetch'
import HotelLIst from '../../component/HotelList/HotelLIst'
import SearchFeature from '../../component/searchfeature/SearchFeature'
function List() {

  
  
  const location=useLocation();   //Location hook
  console.log(location);
  
  const [date, setDate] = useState(location.state.date)
  const [destination, setDestination] = useState(location.state.destination)
  const [option, setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(1000)

  
  
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
  console.log(min,max)
  // const { data, loading, error } = useFetch(`/hotel/get?city=${destination}&min=${min || 0}&max=${max || 1000}`);
  const { data, loading, refetch } = useFetch(`/hotel/get?city=${destination}`);
  console.log(min,max);
  // console.log(destination)
  console.log(data);

  const { dispatch } = useContext(SearchContext)

  const navigate = useNavigate();     //Navigate hook
   const research=()=>{
    refetch();
       dispatch({ type: "NEW_SEARCH", payload: { destination, date, option } })
       navigate("/list", { state: { date, destination, option } })
   }

  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      {<><div className="listContainer">
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

              {/* <div className="optionitems">
                <span>Min price <small>per day</small></span>
                <input type="number" onChange={e=>setMin(e.target.value)} className='optioninput' />
              </div>
              <div className="optionitems">
                <span>Max price <small>per day</small></span>
                  <input type="number" onChange={e => setMax(e.target.value)} className='optioninput' />
              </div> */}
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
            <button onClick={research}>Search</button>
            </div>
          
        <div className="listResult">
            {loading ? "LOading plxz wait" : <>{data.map(item=>(
              <HotelLIst destination={destination} item={item} key={item._id} />
            ))}
            </>}
            {/* <HotelLIst destination={destination}/> */}

        </div>
        </div>
      </div></>}
      <SearchFeature/>
      <Footer/>
    </div>
  )
}

export default List
