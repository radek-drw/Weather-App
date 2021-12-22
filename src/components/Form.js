import React from 'react';

const Form = props => {
   const { change, value } = props;

   return (
      <form>
         <input type="text" onChange={change} value={value} />
         <button>Search</button>
      </form>
   )
}

export default Form;