import React from 'react';
import cx from 'classnames';
import styles from './SideBar.module.scss';
function SideBar(props) {
    return (
       <div 
        className = {cx(props.className,styles.sidebar )}

        >DashBoard</div> 
    );

}
export default SideBar;