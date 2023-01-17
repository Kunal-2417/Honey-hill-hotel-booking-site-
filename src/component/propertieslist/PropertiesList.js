import React from 'react'

function PropertiesList() {
  return (
    <div>
          <div className="proterties">
              <div className="container">
                  <span className='Title'>Browse by property type
                  <ul className="cards">
                      <li className="card">
                          <div>
                              <div className="card-content">
                                  <div className="cardTitle">
                                      <div className="featureTitle">
                                          Hotel
                                      </div>
                                      <div className="featureTitledecs">
                                          Capital of himachal
                                      </div>
                                  </div>
                                  <img className="featureimg" src={require('../../propertieslistimg/hotel.png')} alt="" />
                              </div>
                          </div>
                      </li>
                      <li className="card">
                          <div>
                              <div className="card-content">
                                  <div className="cardTitle">
                                      <div className="featureTitle">
                                          Resort
                                      </div>
                                      <div className="featureTitledecs">
                                          Himalayan skiing & treking
                                      </div>
                                  </div>
                                  <img className="featureimg" src={require('../../propertieslistimg/resort.png')} alt="" />
                              </div>
                          </div>
                      </li>
                      <li className="card">
                          <div>
                              <div className="card-content">
                                  <div className="cardTitle">
                                      <div className="featureTitle">
                                          Tiny House
                                      </div>
                                      <div className="featureTitledecs">
                                          Dalai lama's home
                                      </div>
                                  </div>
                                  <img className="featureimg" src={require('../../propertieslistimg/tiny.png')} alt="" />
                              </div>
                          </div>
                      </li>
                      <li className="card">
                          <div>
                              <div className="card-content">
                                  <div className="cardTitle">
                                      <div className="featureTitle">
                                          Stupa Guest house
                                      </div>
                                      <div className="featureTitledecs">
                                          North india railway jnc.
                                      </div>
                                  </div>
                                  <img className="featureimg" src={require('../../propertieslistimg/stupa.png')} alt="" />
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
              </div>
          </div>
    </div>
  )
}

export default PropertiesList
