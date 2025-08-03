"use client";
import React from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';


const Logo = () => {
    return (
      <ScrollLink to="home" smooth="true" spy="true" className="cursor-pointer">
        <img src="/Logo.png" alt="Logo" width={230} height={48}></img>
      </ScrollLink>
    );
}

export default Logo