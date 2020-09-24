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
        console.log('handle collapse');
        this.setState( (prevState) => ({collapsed: !prevState.collapsed}));
    }
    closeCollapse = () => {
        console.log('close collapse');
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
                        <Nav.Item>
                            <Nav.Link as={NavLink} to={`${this.props.match.url}/hello`} href='/'>Hello</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to={`${this.props.match.url}/test`} href='/'>Test</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </OverflowWrapper>

                </Collapse>  

             </div> 
         );
    }

}
export default withRouter(SideBar);