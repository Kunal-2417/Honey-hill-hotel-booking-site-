import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { faF, faG, faL, } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [userData, setUserData] = useState({
        username: undefined,
        password: undefined
    })
    const { user, loading, error } = useContext(AuthContext)
    const navigate = useNavigate();
    const handlechange = (e) => {
        setUserData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", userData)
            // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

            navigate("/");
        } catch (error) {

        }
    }
    console.log(user)
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='8' md='5'>
                    <img src={require("./loginimg.png")} className="img-fluid" alt="Sample" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                        <MDBBtn floating size='md' className='me-2' style={{ backgroundColor: '#3B5998' }} >
                            <FontAwesomeIcon icon={faF} />
                        </MDBBtn>

                        <MDBBtn floating size='md' className='me-2' style={{ backgroundColor: '#dd4b39' }}  >
                            {/* <MDBIcon fab icon='twitter' /> */}
                            <FontAwesomeIcon icon={faG} />                        </MDBBtn>
                        <MDBBtn floating size='md' className='me-2' style={{ backgroundColor: '#0082ca' }} >
                            <FontAwesomeIcon icon={faL} />                        </MDBBtn>

                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='User Name' id='username' onChange={handlechange} type='text' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password' id='password' onChange={handlechange} type='password' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Email Address' id='email' onChange={handlechange} type='email' size="lg" />

                    {/* <div className="d-flex justify-content-between mb-4" style={{ color: 'rgb(160, 63, 234)' }} >
                        <MDBCheckbox className='danger' name='flexCheck' value=''  id='flexCheckDefault' label='Remember me' />
                        <a href="!#" style={{ color: 'rgb(160, 63, 234)' }} >Forgot password?</a>
                    </div> */}

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className="mb-0 px-5" disabled={loading} onClick={handlelogin} style={{ backgroundColor: 'rgb(160, 63, 234)' }} size='lg'>Register</MDBBtn>
                        {error && <span>{error.message}</span>}
                    </div>

                </MDBCol>

            </MDBRow>



        </MDBContainer>
    );
}

export default Register;