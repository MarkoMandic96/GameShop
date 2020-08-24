/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import ShopGrid from "../components/ShopGrid"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import SearchBox from "../components/SearchBox"
import FilterBox from "../components/FilterBox"
import SEO from "../components/seo"

/*


class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterChoice: "All",
      searchPhrase: "",
      products: [],
    }
  }

  componentDidMount() {
    this.setState({ products: this.props.data.site.siteMetadata.productItems })
  }

  onSearchChange = event => {
    this.setState({ searchPhrase: event.target.value })
  }

  onFilterChange = event => {
    // console.log(event)
    this.setState({ filterChoice: event.target.value })
  }

  render() {
    const { products, searchPhrase, filterChoice } = this.state
    const { heroImage } = this.props.data

    const filteredProducts = products.filter(product => {
      if (
        product.productName
          .toLowerCase()
          .includes(searchPhrase.toLowerCase()) &&
        product.category.toLowerCase().includes(filterChoice.toLowerCase())
      )
        return product
      else if (
        product.productName
          .toLowerCase()
          .includes(searchPhrase.toLowerCase()) &&
        filterChoice.toLowerCase() === "all"
      )
        return product
    })

    return (
      <>
        <Layout>
          <SEO title={"Shop"} description={"The Brew Crew Shop"} />

          <Container>
            <Img fluid={heroImage.sharp.fluid} />
            <Container // zašto sve ove SX-ove od doli nemogu stavit u Container, neće da radi onda?!
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "130px 0px 20px 0px",
              }}
            >
              <div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2
                  sx={{
                    fontFamily: "wacky",
                    fontWeight: "heading",
                    px: 1,
                    m: 0,
                    fontSize: [16, 24, 36],
                  }}
                >
                  Search directly:
                </h2>
                <SearchBox searchChange={this.onSearchChange} />
              </div>
              <div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2
                  sx={{
                    fontFamily: "wacky",
                    fontWeight: "heading",
                    px: 1,
                    m: 0,
                    fontSize: [16, 24, 36],
                  }}
                >
                  Filter by category:
                </h2>
                <FilterBox filterChange={this.onFilterChange} />
              </div>
            </Container>
            <ShopGrid products={filteredProducts} />
          </Container>
        </Layout>
      </>
    )
  }
}

export default Shop

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/beans.jpg" }) {
      id
      sharp: childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 800, fit: COVER, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        productItems {
          imgPath
          itemDescription
          price
          productName
          category
        }
      }
    }
  }
`
*/