import AliceCarousel from 'react-alice-carousel';
import { CardText, CardTitle, CardImgOverlay, CardImg,Card,CardSubtitle,CardBody,CardGroup } from "reactstrap";
import "react-alice-carousel/lib/alice-carousel.css";
import slide1 from "../components/slide1.jpg"
import slide2 from "../components/slide2.jpg"
import slide3 from "../components/slide3.jpg"
import slide4 from "../components/slide4.jpg"
import 'react-slideshow-image/dist/styles.css';
import '../components/slide.css';


const slides = () => {
    return(
<div>
<AliceCarousel autoPlay autoPlayInterval={"500"}>

<p><img  style={{
        height:485,
        width:1263
    }}
src={slide1} className="sliderimg"></img></p>
<p><img 
    style={{
        height:500,
        width:1263
    }}
src={slide2} className="sliderimg"></img></p>
{/* <p><img src={yes10} className="sliderimg"></img></p> */}
<p><img src={slide3} className="sliderimg"></img></p>
<p><img
    style={{
        height:600,
        width:1300
    }}
src={slide4} className="sliderimg"></img></p>

</AliceCarousel>
</div>


)}
export default slides;

