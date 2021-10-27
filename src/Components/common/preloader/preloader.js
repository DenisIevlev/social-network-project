import React from 'react';
import spinner from '../../../assets/img/spinner.svg';
import classes from '../../users/user.module.css';

let Preloader = () => {
    return (
        <div> 
        <img className={classes.spinner} src={spinner}/> 
        </div> 
    )
}

export default Preloader;