import React from 'react';

function Unlock(props) {
  return (
     <div className="column is-4 is-offset-4">
         <div className="notification is-danger">
             <button className="delete"></button>
             {props.message}
         </div>
     </div>
 )}

export default Unlock;
