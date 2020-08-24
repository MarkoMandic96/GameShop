/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Accordion, Card } from "react-bootstrap"
import styles from "../components/blog.module.css"
import SEO from "../components/seo"
import BlogPost from "../components/BlogPost"
import BackgroundImage from "gatsby-background-image"

const Blog = props => {
  const { heroImage } = props.data
  return(
      <Layout sx={{ fontSize: [24, 48, 72]}}>
        <div sx = {{backgroundColor: "#015F70"}}>
      <SEO title={"Blog"} description={"Discuss with us"} />
      <BackgroundImage
        fluid={heroImage.sharp.fluid}
        className={styles.formContainer}
        sx = {{
          height: 500,
          display: "flex",
          flexDirection: "column",
        }}>
        <h1 className="maintitle"
        sx={{ 
          fontSize: [40, 50, 60],
          color: "White",
          fontFamily: "Palatino",
          fontWeight: "heading",    
        }}>
           THE BLOG 
        </h1>
        <h2 className="secondtitle" data-aos="zoom-in"
        sx={{ 
          fontSize: [30, 35, 40],
          color: "White",
          fontFamily: "Palatino",
          fontWeight: "heading", 
          textAlign: "center", 

        }}>
        Looking for a GM ?
        Looking for a group ?
        </h2>
      </BackgroundImage>


      <BlogPost sx={{boxShadow: 20,}}/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      </div>
      </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/DiceBackground.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(
          maxHeight: 800
          maxWidth: 1920
          fit: COVER
          cropFocus: ATTENTION
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
