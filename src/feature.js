import React from 'react';
import classes from './feature.module.css';


const Feature = (props) =>{
    const color=props.data.colorOptions.map((item,pos)=>{
    
        return(
            <img key={pos} src={item.imageUrl} className={classes.subim} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}/>
        );
    })
    const featurelist=props.data.featureList.map((item,pos) =>{
    return(  <button onClick={() => props.onFeatureitemClick(pos)}>{item}</button>);
    })
    return(
        <div>
        <h1 className={classes.heading}>{props.data.title}</h1>
  <p className={classes.desc}>{props.data.description}</p>
  <h3>Select Colors</h3>
  {color}
  {/*
  <img src='https://imgur.com/PTgQlim.png' className={classes.subim}/>
  <img src='https://imgur.com/Mplj1YR.png' className={classes.subim}/>
  <img src='https://imgur.com/xSIK4M8.png' className={classes.subim}/>*/}
  <h3>Features</h3>
  {featurelist}
  <button>Buy Now</button>
  </div>
    );


}
export default Feature;