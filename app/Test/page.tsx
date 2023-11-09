'use client';
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import images from "../../assets";
import Style from "./Pools.module.css";

import { PoolAdd, PoolConnect } from "../../Components/index";
import { SwapTokenContextProvider } from "../../Context/SwapContext";

const Pool = () => {
    const { account, createLiquidityAndPool, tokenData, getAllLiquidity } = useContext(SwapTokenContextProvider);
    //
    // const [closePool, setClosePool] = useState(false);
    return (
        <div className="">
         test page
        </div>
    );
};

export default Pool;
