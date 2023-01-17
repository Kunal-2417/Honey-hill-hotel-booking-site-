import React from 'react'
import "./SearchFeature.css"
function SearchFeature() {
  return (
    <div>
        <div className="Searchcontainer">
            <div className="Searchitem">
                    <span className="heading">Save Time,save money</span>
            </div>
                  <div className="Searchitem">
                  <span className="desc">Sign up and we'll send the best deals to you</span>

                  
                  </div>
                  <div className="Searchitem">
                     <input className="bar" type="text" placeholder="Subscribe" />
                    <button className="btn my-2 mx-1 mb-3 mr-3 btn-primary">Login</button>
                  </div>
        </div>
        
      </div>

  )
}

export default SearchFeature
