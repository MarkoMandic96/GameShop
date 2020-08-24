/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Styles from "./blogpost.module.css"
import defaultImage from "../../content/images/wizardimage.png"

const BlogPost = () => {
    return(
        <div classname= "blogContainer" 
            sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#002329",
                marginBottom: 50, 
                textDecorationColor: "white",
            }}>
                <div classname = "userBox" sx= {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "10px",
                    marginTop: "15px",
                    marginLeft: "10px",
                    marginRight: "15px",
                    
                }}> 
                    <img src={defaultImage} classname= "imageContainer" alt="image" 
                        sx={{ 
                            maxHeight: 100, 
                            maxWidth: 100,
                            borderRadius: 50,
                            borderColor: "#015F70",
                            borderWidth: 5,
                            padding: 10,
                            backgroundColor: "white",
                        }}/>
                    <p classname='username' 
                        sx = {{
                            padding: 15,
                            color: "white",
                            textAlign: "center",
                        }}> 
                    Bruno Brunić 
                    </p>
                </div>
                <div classname = "postBox" sx = {{color: "white", marginTop: "10px", marginRight: "40px", fontFamily: "Palatino",}}>
                    <h3 classname ='postTitle' sx={{fontSize: [20, 30, 40],}}>Looking for background music, please advice!</h3>
                    <p classname='postText'>So I've been playing D&D with my friends for about a year via discord. This is a second campaign and I started implementing little by little background music to enhance our immersion. The problem is it's really hard (at least for me) to find a suitable town, nature, battle and ambience music. Usually when I'm looking through YouTube I am getting these really heroic tracks or a choir that doesn't really suit situation? The point is I'm calling it a "background" music because it adds up to the whole situation without drawing your attention or making you think this is the beginning of the end. Is there anyone who can help me out and point out a good ambience?</p>
                </div>
        </div>
    )
}

export default BlogPost
