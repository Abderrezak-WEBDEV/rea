import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <Col sm="12" className='justify-content-center text-center'>
                <h1>Notre Menu</h1>
                 <div className='justify-content-center d-flex'>
                    <p className='header-line'></p>
                 </div>
            </Col>
        </Row>
    );
};

export default Header;