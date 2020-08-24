/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "./footer.module.css"
import { useStaticQuery, graphql } from "gatsby"

const footerStyles = {
  backgroundColor: "#240f10",
  padding: "10px",
  margin: "0px",
  display: "flex",
  width: "100%",
  listStyleType: "none",
  justifyContent: "space-around",
}

const Socials = () => {
  const data = useStaticQuery(graphql`
    {
      slike: allFile(
        filter: { relativePath: { regex: "content/images/socials//" } }
      ) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  // console.log(data.slike.edges)
  const images = data.slike.edges.map(objekt => {
    // console.log(objekt.node.sharp.fluid)
    // console.log("deri")
    return (
      <Img
        key={objekt.node.sharp.fluid.src}
        fluid={objekt.node.sharp.fluid}
        alt="snImg"
        className={styles.socialButtons}
      />
    )
  })
  return (
    <div sx={{ display: "flex", flexDirection: "row", padding: "20px" }}>
      {images}
    </div>
  )
}

const Footer = ({ footerItems }) => {
  return (
    <div>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: '#562D2F',
          padding: "30px",
        }}
      >
        <h3
          sx={{
            fontFamily: "georgia",
            fontWeight: "heading",
            fontSize: [20, 28, 36],
            color: '#9DCDD3'
          }}
        >
          REACH US THROUGH
        </h3>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            backgroundColor: "#562D2F",
          }}
        >
          <div className={styles.socials}>
            <h4
              sx={{
                fontFamily: "georgia",
                fontWeight: "heading",
                fontSize: [24, 28, 28],
                color: '#9DCDD3',
              }}
            >
              JOIN OUR BLOG
            </h4>
            <a
              href="../blog"
              className={styles.blogButton}
              sx={{ fontSize: [12, 16, 18] , color: '#562D2F',}}
            >
              CHAT WITH US!
            </a>
          </div>
          <div className={styles.socials}>
            <h4
              sx={{
                fontFamily: "Palatino",
                fontWeight: "heading",
                color: '#9DCDD3',
                fontSize: [16, 22, 28],
                m: 0,
              }}
            >
              SOCIAL MEDIA
            </h4>
            <Socials />
          </div>
        </div>
      </div>
      <ul style={footerStyles}>
        {footerItems.map(footerItems => (
          <a key={footerItems.text} href={footerItems.link}>
            <li
              sx={{
                m: 0,
                fontFamily: "Palatino",
                color: "primaryWhite",
                fontSize: [10, 14, 18],
              }}
            >
              {footerItems.text}
            </li>{" "}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Footer
