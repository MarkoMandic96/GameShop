import "bootstrap/dist/css/bootstrap.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Services from "../components/Services"
import SEO from "../components/seo"
import styles from "../components/landing.module.css"
import Carousel from "react-bootstrap/Carousel"
import BackgroundImage from "gatsby-background-image"

const ShopItem = ({ imgPath, itemDescription, price, productName }) => {
    console.log(imgPath)
        console.log(productName)
        console.log(itemDescription)
        console.log(price)
    return(
        <div>
            <p>{imgPath}</p>
            <p>{itemDescription}</p>
        </div>
    )
}

export default ShopItem