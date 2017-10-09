import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Layout} from 'antd';
// const Header = Layout.Header;
// const Footer = Layout.Footer;
// const Sider = Layout.Sider;
// const Content = Layout.Content;

class App extends React.Component {
  render() {
    return (
      <div>华华彩钢</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);