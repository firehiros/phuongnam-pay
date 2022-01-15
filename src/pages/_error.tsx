import React from 'react'
import Link from 'next/link'

const Error = (props: any) => {
  return (
    <React.Fragment>
      <section className="error-area ptb-100">
        <div className="container">
          <div className="notfound">
            <div className="notfound-404"></div>
            <h2>{props.statusCode}</h2>
            <span>Oops!! Page not be Found</span>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed. name changed or is temporarily unavailable
            </p>
            <Link href="/">
              <a className="btn btn-primary">Back To Homepage</a>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

Error.getInitialProps = async ({ res, err }: any) => {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null
      return { statusCode }
}

export default Error
