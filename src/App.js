import React,{Component} from 'react';
import classes from'./App.module.css';
import ProductData from './data.js';
import Product from './ProductPreview.js';
import Head from './header.js';
import Feature from './feature.js';

class App extends Component  {
  state={
    ProductData:ProductData,
   
    currprevimgpos:0,
    showheart:true,

  }
  onColorOptionClick = (pos) =>{

    this.setState({currprevimgpos:pos});
  }
  onFeatureitemClick =(pos) =>{
    let updated=false;
    if(pos === 1){ updated=true}
    this .setState({showheart:updated}
      )
  }

  render(){
    return (
      <div >
    <Head/>
          <div className={classes.container}>
      <Product curprevimg={this.state.ProductData.colorOptions[this.state.currprevimgpos].imageUrl} showheart={this.state.showheart}/>            
  <div className={classes.desc}>
    <Feature data={ this.state.ProductData} onColorOptionClick={this.onColorOptionClick} onFeatureitemClick={this.onFeatureitemClick} showheart ={this.state.showheart} />
  </div>
      </div>
      
      </div>
    );
  }
  
}

export default App;
