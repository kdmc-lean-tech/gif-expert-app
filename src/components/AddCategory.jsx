import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';

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
      <Form onSubmit={ handleOnSubmit }>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Search gifs.....'
            value={ inputValue }
            onChange={ handleOnChange }  
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default AddCategory;
