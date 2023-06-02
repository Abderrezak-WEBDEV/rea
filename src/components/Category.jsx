import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Category = ({filter, allCat}) => {
    
    const onFilter = (cat) => {
        filter(cat)
    }
    return (
        <Row className='my-3 mb-3'>

            <Col sm="12" className='justify-content-center d-flex'>
            {
                allCat.length >=1 ? (allCat.map((cat)=>{
                    return (
                    <div >
                        <Button  onClick={()=> onFilter(cat)} style={{ border: '2px solid black', width: "auto"  }} className='btn mx-2'>{cat}</Button>
                    </div>
                    )
                })): <h1> vous n'avez pas récupré les données</h1>
            }
            
               
            </Col>
        </Row>
    );
};

export default Category;