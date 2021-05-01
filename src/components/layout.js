import * as React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <>
      <Link to="/">
        <div class="logo">TopCoded</div>
      </Link>

      <p>Through a beginner's perspective.</p>

      <div className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

    </>
  )

  return (
    <div data-is-root-path={isRootPath}>
      <header className="site-header container">{header}</header>
      <main className="story container">
        {children}
      </main>
      <footer className="site-footer container">
        Copyright © TopCoded | 2021
      </footer>
    </div>
  )
}



export default Layout
