import React from 'react';
import './Portfolios.css'

const Portfolios = () => {
  const image_01 = require("../images/portfolios/mobile_booking/Main_Origin.png");
  return (
    <div>
      <div className="container">
          <div className="card" style={{backgroundImage: `url(${image_01})`}}>
            <div className="border">            
              <div className="card-contents">
                <hr></hr>
                <h3 className='card-title'>Mobile booking App</h3>
                <hr></hr>
                <p>Driver license booking app. The system developed for android system.</p>            
              </div>
            </div>
          </div>

          <div className="card" style={{backgroundImage: `url(${image_01})`}}>
            <div className="border">            
              <div className="card-contents">
                <hr></hr>
                <h3 className='card-title'>Mobile booking App</h3>
                <hr></hr>
                <p>Driver license booking app. The system developed for android system.</p>            
              </div>
            </div>
          </div>

          <div className="card " style={{backgroundImage: `url(${image_01})`}}>
            <div className="border">            
              <div className="card-contents">
                <hr></hr>
                <h3 className='card-title'>Mobile booking App</h3>
                <hr></hr>
                <p>Driver license booking app. The system developed for android system.</p>            
              </div>
            </div>
          </div>
        
      </div>
      {/* <div className='card'>
        <img src={require("../images/portfolios/mobile_booking/Main_Origin.png")} alt='booking_app' />
      </div>  */}

      {/* <Card style={{ width:'18rem', margin:'1rem'}}>
        <Card.Img variant="top" src={require("../images/portfolios/mobile_booking/Main_Origin.png")} alt="booking_app"/>
        <Card.Body>
          <Card.Title>Mobile booking App</Card.Title>
          <Card.Text>
            Driver license booking app. The system developed for android system.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width:'18rem', margin:'1rem'}}>
        <Card.Img variant="top" src={require("../images/portfolios/mobile_booking/Main_Origin.png")} alt="booking_app"/>
        <Card.Body>
          <Card.Title>Mobile booking App</Card.Title>
          <Card.Text>
            Driver license booking app. The system developed for android system.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>     */}
      
    </div>
  );
};

export default Portfolios;