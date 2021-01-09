import React from 'react';
import Card from 'react-bootstrap/Card';

const GifItem = ({ gif }) => {
  const { title, url } = gif;
  return (
    <Card className='card animate__animated animate__bounce'>
      <Card.Img variant="top" src={ url }  style={{ width: '100%' }}/>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default GifItem;
