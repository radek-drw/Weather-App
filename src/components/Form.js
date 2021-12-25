import React from 'react';

const Form = props => {
   const { change, value } = props;

   return (
      <form>
         City: <input type="text" onChange={change} value={value} />
      </form>
   )
}

export default Form;