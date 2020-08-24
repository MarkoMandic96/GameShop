/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styles from "../components/about.module.css"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"





const About = props => {
  const { heroImage } = props.data
  return (
    <Layout>
      <SEO title={"About Us"} description={"About us"} />
      <BackgroundImage
        fluid={heroImage.sharp.fluid}
        className={styles.formContainer}
        sx = {{
          height: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1 className="maintitle"
        sx={{ 
          fontSize: [40, 50, 60],
          color: "White",
          fontFamily: "Palatino",
          fontWeight: "heading", 
          alignSelf: "center",
          justifySelf: "center", 
          marginTop: "140px",
          textAlign: "center",
        }}>
           THE COMMUNITY 
        </h1>
        </BackgroundImage>
      <div sx={{fontFamily: "Palatino", backgroundColor: "#001317", color: "white", display: "flex", flexDirection:"column",}}>
      <h2 classname="title" sx={{ fontSize: [20, 30, 40], marginTop:"60px", marginLeft:"20px", marginBottom:"40px",}}>THE ABOUT</h2>
      <p classname="aboutparagraph" sx={{fontSize: [15, 20, 20],marginLeft:"20px",marginRight:"20px"}}> 
      The idea to create HardRollers as is is today first appeared in early 2012 as late night pub banter between three friends after a game of Dungeons & Dragons, however, due to monetary and scheduling issues, as well as potential business risk the first HighRollers would not open its doors untill 2015.  
      </p>
      <p classname="aboutparagraph" sx={{fontSize: [15, 20, 20],marginLeft:"20px",marginRight:"20px"}}>
      What originally started as interest in the popular roleplaying game Dungeons & Dragons later evolved into a love of a whole variety of tabletop games with wich came the natural wish to help expand those same hobbies to a greater number of people. Nowadays the shop holds and hosts a large variety of tabletop games including Dungeons & Dragons, Pathfinder, Symbaourum, Call of Cthullu and many others </p>
      <p classname="aboutparagraph" sx={{fontSize: [15, 20, 20],marginLeft:"20px",marginRight:"20px"}}>
      Moving forward we wish to expand our collection even further, as to appease even the most selective of players as well as expand the hobby to ever more new players who still may be unsure of wether or not the hobby may be something for them.
      </p>
      <h2 classname="title" sx={{ fontSize: [20, 30, 40], marginTop:"40px", marginLeft:"20px", marginBottom:"40px",}}>Our employees</h2>
      <p classname="aboutparagraph" sx={{fontSize: [15, 20, 20],marginLeft:"20px",marginRight:"20px"}}>
      While we make a conciouss effort to employ those who might be in greater need of pay, such as students, every single employee of ours has taken a crash course in the rules of our most popular games and as such can help guide any group which may be overwhelmed by the vast ammounts of text and rules at first.
      </p>
      <h2 classname="title" sx={{ fontSize: [20, 30, 40], marginTop:"40px", marginLeft:"20px", marginBottom:"40px",}}>Outside GM's</h2>
      <p classname="aboutparagraph" sx={{fontSize: [15, 20, 20],marginLeft:"20px",marginRight:"20px", marginBottom:"50px",}}>
      Us at Hardrollers pride ourselves on hosting a large number of games, most of which are hosted by many of our freelancer GM's. For those looking for an experianced GM we suggest making a post on our forum as that is where they lurk most often. 
      </p>
      </div>
      
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/blog-pic.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 600, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
