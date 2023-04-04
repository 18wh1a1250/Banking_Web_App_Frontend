import Base from "../components/Base"
import contact from "../pages/contactUs1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { CardText, CardTitle, CardImgOverlay, CardImg,Card,CardSubtitle,CardBody,CardGroup } from "reactstrap";

const ContactUs = ()=>{
    return (
      <Base>
       <div>
       <Card  body
  color="light">
    <CardImg
      alt="Card image cap"
      src={contact}
      style={{
        height: 300
      }}
      width="100%"
    />
  </Card>
<Container style={{
    paddingTop:20
}}>

<CardGroup>
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
                <h3>Email & SMS</h3>
       </strong>
        
       </div>

       <Container style={{
        paddingTop:40
       }}>
       <h5>banktouch@bank.in<br></br>
            SMS HELP space <br></br>
            +91 9552220020 <br></br>
            For YES FIRST Customers:<br></br>
            yesfirst@yesbank.in</h5>
       </Container>

       
      
      </CardText>
</Container>

      {/* <Button>
        Button
      </Button> */}
    </CardBody>
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
                <h3>Call Us</h3>
       </strong>
        
       </div>

       <Container style={{
        paddingTop:40
       }}>
       <h5>Call Us - India<br></br>
        1800 1200 (Toll Free)<br></br>
        Timings: 8:00 AM - 8:00 PM <br></br>
        (Post 8 PM till 8 AM only critical service offered)</h5>
       </Container>

       
      
      </CardText>
</Container>

      {/* <Button>
        Button
      </Button> */}
    </CardBody>
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
      <CardText >
        
       <div>
        <strong>
                <h3>Call Us - Outside India</h3>
       </strong>
        
       </div>

       <Container style={{
        paddingTop:40,
       }}>
       <h5 color="#ADD8E6">
        02250795101 (Outside India)<br></br>
        1833 380 0149 (USA)<br></br>
        1833 491 0559 (CANADA)<br></br>
        800 048 9153 (UK)<br></br>
        8000 3570 2510 (UAE)</h5>
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
</div>
      </Base>
    )
}

export default ContactUs