import React from 'react';
// import styled from "styled-components";

//TODO: Implement the stars AND the date.
const SearchResult = ({ genus, name, family, order, nutritions }) => {

  return (
      <div>
          <div className="genus">{genus}</div>
          <div className="name">{name}</div>
          <div className="family">{family}</div>
          <div className="order">{order}</div>
          <div className="nutritions">
              <h3>Nutritions: </h3>
              <ul className="nutrition">
                  <li>Carbohydrates: {nutritions.carbohydrates}</li>
                  <li>Protein: {nutritions.protein}</li>
                  <li>Fat: {nutritions.fat}</li>
                  <li>Calories: {nutritions.calories}</li>
                  <li>Sugar: {nutritions.sugar}</li>
              </ul>
          </div>

      </div>
  );
};

export default SearchResult;

// const SearchResultStyles = styled`
//
// `