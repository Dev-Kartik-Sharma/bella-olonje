import React from 'react'
import FooterBar from '../components/FooterBar'
import { NavigationBar } from '../components/NavigationBar'
import iphone2 from '../assets/images/iphone2.png'
import { OtherPagesComponent } from '../components/OtherPagesComponent'

export const Faq = () => {
    return (
        <>
            <NavigationBar />
            <OtherPagesComponent title="FAQs" image={iphone2} />
            <FooterBar />
        </>
    )
}

export default Faq