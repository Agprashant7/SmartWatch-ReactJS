import React from 'react';
import classes from './product.module.css'

const Product = (props)=>{
    
    var d=new Date();
    var hr=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    
    return(
      <div>
      
    
           <img src={props.curprevimg}
                 className={classes.imgs} alt='main'></img>
                 {
                   props.showheart ?
                   <div className={classes.info}>
                   <img className={classes.hlogo} src='https://i.imgur.com/dtevMBk.png' alt='heart'></img>
                   
                   </div>
                   :
                   <p className={classes.time}>{`${hr}:${min}:${sec}`}</p>
                 }
               
                
                </div>
              
    );
  
}
setInterval(1000,Product);
export default Product;