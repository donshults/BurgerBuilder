import React from 'react';
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux1/Aux1';
import BackDrop from '../../UI/Backdrop/BackDrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open}  clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;