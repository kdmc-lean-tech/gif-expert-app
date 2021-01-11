import React, { Fragment, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import AddCategory from './AddCategory';
import Category from './Category';

const GifExpertApp = ({ defaultCategories=[] }) => {

  const [ categories, setCategory ] = useState(defaultCategories);

  return (
    <Fragment>
      <Jumbotron className="text-center">
        <h1>GifExpertApp</h1>
      </Jumbotron>
      <AddCategory setCategory={ setCategory }/>
      {
        categories.map((category, idx) => <Category key={ idx.toString() } category={ category }/>)
      }
    </Fragment>
  );
}

export default GifExpertApp;
