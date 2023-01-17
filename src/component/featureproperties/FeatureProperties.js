import React from 'react'
import "./FeatureProperties.css"
function FeatureProperties() {
  return (
    <section>
    <div>
      <div className="container">
        <h1>Hotels List</h1>
        <div className="row">
            <div className="items col-lg-3 col-md-3 col-sm-6">
            <div class="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Shila Hotel</h5>
                <p class="card-text">4.6* Rs.1200 per day</p>
                </div>
  
            </div>
            </div>
          <div className="items col-lg-3 col-md-3 col-sm-6">
            <div class="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
              <div class="card-body">
                <h5 class="card-title">Shila Hotel</h5>

                <p class="card-text">4.6* Rs.1200 per day</p>
              </div>

            </div>
          </div>
          <div className="items col-lg-3 col-md-3 col-sm-6">
            <div class="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
              <div class="card-body">
                <h5 class="card-title">Shila Hotel</h5>
                <p class="card-text">4.6* Rs.1200 per day</p>
              </div>

            </div>
          </div>
          <div className="items col-lg-3 col-md-3 col-sm-6">
            <div class="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
              <div class="card-body">
                <h5 class="card-title">Shila Hotel</h5>
                <p class="card-text">4.6* Rs.1200 per day</p>
              </div>

            </div>
          </div>
          <div className="items col-lg-3 col-md-3 col-sm-6">
            <div class="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
              <div class="card-body" >
                <h5 class="card-title">Shila Hotel</h5>
                <p class="card-text">4.6* Rs.1200 per day</p>
              </div>

            </div>
          </div>
          <div className="items col-lg-3 col-md-3 col-sm-6">
            <div class="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
              <div class="card-body" >
                <h5 class="card-title">Shila Hotel</h5>
                <p class="card-text">4.6* Rs.1200 per day</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}

export default FeatureProperties
