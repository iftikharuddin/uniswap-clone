'use client';
import React, { useState, useContext, useEffect } from "react";
//INTERNAL IMPORT
import { HeroSection } from "../Components/index";
import {NavBar} from "../Components/index";
import {SwapTokenContextProvider} from '../Context/SwapContext';

export default function Home() {
  return (
      <div>
          <SwapTokenContextProvider>
            <NavBar/>
            <HeroSection accounts="hey" tokenData="DATA" />
          </SwapTokenContextProvider>
      </div>
  )
}
