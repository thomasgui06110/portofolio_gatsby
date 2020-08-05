import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
    <SEO title="Portofolio" description="Mon super Portofolio" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="feature projects" showLink />
      <Blogs blogs={blogs} title="Blog" showLink />
    </Layout>
  );
};

//

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        stack {
          title
          id
        }
      }
    }
    allStrapiBlogs(sort: { order: DESC, fields: date }, limit: 3) {
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
`;
