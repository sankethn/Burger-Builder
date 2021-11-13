import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')}>
                <Logo height="11%" margin="0 0 32px 0" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    )
}

export default sideDrawer;