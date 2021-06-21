import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Link} from "react-router-dom";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";

export default function Home(){
    const slider = (
        <AwesomeSlider>
          <div>
            Food Item 1
            <br></br>
            <br></br>
            <Link to={{pathname: "/home/food/1", state:{image: image1, title: "Food item 1"}}}><img src={image1} alt="image1" width="80%"/></Link>
          </div>
          <div>
            Food Item 2
            <br></br>
            <br></br>
            <Link to={{pathname: "/home/food/2", state:{image: image2, title: "Food item 2"}}}><img src={image2} alt="image2" width="30%"/></Link>
          </div>
          <div>
            Food Item 3
            <br></br>
            <br></br>
            <Link to={{pathname: "/home/food/3", state:{image: image3, title: "Food item 3"}}}><img src={image3} alt="image3" width="30%"/></Link>
          </div>
        </AwesomeSlider>
      );    
    return(
        <div style={{width: "120vh"}}>
            {slider}
        </div>
    )
}