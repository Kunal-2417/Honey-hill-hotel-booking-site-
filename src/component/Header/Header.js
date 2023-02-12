import React, { useContext } from 'react'
import './Header.css'
import "../Navbar/Navbar.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays,  faCarriageBaby, faLocationPin, faPeopleGroup,  faRestroom,  faUser } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/Searchcontext';
import { AuthContext } from '../../context/AuthContext';





console.log("kunal");
const Header = ({ type }) => {

  const { user } = useContext(AuthContext)



  const [openDate, setOpenDate] = useState(false)
  // const [openOption, setOpenOption] = useState(false)
  const [destination,setDestination]=useState("")
  const [option, setOption] = useState({
    children: 0,
    adult: 1,
    room: 1
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


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


  const {dispatch} = useContext(SearchContext)
// let goingplace=document.getElementById('destination');
// setDestination(goingplace.value);
// console.log(destination.place);


  //Search booking form
  const setGuestValue = () => {
    let numberadult = document.getElementById('adult');
    let numberchildren = document.getElementById('children');
    let numberroom = document.getElementById('room');
    setOption({
      adult: numberadult.value,
      children: numberchildren.value,
      room: numberroom.value
    })
    console.log(option.adult);
    console.log(option.children);
    console.log(option.room);


  }
   const navigate=useNavigate();     //Navigate hook
  const handleSearch=()=>{
    dispatch({ type:"NEW_SEARCH",payload:{destination,date,option}})
    navigate("/list",{state:{date,destination,option}})
  }
  
const loginpage=()=>{
  navigate("/login")
}







  return (
    <>


      <div className="header">
        <div className={type === "List" ? "headerContainer listMode" :"headerContainer"}>
          <div className="headerlist">
            <div className="headerlistitem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stay</span>
            </div>
            {/* <div className="headerlistitem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flight</span>
            </div>
            <div className="headerlistitem">
              <FontAwesomeIcon icon={faTrain} />
              <span>Train</span>
            </div>
            <div className="headerlistitem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerlistitem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div> */}

          </div>
          <div className="headerheading">
            {type!=="List" &&
              <>
                <h1>Hurry up! Grab upto <span className="discount">50% discount</span> </h1>
                {!user&&(<div>

                <h4 className="headerdesc">Redeem special offer just by login</h4>
                <button className="btn my-2 mb-3 mr-3 btn-purple" onClick={loginpage}>Login/Register</button>
                </div>)}
                <div className="headerSearch">
                  <div className="headerSearchitems">
                    <FontAwesomeIcon icon={faLocationPin} className="headericon" />
                    <input placeholder='Where are you going' type="text" id="destination" onChange={(e)=>setDestination(e.target.value)} className='headersearchinput' />
                  </div>
                  <div className="headerSearchitems">
                    <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                    <span onClick={showdatemenu} className="headersearchtext">{`${format(date[0].startDate, "dd/MM/yyyy")}  to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date} className="date"
                    />}
                  </div>
                  <div className="headerSearchitems">
                    <FontAwesomeIcon icon={faPeopleGroup} className="headericon" />
                    <span className='headersearchtext'>{`${option.adult} Adult -   ${option.children} Children  -${option.room} Room`}</span>
                    <Dropdown>


                      <Dropdown.Toggle variant="//color" id="dropdown-basic">
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="guest">
                          <h6>Select numbers</h6>
                          <div className="input-group mb-2">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} className="headericon" /></span>
                            <div className="form-floating">
                              <input type="text" className="form-control" id="adult" placeholder="adult" />
                              <label for="adult">Adults</label>
                            </div>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faCarriageBaby} className="headericon" /></span>
                            <div className="form-floating">
                              <input type="text" className="form-control" id="children" placeholder="children" />
                              <label for="children">Childrens</label>
                            </div>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faRestroom} className="headericon" /></span>
                            <div className="form-floating">
                              <input type="text" className="form-control" id="room" placeholder="room" />
                              <label for="room">Rooms</label>
                            </div>
                          </div>
                          <button onClick={setGuestValue} className="btn my-2 mb-3 mr-3 btn-purple">Done</button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="headerSearchitems">
                    <button onClick={handleSearch} className="btn my-2 mb-3 mr-3 btn-purple">Search</button>
                  </div>
                </div>
              </>

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header