import { useEffect } from 'react';
import style from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';

export const Navigation = () => {

    return (
        <nav className={style.navStyle}>
            <div>
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to="/">Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to="/about">About</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to="/user">User</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to="/userposts">Posts</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to="/login">Login</NavLink>

            </div>
        </nav>
    )
}