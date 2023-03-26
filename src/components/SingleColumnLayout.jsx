import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'
import { StyledButton } from './StyledButton'

export const SingleColumnLayout = ({title, heading, subheading, bgImage, responsiveBG, buttonBorderRadius, isResponsiveLastSection}) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', justifyContent: 'center', background: {xs: `${responsiveBG}`, sm:`${responsiveBG}`, md:`url(${bgImage})`}, backgroundSize: 'cover'}} paddingY={13}>
                    <Stack direction='column' width='60%' spacing={4}>
                        <Typography variant='h3' sx={ 
                            (isResponsiveLastSection) ? {color: 'secondary.main'} : 
                            {color: {xs:'primary.main', sm:'primary.main', md:'secondary.main'}}
                            } textAlign='center'>
                            {title}
                        </Typography>
                        <Typography variant='h1' sx={ 
                            (isResponsiveLastSection) ? {color: 'secondary.main'} : 
                            {color: {xs:'primary.main', sm:'primary.main', md:'secondary.main'}}
                            } textAlign='center'>
                            {heading}
                        </Typography>
                        <Typography variant='h3' sx={ 
                            (isResponsiveLastSection) ? {color: {md:'secondary.main'}}: 
                            {color: {md:'secondary.main'}}
                            } textAlign='center'>
                            {subheading}
                        </Typography>
                        <Stack direction={(isResponsiveLastSection) ? {xs: 'row', sm: 'row'} : {xs: 'column', sm: 'column', md: 'row'}} width={{xs:'100%',sm:'80%',md:'60%'}} alignSelf='center' spacing={2}>
                            <StyledButton buttonText={(isResponsiveLastSection) ? 'Buy now' : 'Playstore'} borderRadius={buttonBorderRadius} isResponsiveLastSection={isResponsiveLastSection} />
                            <StyledButton buttonText={(isResponsiveLastSection) ? 'Try for free' : 'App store'} borderRadius={buttonBorderRadius} isResponsiveLastSection={isResponsiveLastSection} />
                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default SingleColumnLayout