import React from 'react';

const Form = props => {
   const { submit, change, value } = props;

   return (
      <form onSubmit={submit}>
         <input
            type="text"
            onChange={change}
            value={value}
         />
         <button>Search</button>
      </form>
   )
}

export default Form;