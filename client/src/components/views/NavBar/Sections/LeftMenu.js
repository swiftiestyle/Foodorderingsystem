import React from 'react';
import { Menu } from 'antd';

import Map2 from './../map';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="map">
      <a href="/map">Map</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu