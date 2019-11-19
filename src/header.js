import React from 'react';
import classes from './header.module.css'

const Head =() =>{

return(
    <div>
        <header className={classes.header}>
        <center>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtERe2JljLCEMxOZhzpsVo8L5aC0habuEqsBov2QrbISnfywT&s" className={classes.logo} alt='logo'/ >
        </center>  </header>
    </div>

);

}
export default Head;