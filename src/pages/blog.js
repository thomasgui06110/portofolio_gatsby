import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="blog"/>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        id
        desc
        date(formatString: "dd DD MMM YYYY", locale: "fr_FR")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
        category
        title
      }
    }
  }
`


export default Blog
