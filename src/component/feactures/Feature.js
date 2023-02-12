import React from 'react'
import useFetch from '../../hook/usefetch.js'
import "./Feature.css"
function Feature() {

  const { data, loading } = useFetch("/hotel/countByCity?cities=shimla,Paonta Sahib,Dharamshala");
  console.log(data);
  return (
    <section>
      <div className="feature">
      {loading?("Loading Plz wait"):(<><div className="container">
        <span className='Title'>Mosted visited places
        <ul className="cards">
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                <div className="featureTitle">
                  Shilma
                </div>
                <div className="featureTitledecs">
                  {data[0]} properties
                </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Shimla.jpg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Manali
                  </div>
                  <div className="featureTitledecs">
                    {data[1]} properties
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Manali.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Dharamshala
                  </div>
                  <div className="featureTitledecs">
                    {data[2]} properties
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Dharamshala.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Kasauli
                  </div>
                  <div className="featureTitledecs">
                    North india railway jnc.
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Kasauli.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Dalhousie
                  </div>
                  <div className="featureTitledecs">
                    Colonial-era churches
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Dalhousie.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Chail
                  </div>
                  <div className="featureTitledecs">
                    Trekking point
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Chail.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Kasol
                  </div>
                  <div className="featureTitledecs">
                    Honeymoon & backpacking
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Kasol.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Spiti Valley
                  </div>
                  <div className="featureTitledecs">
                  Cold desert mountain valley
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Spiti.jpeg')} alt="" />
              </div>
            </div>
          </li>
          <li className="card">
            <div>
              <div className="card-content">
                <div className="cardTitle">
                  <div className="featureTitle">
                    Kufri
                  </div>
                  <div className="featureTitledecs">
                    Zoo,yak and equestrain
                  </div>
                </div>
                <img className="featureimg" src={require('../../touristplacesimg/Kufri.jpeg')} alt="" />
              </div>
            </div>
          </li>
          
        </ul>
        </span>
        </div></>)}
      </div>
    </section>
  )
}

export default Feature
