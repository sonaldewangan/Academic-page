import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer-main-div' >
      <div className='footer-div'>

        <div className='footer-div-first primary-color'>
          <Typography className='common-font common-fw'>intract .</Typography>
          <Typography className='common-font spl-font'>We are your personal guide for exploring <br /> web3 projects & earning 100x rewards</Typography>
        </div>

        <div className='footer-div-second'>

          <Box className='primary-color footer-sm-txt'>
            <Typography className='common-font common-fw'>INTRACT</Typography>
            <Typography className='common-font spl-font'>Explore Quests</Typography>
            <Typography className='common-font spl-font'>Comunities</Typography>
            <Typography className='common-font spl-font'>Alpha Hub</Typography>
          </Box>

          <Box className='primary-color footer-sm-txt'>
            <Typography className='common-font common-fw'>EARN</Typography>
            <Typography className='common-font spl-font'>Refer & Earn</Typography>
            <Typography className='common-font spl-font'>Leaderboard</Typography>
            <Typography className='common-font spl-font'>Achievements</Typography>
          </Box>

          <Box className='primary-color footer-sm-txt'>
            <Typography className='common-font common-fw'>ABOUT</Typography>
            <Typography className='common-font spl-font'>Product Roadmap</Typography>
            <Typography className='common-font spl-font' >Affiliate Program</Typography>
            <Typography className='common-font spl-font'>Sign up Program</Typography>
            <Typography className='common-font spl-font'>Growth Community</Typography>
            <Typography className='common-font spl-font'>Blogs</Typography>
          </Box>
          <Box className='primary-color footer-sm-txt'>
            <Typography className='common-font common-fw'>SUPPORT</Typography>
            <Typography className='common-font spl-font'>Help Center</Typography>
            <Typography className='common-font spl-font'>Create your quest</Typography>
            <Typography className='common-font spl-font'>Terms of Service</Typography>
            <Typography className='common-font spl-font'>Privacy Policy</Typography>
            <Typography className='common-font spl-font'>Community Guidelines
            </Typography>
          </Box>

        </div>

      </div>

      <div className='footer-div-2 primary-color'>

        <Typography className='common-font'> Disclaimer : <span className='footer-div-2-typo common-font'>Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </span></Typography>
      </div>

      <div className='footer-div-3'>
        <Typography className='primary-color common-font'>CREATED BY <span className='footer-span common-font'>INTRACT</span> </Typography>

      </div>

    </div>
  )
}
