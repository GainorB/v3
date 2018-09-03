import React, { Component } from 'react';
import { MyName, Welcome } from './Styled';

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Welcome>
          <MyName>Gainor Bostwick</MyName>
          {/* <SubHeader>Postgres, GraphQL, Node, Express, React</SubHeader> */}
          {/* <p>
        I’m an independent full stack web developer from New York specializing in both front-end and back-end web
        development. Currently, React and GraphQL have my ❤️.
      </p> */}
        </Welcome>
      </div>
    );
  }
}

export default Header;
