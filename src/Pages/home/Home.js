import Feature from "../../component/feactures/Feature"
import FeatureProperties from "../../component/featureproperties/FeatureProperties"
import Footer from "../../component/footer/Footer"
import Header from "../../component/Header/Header"
import Navbar from "../../component/Navbar/Navbar"
import PropertiesList from "../../component/propertieslist/PropertiesList"
import SearchFeature from "../../component/searchfeature/SearchFeature"
import "./Home.css"

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <div className="home">

      
      <div className="homeContainer">
      <Feature/>
     
      </div >
        <div className="homeContainer">
          
          <PropertiesList />
          
        </div >
        <div className="homeContainer">
          <FeatureProperties />
        
      </div>
       <div>

          <SearchFeature />
       </div>
       <Footer/>

     
    </div>
    </div>
    </>
  )
}
