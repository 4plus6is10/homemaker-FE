import React from "react";
import { Menu } from "antd";
import {useStateValue} from '../../StateProvider'

function RightMenu(props) {
  const [{basket}, dispatch] = useStateValue();

  return (
    <Menu mode={props.mode}>
    <Menu.Item>
      <a href="/cart">Cart</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/detail">Test</a>
    </Menu.Item>
  </Menu>
  )
} 
export default RightMenu;
