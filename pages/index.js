import React from 'react'
import Head from 'next/head'

import config from '../config'


class Index extends React.Component {
  render() {
    console.log(config)
    console.log('test')
    return (
      <div>
        index page test: {config.ENV_MESSAGE}
      </div>
    )
  }
}

export default Index
