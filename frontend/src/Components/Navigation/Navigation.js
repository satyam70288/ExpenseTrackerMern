import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.jpeg'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Satyam Bharti</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 280px; /* Reduced width for a more modern look */
    height: 100%;
    background: linear-gradient(145deg, #6a73e0, #3b4f9c); /* Soft gradient background */
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(6px);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Added subtle shadow for depth */

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: rgba(255, 255, 255, 0.1); /* Slight transparent background */
        padding: 1rem;
        border-radius: 10px;

        img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.5rem;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Enhanced shadow for profile picture */
        }

        h2 {
            color: #fff; /* White text for better contrast */
            font-size: 1.3rem;
            font-weight: 600;
        }

        p {
            color: rgba(255, 255, 255, 0.7); /* Light white text */
            font-size: 1rem;
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.8rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            color: rgba(255, 255, 255, 0.8); /* Light text color */
            padding-left: 1.5rem;
            position: relative;
            border-radius: 8px;
            padding: 10px;

            i {
                color: rgba(255, 255, 255, 0.8);
                font-size: 1.5rem;
                transition: all 0.3s ease-in-out;
            }

            &:hover {
                background: rgba(255, 255, 255, 0.1); /* Subtle hover effect */
                color:rgb(245, 14, 14); /* Highlighted text color on hover */
                i {
                    color:rgb(247, 13, 13); /* Change icon color on hover */
                }
            }
        }
    }

    .active {
        color:rgb(23, 235, 153) !important;
        i {
            color:rgb(23, 235, 153) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 6px;
            height: 100%;
            background: #6a73e0;
            border-radius: 0 10px 10px 0;
        }
    }
`;


export default Navigation