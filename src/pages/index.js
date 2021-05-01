import React, { useState } from "react"
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || 'Topcoded'
  const posts = data.allMarkdownRemark.nodes

  const [searchItem, setSearchItem] = useState({
    query: '',
    filteredPosts: posts
  });

  const handleSearch = (event) => {

    const queryString = event.target.value
    const postsArray = posts.filter(post =>
      post.frontmatter.title.toLowerCase().includes(queryString.toLowerCase())
    )

    setSearchItem({
      query: queryString,
      filteredPosts: postsArray
    });

  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search by title"
          onChange={handleSearch}
          value={searchItem.query} />
      </div>

      <ol style={{ listStyle: 'none' }}>

        {searchItem.filteredPosts.map(post => {

          const title = post.frontmatter.title || post.fields.slug;

          return (

            <article
              className="index-story"
              itemScope
              itemType="http://schema.org/Article"
              key={post.fields.slug}>

              <section>
                <Link to={post.fields.slug}>
                  <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt="Post Image" />
                </Link>
              </section>

              <header className="index-story-summary">

                <h1>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h1>

                <p>Written by : {post.frontmatter.author}</p>

                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />

                <div className="published"><time>{post.frontmatter.date}</time></div>

                <div className="post-tags">
                  {post.frontmatter.tags.map(tag => (
                    <div className="tag">{tag}</div>
                  ))}
                </div>

              </header>

            </article>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
