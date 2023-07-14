import React,{ Component } from 'react';
import "../App.css"
class ClassComp extends Component{
 render(){
    return(
        <div className='div1'>
        <h1>This is My First Class-Base-Component</h1>
        <p className='para1'>This is Done By External Css</p>
        <p style={{color:'orange'}}>This is Done by internal Css</p>
        </div>
    )
 }
}
export default ClassComp;