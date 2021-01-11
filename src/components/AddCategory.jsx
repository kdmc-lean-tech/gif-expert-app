import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setCategory(categories => [inputValue, ...categories]);
      setInputValue('');
    }
  }

  return (
    <Container className='mb-4'>
      <Form onSubmit={ handleOnSubmit } id='form'>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Search gifs.....'
            value={ inputValue }
            onChange={ handleOnChange }
            id='input-text'
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory;
