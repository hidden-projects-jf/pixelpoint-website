/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/blog-post/content';
import Hero from 'components/pages/blog-post/hero';
import Sidebar from 'components/pages/blog-post/sidebar';
import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo/seo';
import SEO_DATA from 'constants/seo-data';
import { getSrc } from 'gatsby-plugin-image';

const BlogPostTemplate = ({
  data: {
    mdx: { slug, body, author, frontmatter },
    allMdx: { nodes: readMorePosts },
  },
  location,
}) => (
  <Layout headerTheme="black" headerShowThemeButton>
    <article className="safe-paddings pt-32 sm:pt-24">
      <div className="container">
        <div className="relative mx-auto max-w-[696px] xl:mx-0 xl:flex xl:max-w-none xl:justify-center xl:space-x-20 lg:space-x-8 md:block md:space-x-0">
          <div className="xl:max-w-[696px] lg:max-w-[626px] md:max-w-none">
            <Hero {...frontmatter} slug={slug} />
            <Content content={body} />
          </div>
          <Sidebar author={author} readMorePosts={readMorePosts} socialShareUrl={location.href} />
        </div>
      </div>
    </article>
    <CTA withTopMargin />
  </Layout>
);

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      slug
      body
      author {
        name
        photo {
          childImageSharp {
            gatsbyImageData(width: 64, layout: FIXED)
          }
        }
        description
        twitterUrl
      }
      frontmatter {
        title
        summary
        category
        cover {
          childImageSharp {
            gatsbyImageData(width: 696)
          }
        }
        ogImage: cover {
          childImageSharp {
            gatsbyImageData(layout: FIXED, quality: 90, width: 1200, height: 630, formats: JPG)
          }
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" }, id: { ne: $id } }
      limit: 4
      sort: { order: DESC, fields: slug }
    ) {
      nodes {
        slug
        frontmatter {
          title
          mediumCover: cover {
            childImageSharp {
              gatsbyImageData(width: 384)
            }
          }
          smallCover: cover {
            childImageSharp {
              gatsbyImageData(width: 80, layout: FIXED)
            }
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title, summary, ogImage },
    },
  },
}) => {
  const ogImageUrl = getSrc(ogImage);

  return <SEO {...SEO_DATA.blogPost({ title, description: summary, ogImage: ogImageUrl })} />;
};
