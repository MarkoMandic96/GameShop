/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styles from "./Services.module.css"
import crew from "../images/SVGs/meet-the-crew-logo.svg"
import bag from "../images/SVGs/coffee-bag.svg"
import blog from "../images/SVGs/blog-logo.svg"

const Services = () => {
  return (
    <div className={styles.servicesBlock}>
      <div className={styles.serviceContainer}>
        <img src={crew} alt="meet-the-crew-logo" className={styles.logoImg} />
        <h3
          sx={{
            fontFamily: "wacky",
            fontWeight: "heading",
            fontSize: [14, 20, 24],
          }}
        >
          MEET THE CREW
        </h3>
        <p
          sx={{
            fontFamily: "wacky",
            fontWeight: "body",
            fontSize: [14, 16, 18],
          }}
        >
          The dedicated people who made all this possible
        </p>
      </div>
      <div className={styles.serviceContainer} sx={{ alignSelf: "flex-start" }}>
        <img src={bag} alt="coffee-bag" className={styles.logoImg} />
        <h3
          sx={{
            fontFamily: "wacky",
            fontWeight: "heading",
            fontSize: [14, 20, 24],
          }}
        >
          BUY OUR BEANS
        </h3>
        <p
          sx={{
            fontFamily: "wacky",
            fontWeight: "body",
            fontSize: [14, 16, 18],
          }}
        >
          Buy your beans straight from the roasters! No middle man!
        </p>
      </div>
      <div className={styles.serviceContainer}>
        <img src={blog} alt="bloglogo" className={styles.logoImg} />
        <h3
          sx={{
            fontFamily: "wacky",
            fontWeight: "heading",
            fontSize: [14, 20, 24],
          }}
        >
          TALK COFFEE
        </h3>
        <p
          sx={{
            fontFamily: "wacky",
            fontWeight: "body",
            fontSize: [14, 16, 18],
          }}
        >
          Discuss your favourite roasts and blends right here!
        </p>
      </div>
    </div>
  )
}

export default Services
