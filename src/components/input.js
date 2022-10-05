import React from 'react';

  function inputs(props){
    return (
      <input
        name={props.inputName}
        onChange={props.change}
        type="text"
        placeholder={props.ph}
      />
    )

  }

export default inputs;
