import React from 'react'
import useFetch from '../../hook/usefetch.js'

function PropertiesList() {
    const { data, loading} = useFetch("/hotel/countByType");
    console.log(data);
    const images=[
        require('../../propertieslistimg/hotel.png'),
        require('../../propertieslistimg/resort.png'),
        require('../../propertieslistimg/tiny.png'),
        require('../../propertieslistimg/stupa.png')
    ]
  return (
    <div>
          {loading ? ("Loading Plz wait") : (<>   <div className="proterties">
              <div className="container">
                  <span className='Title'>Browse by property type

                 <ul className="cards">
                  {data &&images.map((img,i)=>(
                      <li className="card" key={i}>
                          <div>
                              <div className="card-content">
                                  <div className="cardTitle">
                                      <div className="featureTitle">
                                         {data[i]?.type}
                                      </div>
                                      <div className="featureTitledecs">
                                          {data[i]?.count}   {data[i]?.type}s
                                      </div>
                                  </div>
                                  <img className="featureimg" src={img} alt="" />
                              </div>
                          </div>
                      </li>                                           
                  ))}
                  </ul>
                  </span>
              </div>
          </div></>)}
    </div>
  )
}

export default PropertiesList
