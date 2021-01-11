import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GifItem = ({ gif }) => {
  const { title, url } = gif;
  return (
    <Card className='card animate__animated animate__bounce'>
      <Card.Img variant="top" src={ url }  style={{ width: '100%' }} id='card-image'/>
      <Card.Body>
        <Card.Title id='card-title'>{ title }</Card.Title>
      </Card.Body>
    </Card>
  );
}

GifItem.propTypes = {
  gif: PropTypes.object.isRequired
};

export default GifItem;
