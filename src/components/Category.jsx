import React from 'react';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Category = ({ category }) => {

  const { loading, results } = useFetchGifs(category);

  return (
    <Container className='mb-4'>
      <Row>
        {
          loading && <p>Loading........</p>
        }
        {
          results.map(gif =>
            <Col lg='3' md='6' key={ gif.id } className='mb-4'>
              <GifItem gif={ gif } key={ gif.id } />
            </Col>
          )
        }
      </Row>
    </Container>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired
}

export default Category;
