import React from 'react'
import bgGif from '../assets/img/gif/head-gif.gif'
import prizeGif from '../assets/img/gif/prize-gif.gif'
import questImg from '../assets/img/png/quest.png'
import cat3Img from '../assets/img/png/cat-3.png'
import frogImg from '../assets/img/png/frog.png'
import horseImg from '../assets/img/png/horse.png'
import monkeyImg from '../assets/img/png/monkey.png'
import flowerImg from '../assets/img/png/flower.png'
import dotImg from '../assets/img/png/dot.png'
import catImg from '../assets/img/png/cat.png'
import catImg2 from '../assets/img/png/cat-2.png'
import coinImg from '../assets/img/svg/coin.svg'
import gameImg from '../assets/img/svg/game.svg'
import { Box, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Footer from './Footer'
export default function Academy() {
    return (
        <div>
            {/* section - 1  */}
            <div className='academic-main-div common-display-properties-4'>
                <div>
                    <img src={bgGif} alt="bgGif" className='academic-gif' />
                </div>
                <Typography className='large-txt primary-color academic-head-typo common-font'>
                    Intract users have together made more than $100 million in web3. <br />
                    Join them and learn how to earn crypto!
                </Typography>

                <button className='academic-button common-font'>
                    Get Started
                    <ArrowForwardIcon className='academic-button-icon' />
                </button>
            </div>

            {/* section - 2  */}

            <div className='academic-section-2'>
                <div className='academic-section-2-div '>

                    <Box className='academic-section-2-box'>
                        <div className='academic-section-2-img-box'>
                            <img src={questImg} alt="questImg" className='academic-section-2-img' />
                        </div>
                        <div className='primary-color '>
                            <Typography className='extra-large-txt common-font'>Basics of Crypto</Typography>
                            <Typography className='small-txt common-font '>The safest and easiest place to start <br /> your crypto journey!</Typography>

                            <Box className="academic-section-2-box-2 common-display-properties-1 ">
                                <img src={coinImg} alt="coinImg" className='academic-section-2-coin-img' />
                                <Typography className='common-font'>1490 XPs</Typography>
                            </Box>

                        </div>
                    </Box>
                </div>
            </div>


            {/* section - 3  */}

            <div className='academic-section-3'>
                <div style={{ float: "right", marginRight: "100px", textAlign: "start" }}>

                    <Box className="common-display-properties-4">
                        <div className='academic-section-3-r-div common-display-properties-4'>
                            <DoneIcon className='academic-section-3-r-div-icon' />
                        </div>

                        <div className='academic-section-3-img-div'>
                            <img src={catImg} alt="catImg" className='academic-section-3-img' />
                        </div>
                    </Box>



                    <Box style={{ marginLeft: "40px" }} className="common-display-properties-5">
                        <br />
                        <Typography className='academic-section-3-txt common-font'>Intract Certified: Learner NFT</Typography>
                        <Typography className='academic-section-3-txt-2 common-font'>Your crypto black-belt <br />
                            certificate</Typography>

                        <button className='academic-section-3-button common-font'>
                            Claim
                        </button>
                    </Box>
                </div>

            </div>


            {/* section - 4  */}

            <div style={{}} className='academic-section-4 common-display-properties-4'>
                <div className='academic-section-4-div '>

                    <Box className='academic-section-4-box'>
                        <div className='academic-section-4-img-box'>
                            <img src={flowerImg} alt="questImg" className='academic-section-4-img' />
                        </div>
                        <div className='primary-color '>
                            <Typography className='extra-large-txt common-font'>Introduction to Airdrops</Typography>
                            <Typography className='small-txt common-font '>Your best bet to make it big in crypto!</Typography>

                            <Box className="academic-section-4-box-2 common-display-properties-1 ">
                                <img src={coinImg} alt="coinImg" className='academic-section-4-coin-img' />
                                <Typography className='common-font'>1040 XPs</Typography>
                            </Box>

                        </div>
                    </Box>
                </div>
            </div>


            {/* section - 5  */}

            <div className='academic-section-5'>
                <div style={{ float: "left", marginLeft: "100px" }}>

                    <Box className="common-display-properties-4">
                        <div className='academic-section-5-r-div common-display-properties-4'>
                            <DoneIcon className='academic-section-5-r-div-icon' />
                        </div>

                        <div className='academic-section-5-img-div'>
                            <img src={catImg2} alt="catImg" className='academic-section-5-img' />
                        </div>
                    </Box>


                    <Box style={{ marginLeft: "30px" }} className="common-display-properties-5">
                        <br />
                        <Typography className='academic-section-5-txt common-font'>Intract Certified: Earner NFT</Typography>
                        <Typography className='academic-section-5-txt-2 common-font'>Your proof of <br />
                            airdrop expertise</Typography>

                        <button className='academic-section-5-button common-font'>
                            Claim
                        </button>
                    </Box>
                </div>

            </div>

            {/* section -6  */}

            <div className='academic-section-6'>
                <div
                    // common-display-properties-1
                    className='academic-section-6-main'>

                    <div className='' style={{}}>

                        <div className='academic-section-6-div'>
                            <Box className="academic-section-6-rew-box">
                                <Typography className='primary-color 
                             academic-section-6-rew-box-typo common-font common-display-properties-6'>
                                    <AccessTimeIcon className='academic-section-6-timer-img' />
                                    Reward unlocks in</Typography>
                            </Box>
                            <hr className='hr-dash' />

                            <Box className="academic-section-6-rew-box-2">
                                <img src={dotImg} alt="dotImg" className='academic-section-6-dot-img' />
                            </Box>
                        </div>

                        <div className='academic-section-6-div-2'>
                            <img src={prizeGif} alt="prizeGif" className='academic-section-6-div-gif' />

                            <div className='academic-section-6-div-2-div  small-txt common-font'>
                                <Box className="common-display-properties-1 common-display-properties-3">
                                    <Typography className='common-font'>Exclusive Community</Typography>
                                    <Typography className='common-font'>Earndrop
                                    </Typography>
                                </Box>
                                <hr className='hr-dash-2' />
                                <Box className="common-display-properties-1 common-display-properties-3">
                                    <Typography className='common-font'>Complete all Essential quests</Typography>
                                    <Typography>
                                        <div className='academic-section-6-r-div common-display-properties-4'>
                                            <DoneIcon className='academic-section-6-r-div-icon' />
                                        </div>
                                    </Typography>
                                </Box>
                                <Box className="common-display-properties-1 common-display-properties-3">
                                    <Typography className='common-font'>Complete at least 1 Alpha Hub quest todays</Typography>
                                    <Typography>
                                        <div className='academic-section-6-r-div common-display-properties-4'>
                                            <DoneIcon className='academic-section-6-r-div-icon' />
                                        </div>
                                    </Typography>
                                </Box>
                                <button className='academic-section-6-button common-font'>
                                    Claim Now    <ArrowForwardIcon className='academic-button-icon' />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='academic-section-6-diff'>

                        <Box className="academic-section-6-diff-box">
                            <Typography sx={{ marginTop: "10px" }} className='academic-section-6-diff-typo common-font'>Reward info</Typography>
                            <hr className='academic-section-6-diff-hr ' />
                            <Typography sx={{ marginTop: "20px" }} className='primary-color common-font'>Free access to paid KOL (crypto earning) communities!</Typography>

                            <Typography sx={{ marginTop: "20px" }} className='academic-section-6-diff-typo common-font'>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</Typography>
                            <Typography sx={{ marginTop: "20px" }} className='academic-section-6-diff-typo common-font '>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</Typography>
                        </Box>
                    </div>
                </div>
            </div>

            {/* secion 7 */}

            <div className='academic-section-7'>

                <div className='academic-section-7-div'>

                    <Typography className='common-font primary-color extra-large-txt'>Top Crypto Creators and Projects to Follow</Typography>
                    <Typography className='common-font academic-section-7-typo small-txt'>
                        Answers to your crypto doubts, straight from the experts
                    </Typography>

                </div>
                <br />
                <br />
                <br />

                <div className='academic-section-7-div-2 '>
                    <div className='academic-section-7-div-2-thumb'>
                        <img src={cat3Img} alt="cat3Img" className='academic-section-7-div-2-thumb-img' />
                        <Typography className='academic-section-7-div-2-thumb-typo common-font'>How to plan your retirement with crypto?</Typography>
                    </div>
                    <div className='academic-section-7-div-2-thumb'>
                        <img src={frogImg} alt="cat3Img" className='academic-section-7-div-2-thumb-img' />
                        <Typography className='academic-section-7-div-2-thumb-typo common-font'>Why are there limited Bitcoin?</Typography>
                    </div>
                    <div className='academic-section-7-div-2-thumb'>
                        <img src={horseImg} alt="cat3Img" className='academic-section-7-div-2-thumb-img' />
                        <Typography className='academic-section-7-div-2-thumb-typo common-font'>How does Uniswap actually work?        </Typography>
                    </div>
                    <div className='academic-section-7-div-2-thumb'>
                        <img src={monkeyImg} alt="cat3Img" className='academic-section-7-div-2-thumb-img' />
                        <Typography className='academic-section-7-div-2-thumb-typo common-font'>How to spot crypto projects to invest in?</Typography>
                    </div>
                </div>

            </div>


            {/* section -8  */}

            <div className='academic-section-8'>

                <div className='academic-section-8-div'>

                    <Typography className='common-font primary-color extra-large-txt'>Crypto Dictionary</Typography>
                    <Typography className='common-font academic-section-8-typo small-txt'>
                        Your one-stop to catch up on all crypto terms
                    </Typography>



                </div>

                <div className='academic-section-8-div-2'>
                    <img src={gameImg} alt="gameImg" className='academic-section-8-div-2-img' />
                </div>



            </div>

            <Footer />

        </div>
    )
}
