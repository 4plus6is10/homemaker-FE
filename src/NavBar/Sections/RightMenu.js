import React from "react";
import { Menu } from "antd";


function RightMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/cart">Cart</a>
    </Menu.Item>
  </Menu>
  )
} 
export default RightMenu;
