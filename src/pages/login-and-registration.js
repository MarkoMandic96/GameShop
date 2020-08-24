/** @jsx jsx */

import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"
import BackgroundImage from "gatsby-background-image"
import styles from "../components/login.module.css"
import SEO from "../components/seo"

function AlertFunction() {
  alert('Sadly this option doesent work at the moment');
}

const Login = () => (
  <div className={styles.LoginBox}>
    <form
      className={styles.formBlock}
      sx={{
        p: 30,
        maxWidth: "400px",
        height: "340px",
      }}
    >
      <h2 
      sx={{ 
        fontSize: [20, 24, 28],
        color: "black",
        fontfamily: "georgia",     
      }}
      >
        CREATE NEW ACCOUNT
      </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        <input sx={{ fontSize: 12 }} type="text" placeholder = "Username"/>
        <input sx={{ fontSize: 12 }} type="text" placeholder = "Email adress"/>
        <input sx={{ fontSize: 12 }} type="text" placeholder = "Password"/>
        <input sx={{ fontSize: 12 }} type="text" placeholder = "Repeat password"/>
        
      </div>
      <a
              href=""
              className={styles.blogButton}
              sx={{ fontSize: [12, 16, 18] }}
              onClick={AlertFunction}
        >SUBMIT
        </a>
    </form>
  </div>
)

const Register = () => (
  <div className={styles.LoginBox}>
    <form
      className={styles.formBlock}
      sx={{
        p: 30,
        maxWidth: "400px",
        height: "340px",
      }}
    >
      <h2 
      sx={{ 
        fontSize: [20, 24, 28],
        color: "black",
        fontfamily: "georgia",     
      }}
      >
      LOGIN USING EXISTING ACCOUNT 
      </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input sx={{ fontSize: 12 }} type="text" placeholder = "Username"/>
        <input sx={{ fontSize: 12 }} type="text" placeholder = "Password"/>
      </div>
      <a
              href=""
              className={styles.blogButton}
              sx={{ fontSize: [12, 16, 18], marginTop: "60px",}}
              onClick={AlertFunction}
        >LOG IN
        </a>
    </form>
  </div>
)


const LoginAndRegistration = props => {
  const { heroImage } = props.data
  return (
    <Layout>
      <SEO title={"Login and Registration"}description={"Login and Registration"}/>
      <BackgroundImage
        fluid={heroImage.sharp.fluid}
        className={styles.formContainer}
      >
        <Login />
        <Register />
      </BackgroundImage>
    </Layout>
  )
}

export default LoginAndRegistration


export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/ZugBackground.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxHeight: 1050, maxWidth: 1920, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
