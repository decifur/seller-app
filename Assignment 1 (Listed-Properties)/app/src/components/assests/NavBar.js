import React, {useState} from 'react'
import './Navbar.css';

const NavBar = ({ filterItem, menuList }) => {

    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    <div className="btn-main">
                        {
                            menuList.map((currEle, index) => {
                                return (
                                    <button key={index} className='btn-group-item' onClick={() => filterItem(currEle)}>
                                        {currEle}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => filterItem("View All")} className='viewAll'> View All</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar