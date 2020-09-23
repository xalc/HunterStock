import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SideBar.module.scss';
import { Button, Collapse, Nav } from 'react-bootstrap';
import { CaretDownFill  } from 'react-bootstrap-icons';
import { withRouter, NavLink } from 'react-router-dom';

function OverflowWrapper(props) {
    return (<div className = {cx(styles.widthScreen, props.className)}>
            {props.children}
    </div>);
}

class SideBar extends Component  {
   
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    handleCollapse = () => {
        this.setState( (prevState) => ({collapsed: !prevState.collapsed}));
    }
    closeCollapse = () => {
        this.setState({collapsed: false});
    }
    render() {
        return (
            <div 
             className = {cx(this.props.className,styles.sidebar )}
             >
                <div className ={styles.board}>
                     <span className = {styles.lable}>Board</span>
                     <Button
                         variant = 'link'
                         onClick = {this.handleCollapse}
                         className = {cx(styles.sidebar, 'p-0', 'd-md-none', 'ml-3',styles.menuButton)}
                     >
                         <CaretDownFill/>
                     </Button>
                </div>
                <Collapse in={this.state.collapsed}>

                    <OverflowWrapper >
                        <Nav defaultActiveKey="/hello" className="flex-column" onSelect={this.closeCollapse}>
                            <Nav.Link as={NavLink} to={`${this.props.match.url}/hello`}>Hello</Nav.Link>
                            <Nav.Link as={NavLink} to={`${this.props.match.url}/test`}>Test</Nav.Link>
                        </Nav>
                    </OverflowWrapper>

                </Collapse>  

             </div> 
         );
    }

}
export default withRouter(SideBar);