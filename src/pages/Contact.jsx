import React from 'react'
import FooterBar from '../components/FooterBar'
import { NavigationBar } from '../components/NavigationBar'
import { OtherPagesComponent } from '../components/OtherPagesComponent'
import iphone1 from '../assets/images/iphone1.png'

export const Contact = () => {
    return (
        <>
            <NavigationBar />
            <OtherPagesComponent title="Contacts" image={iphone1} />
            <FooterBar />
        </>
    )
}

export default Contact