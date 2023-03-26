import { Typography, Box, Divider } from '@mui/material'
import React from 'react'
import { NavigationBar } from '../components/NavigationBar'
import SingleColumnLayout from '../components/SingleColumnLayout'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'
import herobgimage from '../assets/images/herobg.png'
import lastbgimage from '../assets/images/lastbg.png'
import phoneimg from '../assets/images/phoneImg.png'
import iphone1 from '../assets/images/iphone1.png'
import iphone2 from '../assets/images/iphone2.png'
import iphone3 from '../assets/images/iphone3.png'
import DoubleColumnLayout from '../components/DoubleColumnLayout'
import FooterBar from '../components/FooterBar'

export const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationBar />
            <SingleColumnLayout 
                title="Food App" 
                heading="Why stay hungry when 
                you can order form Bella Onojie" 
                subheading="Download the bella onoje's food app now on" 
                bgImage={herobgimage} 
                buttonBorderRadius='30px'
            />
            <Box sx={{
                display: 'flex', 
                width:'60%', 
                marginInline: 'auto',
                height:{ xs:'400px', sm: '500px', md:'820px'}, 
                borderBottom:{ xs: 'none', sm:'none', md:'1px solid grey' }, 
                marginTop: { xs:0, sm: 0, md: -30 },
                backgroundImage: `url(${phoneimg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }} />
            
            <Typography variant='h2' textAlign='center' marginY={4}>
                How the app works 
            </Typography>
            
            <Box display='flex' justifyContent='center' sx={{display: {
                xs: 'flex',
                sm: 'flex',
                md: 'none',
            }}} marginY={3}>
                <Divider sx={{borderBottomWidth: 2}} />
            </Box>
            <DoubleColumnLayout 
                phoneimg={iphone1}
                title="Create an account"
                heading="Create/login to an existing
                account to get started"
                subheading="An account is created with your email
                and a desired password"
                direction="row"
            />
            <DoubleColumnLayout 
                phoneimg={iphone2}
                title="Explore varieties"
                heading="Shop for your favorites
                meal as e dey hot."
                subheading="Shop for your favorite meals or drinks
                and enjoy while doing it."
                direction="row-reverse"
            />
            <DoubleColumnLayout 
                phoneimg={iphone3}
                title="Checkout"
                heading="When you done check out
                and get it delivered."
                subheading="When you done check out and get it 
                delivered with ease."
                direction="row"
            />
            <SingleColumnLayout 
                heading="Download the app now."
                subheading="Available on your favorite store. Start your premium experience now."
                responsiveBG='#252B42'
                bgImage={lastbgimage}
                buttonBorderRadius='10px'
                isResponsiveLastSection='true'
            />
            <FooterBar />
        </ ThemeProvider>
    )
}

export default Home