import React from 'react'
import { Box, Typography } from '@mui/material'
import herobgimage from '../assets/images/herobg.png'

export const OtherPagesComponent = ({title, image}) => {
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' paddingTop={5}  style={{backgroundImage:`url(${herobgimage})`}}>
            <Typography variant='h5' color='white'>
                {title}
            </Typography>
            <img src={image} alt="" height='400px'/>
        </Box>
    )
}

export default OtherPagesComponent