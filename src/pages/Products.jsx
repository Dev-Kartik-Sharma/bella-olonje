import React from 'react'
import FooterBar from '../components/FooterBar'
import { NavigationBar } from '../components/NavigationBar'
import iphone3 from '../assets/images/iphone3.png'
import { OtherPagesComponent } from '../components/OtherPagesComponent'

export const Products = () => {
    return (
        <div>
            <NavigationBar />
            <OtherPagesComponent title="Products" image={iphone3} />
            <FooterBar />
        </div>
    )
}

export default Products