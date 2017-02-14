'use strict'

import React from 'react'
import TheTest from '../components/thetest'
import Page from '../layouts'

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }
  }
  render () {
    return (
      <Page pageTitle='BigFive Personality Test'>
        <TheTest userAgent={this.props.userAgent} ip={this.props.ip} />
      </Page>
    )
  }
}
