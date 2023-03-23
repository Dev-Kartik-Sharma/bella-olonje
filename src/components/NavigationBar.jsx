import React from 'react'
import { AppBar, Toolbar, Box, Stack, Button } from '@mui/material'
import logo from '../assets/images/logo.png'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'
import { NavLink } from 'react-router-dom';

const pages = ['Home', 'Product', 'Faq', 'Contact'];

export const NavigationBar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: 'none',
            color: isActive ? '#FA4A0C' : 'black',
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar color='secondary' position='static'>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} paddingLeft={5} paddingY={1}>
                        <NavLink to='/home'>
                            <img src={logo} alt="LOGO" />
                        </NavLink>
                    </Box>
                    <Stack direction='row' spacing={10} paddingRight={1}>
                        {pages.map((page) => (
                            <Button key={page}>
                                <NavLink to={`/${page}`} style={navLinkStyle}>
                                    {page}
                                </NavLink>
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
