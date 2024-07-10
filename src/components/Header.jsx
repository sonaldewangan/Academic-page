import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import headerIcon from '../assets/img/svg/header-icon.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
export default function Header() {

    const headerJson = [
        {
            val: "Compass"
        },
        {
            val: "Explore"
        },
        {
            val: "Academy",
            diff: true,
        },
        {
            val: "NTFs"
        },
        {
            val: "For Projects"
        },
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownOpenFun = () => {
        setIsOpen(true);
    };

    const dropdownCloseFun = () => {
        setIsOpen(false);
    };


    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(windowWidth)

    return (
        <div className='common-display-properties-1 header-main-div'>

            <div className='header-logo-div-width'>
                <Typography className='extra-large-txt common-font common-fw'>intract.</Typography>
            </div>

            <div className='common-display-properties-1  header-navigation-div-width'>
                <div className='header-navigation-txt-div-width'>

                    {
                        windowWidth > 576 ? <Box className="header-json-box common-display-properties-3">
                            {
                                headerJson.map((ele, ind) => {
                                    return (
                                        <Box className="small-txt common-font" key={ind}>
                                            {
                                                ele.diff === true ? <span className='header-json-span common-font'>{ele.val} <span className='header-json-box-add-txt'>New</span></span> : <span className='common-font'>{ele.val}</span>
                                            }

                                        </Box>
                                    )
                                })
                            }
                        </Box> : null
                    }



                </div>

                {
                    windowWidth > 992 ? <div className='header-navigation-search-icon-div common-display-properties-3 common-display-properties-1'>

                        <TextField sx={{ fontSize: "16px !important" }} id="outlined-basic" label="Outlined" variant="outlined" className='header-text-field' />

                        <div className='header-img-div'>

                            <img src={headerIcon} alt="headerIcon" />
                        </div>

                        <button className='header-button common-font'>Sign in</button>
                    </div> : <div className='menu-icon common-crsr'>
                        {
                            !isOpen ?
                                <MenuIcon onClick={dropdownOpenFun} /> : <CloseIcon onClick={dropdownCloseFun} />
                        }
                    </div>
                }


            </div>


            {
                windowWidth < 576 ?

                    <>
                        <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                            {headerJson.map((ele, ind) => {
                                return (
                                    <li
                                        className="common-font common-crsr"
                                        style={{ borderTop: "0.2px solid rgba(255, 255, 255, 0.6)", paddingLeft: "30px" }}
                                        key={`${ind}`}
                                        onClick={() => {
                                            dropdownCloseFun();

                                        }}
                                    >
                                        {ele.val}
                                    </li>
                                );
                            })}
                            <li
                                className="common-font common-crsr"
                                style={{ borderTop: "0.2px solid #dddddd", paddingLeft: "30px" }}

                            >
                                Sign in
                            </li>



                        </ul>
                    </>

                    :
                    <>
                        <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                            <li
                                className="common-font common-crsr"
                                style={{ borderTop: "0.2px solid rgba(255, 255, 255, 0.6)", paddingLeft: "30px" }}
                                onClick={dropdownCloseFun}
                            >
                                Sign in
                            </li>




                        </ul>

                    </>
            }


        </div>
    )
}
