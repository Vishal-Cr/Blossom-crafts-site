import React, { Fragment } from 'react'
import BlossomImage from '../assets/HeaderImage.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
//image extension should be mentioned so react does'nt take it as a components.
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Blossom Crafts</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['img-div']}>
            <img className={classes['header-image']}src={BlossomImage} alt="image of cherry blossoms" />
            </div>
               
            
        </Fragment>
    )
}

export default Header
