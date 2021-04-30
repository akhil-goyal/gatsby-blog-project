import * as React from "react"
import { Link } from "gatsby"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <>
      <Link to="/">
        <div class="logo">TopCoded</div>
      </Link>

      <p>Through a beginner's perspective.</p>
    </>
  )

  const shareTitle = title;
  const url = location.href;
  const twitterHandle = "akhilgoyal_";

  return (
    <div data-is-root-path={isRootPath}>
      <header className="site-header container">{header}</header>
      <main className="story container">
        {children}
        <ShareButtons title={shareTitle} url={url} twitterHandle={twitterHandle} />
      </main>
      <footer className="site-footer container">
        Copyright © TopCoded | 2021
      </footer>
    </div>
  )
}

const ShareButtons = ({ title, url, twitterHandle, tags }) => {

  return (
    <div className="share-buttons">
      <p>Share with your friends</p>

      <FacebookShareButton url={url} >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  )

}

export default Layout
