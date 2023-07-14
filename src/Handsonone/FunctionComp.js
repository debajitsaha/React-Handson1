import React from 'react';
import "../App.css"
function FunctionComp(){
    return(
        <div className='div2'>
     <h1>This is my First Function-Base-Component</h1>
     <p className='para'> This is Done By External Css</p>
     <p style={{color:'green'}}>This is done by internal css</p>
     </div>
     );
}
export default FunctionComp;