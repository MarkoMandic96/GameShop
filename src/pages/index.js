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

const Article = ({articleImage, titleandtext}) => {
  return(
      <div classname="container" data-aos="fade-up"
          sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Palatino",
              backgroundColor: "#001317",
              color: "white",
              paddingtop: "40",
          }}>

        <h2 classname="title" sx={{ fontSize: [20, 30, 40], alignSelf: "center", marginTop: "20px", marginBottom: "10px",}}>{titleandtext.title}</h2>
          <div classname="textandpicture"
              sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  backgroundColor: "#0a252b",
                  borderRadius:"5px",
                  flexWrap: "wrap-reverse", 
              }}>
                <div
                sx={{
                  maxWidth: "60%",
                  marginTop: "30px",
                  fontSize: [15, 20, 20],
                }}
                >
                  <p classname="article"
                    
                  >
                    {titleandtext.article}
                  </p>
                    <a
                      href=""
                      className={styles.blogButton}
                      sx={{ fontSize: [12, 16, 18], marginTop: "60px",}}
                      >Read more
                    </a>
                  </div>
                  <Img
                  fluid={articleImage.node.sharp.fluid}
                  className={styles.profilePic}
                  sx={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    borderRadius:"5px",
                    backgroundColor: "white"
                  }}
                  />
          </div>
      </div>
  )
}

const Articles = ({info, images}) => {
  const ArticleArray = images.map((image, i) => {
    // return { image: image, info: info[i] }
    return <Article articleImage={image} titleandtext={info[i]} />
  })

  return <div className={styles.indexContainer} >{ArticleArray}</div>
}



const IndexPage = ({ data }) => {
  const { heroImage, articleImage, articleInfo } = data
  return (
     <Layout sx={{backgroundColor: "#001317",}}>
      <SEO title={"HardRollers"}description={"landing page"}/>

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
           WELCOME 
        </h1>
        <h2 className="secondtitle" data-aos="zoom-in"
        sx={{ 
          fontSize: [40, 50, 60],
          color: "White",
          fontFamily: "Palatino",
          fontWeight: "heading", 
          textAlign: "center", 

        }}>
           TO YOUR NEW HOME FOR EVERYTHING TABLETOP 
        </h2>
      </BackgroundImage>
      <Articles
        images={articleImage.edges}
        info={articleInfo.siteMetadata.mainarticles}
        sx = {{
          backgroundColor: "#001317",
        }}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/Wallpaper.png" }) {
      id
      sharp: childImageSharp {
        fluid(maxHeight: 1050, maxWidth: 1920, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    articleImage:  allFile(
      filter: { relativePath: { regex: "images/Articleimages//" } }
    ) {
      edges {
        node {
          sharp: childImageSharp {
            fluid(
              maxHeight: 400
              maxWidth: 300
              cropFocus: CENTER
              fit: COVER
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    articleInfo: site {
      siteMetadata {
        mainarticles {
          title
          article
        }
      }
    }
  }
`
