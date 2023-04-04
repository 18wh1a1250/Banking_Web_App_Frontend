import Base from "../components/Base";
import { CardText, CardTitle, CardImgOverlay, CardImg,Card,CardSubtitle,CardBody,CardGroup } from "reactstrap";
import counteraxis from "../components/aboutUs1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import bankcounter from "../components/aboutUs2.jpg";
import { Container } from "reactstrap";

const AboutUs=()=>{
    return (
    

    <Base>
           <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={counteraxis}
      style={{
        height: 370
      }}
      width="100%"
    />
    <CardImgOverlay>
      {/* <CardTitle tag="h5">
        Bank
      </CardTitle> */}

      <CardText className="text-center">
        <div className="col-md-12"></div>
      </CardText>

      <CardText>
        {/* <small className="text-muted">
          Last updated 3 mins ago

          
        </small> */}
      </CardText>
    </CardImgOverlay>
  </Card>
</div>


<Container style={{
    paddingTop:20
}}>

<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={bankcounter}
      top
      width="100%"
    />
   
     
  </Card>
  

 
  <Card>
    
    <CardBody className="text-center">
      <CardTitle tag="h1" style={{
        paddingTop:20
        
      }}>
       
      </CardTitle>
    


<Container style={{
    paddingTop:10
}}>
      <CardText>
        
       <div>
        <strong>
                <h3>Our Corporate Office!</h3>
       </strong>
        
       </div>

       <Container style={{
        paddingTop:40
       }}>
       <h5>BANK House,<br></br>
        Off Western Express Highway,<br></br>
        Santacruz (East), Mumbai - 400055<br>
        </br><br></br>banktouch@bank.in</h5>
       </Container>

       
      
      </CardText>
</Container>

      {/* <Button>
        Button
      </Button> */}
    </CardBody>
  </Card>
</CardGroup>


</Container>

    </Base>

    
    )   
        
};

export default AboutUs;