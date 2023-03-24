import React from 'react'
import { Stack, Container } from '@mui/material'
import TextContent from './TextContent'

export const DoubleColumnLayout = ({phoneimg, title, heading, subheading, direction}) => {
    return (
        <Container>
            <Stack 
                direction={{
                    xs: 'column-reverse', 
                    sm: 'column-reverse', 
                    md: `${direction}`
                }} 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                paddingX={{md:'5'}}>
                    <Stack 
                        width={{ 
                            xs:'100%', sm:'100%', md:'50%'
                        }} 
                        height='700px'>
                        <img src={phoneimg} height='100%' />
                    </Stack>
                    <Stack width='50%' height='50%' spacing={2}>
                        <TextContent title={title} heading={heading} subheading={subheading} />
                    </Stack>
            </Stack>
        </Container>
    )
}

export default DoubleColumnLayout