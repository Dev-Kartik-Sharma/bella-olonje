import React from 'react'
import logo from '../assets/images/logo.png'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'
import { Typography, Box, Stack, Container } from '@mui/material'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import StyledIcon from './StyledIcon'

export const FooterBar = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box display='flex' justifyContent='space-around' alignItems='center' marginY={3} marginTop={5} sx={{ flexDirection: { xs: 'column', sm: 'column', md:'row'} }} height={{xs: '100px', sm: '100px'}}>
                    <Stack sx={{ 
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'flex',
                        }
                    }}>
                        <img src={logo} />
                    </Stack>
                    <Stack direction='row' spacing={3}>
                        <StyledIcon src={twitter} />
                        <StyledIcon src={facebook} />
                        <StyledIcon src={instagram} />
                    </Stack>
                    <Typography>
                        Copywright 2020 Bella Onojie.com
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default FooterBar