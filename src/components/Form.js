import React from 'react';

const Form = ({ change, value }) => {

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