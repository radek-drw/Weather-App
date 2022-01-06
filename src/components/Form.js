import React from 'react';

const Form = props => {
   const { change, value } = props;

   return (
      <form>
         City: <input
            type="text"
            placeholder='Type here...'
            onChange={change}
            value={value} />
      </form>
   )
}

export default Form;