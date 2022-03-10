import React from 'react';
var SearchBar = (props) => {
  // console.log('passed down' + typeof(props.buttonClick));
  return (
    <div className='search-bar'>
      <input className='form-control' type="text" />
      <button onClick={props.buttonClick} className="search-button">submit</button>
    </div>
  );
};

export default SearchBar;