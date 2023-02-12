import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <div className="footer d-flex justify-content-around">
                <div className="p-2">

                    <ul className="no-bullets">
                        <li>Countries</li>
                        <li>Region</li>
                        <li>Cities</li>
                        <li>District</li>
                        <li>Airports</li>
                        <li>Hotel</li>
                    </ul>
                </div>
                <div className="p-2"> <ul className="no-bullets">
                    <li>Homes</li>
                    <li>Apartments</li>
                    <li>Resorts</li>
                    <li>Villas</li>
                    <li>Hostels</li>
                    <li>Guest House</li>
                </ul></div>
                <div className="p-2"> <ul className="no-bullets">
                    <li>Unique place to stay</li>
                    <li>All destination</li>
                    <li>Rivews</li>
                    <li>Travel communities</li>
                    <li>Seasonal and holiday deals</li>
                    <li>Discover</li>
                </ul></div>
                <div className="p-2"> <ul className="no-bullets">
                    <li>Car hire</li>
                    <li>Bike rental</li>
                    <li>Cafe reservation</li>
                    <li>Travel agents</li>
                </ul></div>
                <div className="p-2"> <ul className="no-bullets">
                    <li>About HoneyHill</li>
                    <li>Safety resouces centre</li>
                    <li>Terms & conditions</li>
                    <li>How we work</li>
                    <li>Privacy & cookies Statement</li>
                    <li>Corporate Contact</li>
                </ul></div>
            </div>

        </div>
    )
}

export default Footer