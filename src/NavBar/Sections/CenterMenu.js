import React from "react";
import { Menu } from 'antd';
import SearchBar from './SearchBar';

function CenterMenu(props) {
  return (
<Menu mode={props.mode}>
    <Menu.Item>
      <a href="/search">Search</a>
    </Menu.Item>
  </Menu>
  )
}



export default CenterMenu