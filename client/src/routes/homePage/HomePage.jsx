import { useContext } from "react"
import SearchBox from "../../components/searchbox/SearchBox"
import "./homePage.scss"
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {

  const {currentUser} = useContext(AuthContext)
  
  console.log(currentUser);
  return (
    <div className="homePage">
        <div className="textContainer">
           <div className="wrapper">
                <h1 className="title">
                    This is  Your DREAM PLACE. We are promised to fulfill your desire
                </h1>
                <p className="description">
                Discover your dream home with us. From cozy suburban retreats to luxurious urban abodes, we have the perfect property for every lifestyle.
                </p>


                <SearchBox/>

                
                <div className="boxes">
                    <div className="box">
                        <h1>25+</h1>
                        <h2>Years Experience</h2>
                    </div>

                    <div className="box">
                        <h1>850+</h1>
                        <h2>Award Gained</h2>
                    </div>

                    <div className="box">
                        <h1>2500+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
           </div>
        </div>

        <div className="imgContainer">
            <img src="/apartment.avif" alt="" />
        </div>
    </div>
  )
}

export default HomePage