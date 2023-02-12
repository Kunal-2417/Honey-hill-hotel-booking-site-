import React from 'react'
import "./FeatureProperties.css"
import useFetch from '../../hook/usefetch.js'

function FeatureProperties() {
  const { data, loading } = useFetch("/hotel/pricelist");
  console.log(data);
  return (
    <section>
    <div>
      <div className="container">
        <h1>Hotels List</h1>
          {loading ? ("Loading Plz wait") : (<> 

          <div className="row">
              {data.map(items => (
            <div className="items col-lg-3 col-md-3 col-sm-6" key={items._id}>
            <div className="card" style={{ width: "17rem", height: "15rem" }}>
              <img className="featureimg" src={items.photos[0]} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text">{items.rating}* Rs.{items.cheapestPrice}per day</p>
                </div>
  
            </div>
            </div>
             ))}
          
          </div></>)}
      </div>
    </div>
    </section>

  )
}

export default FeatureProperties
