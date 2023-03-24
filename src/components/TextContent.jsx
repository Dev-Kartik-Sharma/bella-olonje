import React from 'react'
import { Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'

const TextContent = ({ title, heading, subheading }) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant='subtitle1' color='#FA4A0C' textAlign={{xs:'center', sm:'center', md:'left'}}>
                {title}
            </Typography>
            <Typography variant='h2' textAlign={{xs:'center', sm:'center', md:'left'}}>
                {heading}
            </Typography>
            <Typography variant='h3' textAlign={{xs:'center', sm:'center', md:'left'}} width={{xs: 'auto', sm: 'auto', md:'380px'}}>
                {subheading}
            </Typography>
        </ThemeProvider>
    )
}

export default TextContent