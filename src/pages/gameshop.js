import "bootstrap/dist/css/bootstrap.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styles from "../components/landing.module.css"
import BackgroundImage from "gatsby-background-image"
import DefaultImage from "../images/ShopItems/DiceSet.jpg"

function AlertFunction() {
  alert('Sadly this option doesent work at the moment');
}


const ShopItem = ({imagePath, data}) => {
    return(
        <div classname={styles.ShopContainer} sx={{display:"flex", flexDirection: "column", backgroundColor: "#0a252b", marginTop: "50px", marginLeft: "20px", marginRight: "20px", borderRadius: "5px"}}>
          <div className="Container" sx={{Height: ["200px","400px"],Width: ["200px","400px"],display:"flex", flexDirection: "column", marginTop: "40px", marginLeft: "20px", marginRight: "20px", }}>
            
            <img src={DefaultImage} sx={{Width:"40%", maxHeight: "450px", maxWidth: "450px", borderRadius: "5px", }}/>
            
            <div sx={{color: "white", fontFamily: "Palatino", maxWidth: "450px",fontSize: [20], }}>
                <p sx={{marginTop: "15px"}}> {data.productName}</p>
                <p>Price: {data.price}</p>
                <p sx={{fontSize: [15]}}>{data.itemDescription}</p>
            </div>
            <a
                href=""
                className={styles.blogButton}
                sx={{ fontSize: [12, 16, 18], marginBottom: "20px"}}
                >ORDER NOW
            </a>
          </div>
        </div>
    )
}
  
const ShopItems = ({paths, items}) => {
    const ItemArray = paths.map((path, i) => {
      // return { image: image, info: info[i] }
      return <ShopItem imagePath={path} data={items[i]}/>
    })
    return <div className={styles.indexContainer} sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>{ItemArray}</div>
}

const GameShop = ({ data }) => {
    const { heroImage, itemInfo, imagePaths } = data
    return (
       <Layout sx={{backgroundColor: "#0a252b", }}>
        <SEO title={"HardRollers"}description={"Shop"}/>
  
        <BackgroundImage
          fluid={heroImage.sharp.fluid}
          className={styles.formContainer}
          sx = {{
            height: 600,
            display: "flex",
            flexDirection: "column",
          }}>
          <h1 className="maintitle"
          sx={{ 
            fontSize: [50, 65, 80],
            color: "White",
            fontFamily: "Palatino",
            fontWeight: "heading",    
          }}>
             LOOKING FOR GOODS ? 
          </h1>
          <h2 className="secondtitle" data-aos="zoom-in"
          sx={{ 
            fontSize: [40, 50, 60],
            color: "White",
            fontFamily: "Palatino",
            fontWeight: "heading", 
            textAlign: "center", 
  
          }}>
             RULEBOOKS, ACCESSORIES AND MUCH MORE UP AHEAD
          </h2>
        </BackgroundImage>

        <div classname="SearchBox" sx={{backgroundColor: "#0a252b", paddingTop: "15px"}}>
          <h2 className="secondtitle" data-aos="zoom-in"
            sx={{ 
              fontSize: [20, 25, 30],
              color: "White",
              fontFamily: "Palatino",
              fontWeight: "heading", 
              textAlign: "center", 
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0a252b",
            }}>
          What are you looking for ?
          </h2>
          <div sx={{ display: "flex", justifyContent: "center", height:"10", paddingBottom: "15px", backgroundColor: "#0a252b", }}>
            <input sx={{ fontSize: 12, }} type="text" placeholder = "SampleText"/>
            <a
              href=""
              className={styles.blogButton}
              sx={{ fontSize: 12, }}
              onClick={AlertFunction}
              >Search
          </a>
          </div>
        </div>
        <ShopItems
            paths={imagePaths.siteMetadata.imagePaths}
            items={itemInfo.siteMetadata.productItems}
            sx = {{
                backgroundColor: "#001317",
            }}
        />
      </Layout>
    )
}
  
export default GameShop

  export const query = graphql`
    {
      heroImage: file(relativePath: { eq: "images/DMM.jpg" }) {
        id
        sharp: childImageSharp {
          fluid(maxHeight: 1050, maxWidth: 1920, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      itemInfo: site {
        siteMetadata {
            productItems 
            {
                itemDescription
                price
                productName
            }
        }
      }
      imagePaths: site {
        siteMetadata {
            imagePaths 
            {
                imgPath
            }
        }
    }
} 
`