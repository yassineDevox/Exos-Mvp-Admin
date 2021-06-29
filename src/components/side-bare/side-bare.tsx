import React from 'react'
import { MENU } from '../../constants/menu-cts';
import SideBarItem from "./side-bare-item";


const SideBare = () => {
    return (
        <SideBarItem titleDomain="Dashboard" linksPages={MENU} />
    )
}

export default SideBare;
