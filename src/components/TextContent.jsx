import React from 'react'
import { Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'

const TextContent = ({ title, heading, subheading }) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant='subtitle1' color='#FA4A0C'>
                {title}
            </Typography>
            <Typography variant='h2'>
                {heading}
            </Typography>
            <Typography variant='h3' width='380px'>
                {subheading}
            </Typography>
        </ThemeProvider>
    )
}

export default TextContent