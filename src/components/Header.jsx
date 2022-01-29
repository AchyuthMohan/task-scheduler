import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';

const Header = (props) => {
    const onClick=()=>{
        console.log("Clicked")
    }
  return <div>
      <header className='header'>
      <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={props.taskAdder}/>
      
      </header>
      
  </div>;
};

export default Header;
