import "./footer.css" 
import React from 'react'

import { IoMdMenu } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
    <footer className='container-footer'>
        <Link to={'/home'}><IoMdMenu /></Link>
       <Link to={'/cart'}><BsCartFill /></Link> 
       <Link to={'/'}><CiUser /></Link> 
    </footer>)
}





