import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css'

const menu = () => {
    return (
        <div>
        <ul>
         <li><NavLink to={"/"} className={({isActive})=>isActive?"active":"pending"}>Home</NavLink></li>
         <li><NavLink to={"/Service"} className={({isActive})=>isActive?"active":"pending"}>Service</NavLink></li>
         <li><NavLink to={"/About"} className={({isActive})=>isActive?"active":"pending"}>About</NavLink></li>
         <li><NavLink to={"/Project"} className={({isActive})=>isActive?"active":"pending"}>Project</NavLink></li>
         <li><NavLink to={"/Blog"} className={({isActive})=>isActive?"active":"pending"}>Blog</NavLink></li>
         <li><NavLink to={"/Contact"} className={({isActive})=>isActive?"active":"pending"}>Contact</NavLink></li>
         <NavLink to={"*"} className={({isActive})=>isActive?"active":"pending"}></NavLink>
        </ul>
     </div>

    );
};

export default menu;