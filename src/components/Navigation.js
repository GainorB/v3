import React, { Component } from 'react';
import { debounce } from 'lodash';
import { Nav } from './Styled';

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { scrollTop: 0, isScrolling: true };
  //   this.scrollPosition = debounce(this.updateScrollPosition, 50).bind(this);
  //   this.myNav = React.createRef();
  // }

  // componentDidMount = () => {
  //   this.updateScrollPosition();
  //   window.addEventListener('scroll', this.scrollPosition, true);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.scrollPosition, true);
  // };

  // updateScrollPosition() {
  //   let scrollTop = 0;
  //   if (this.myNav) {
  //     scrollTop = this.myNav.scrollTop;
  //   } else {
  //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   }

  //   this.setState({
  //     scrollTop,
  //   });
  // }

  render() {
    return (
      <div ref={this.myNav}>
        <Nav>
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
