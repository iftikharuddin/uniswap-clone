import React, {useState, useEffect, useContext} from 'react';
import Image from "next/image";
import Link from "next/link";

// import internal
import Style from './NavBar.module.css';
import images from '../../assets';
import {Model, TokenList} from '../index';

function NavBar(props) {
    const menuItems = [
        {
            name: "Swap",
            link: "/",
        },
        {
            name: "Tokens",
            link: "/",
        },
        {
            name: "Pools",
            link: "/",
        },
        {
            name: "Tokens",
            link: "/",
        },
    ];

    // usestate
    const [openModel, setOpenModel] = useState(false);
    const [openTokenBox, setOpenTokenBox] = useState(false);
    return (
        <div className={Style.NavBar}>
            <div className={Style.NavBar_box}>
                <div className={Style.NavBar_box_left}>
                    Left
                </div>
                <div className={Style.NavBar_box_right}>
                    Right
                </div>
            </div>
        </div>
    );
}

export default NavBar;