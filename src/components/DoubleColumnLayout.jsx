import React from 'react'
import { Stack, Container } from '@mui/material'
import TextContent from './TextContent'

export const DoubleColumnLayout = ({phoneimg, title, heading, subheading, direction}) => {
    return (
        <Container>
            <Stack direction={{ xs: 'column-reverse', sm: 'column-reverse', md: `${direction}` }} alignItems='center' paddingX={{md:'5'}}>
                    <Stack width={{ xs:'100%', sm:'80%', md:'45%'}} height={{ sm:'500px', md:'700px'}}>
                        <img src={phoneimg} height='100%' />
                    </Stack>
                    <Stack width='50%' height='50%' spacing={2} paddingX={2}>
                        <TextContent title={title} heading={heading} subheading={subheading} />
                    </Stack>
            </Stack>
        </Container>
    )
}

export default DoubleColumnLayout