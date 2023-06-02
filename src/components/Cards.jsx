import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import LightSpeed from "react-reveal/Zoom";
const Cards= ({donnees})=> {
    
    return (
    < Row style={{ width: '100%', height: '20px' }}>
       {
        donnees.length >= 1 ? (donnees.map((item)=> {
             
            return (
                
                <LightSpeed   key= {item.id} sm="12" className=' mb-2'  >
                <Card className=' bg-dark d-flex flex-row w-100 text text-white m-3'>
                    <Card.Img  style={{ width: '200px', height: "auto"}} variant="top" src={item.image}/>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-between'>
                                <div>{item.title}</div>
                                <div className='plat-price text text-primary'>{item.price}</div>
                            </Card.Title>
                            <Card.Text>
                               {item.description}
                            </Card.Text>
                    </Card.Body>
                </Card>
            </LightSpeed>
            )
        })): <h1 className='text-center'>Objet introuvable!!!</h1> 
        
       }
        
    </Row>
        
    );
};

export default Cards;