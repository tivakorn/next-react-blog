import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

class Layout extends Component {
    render() {
        const { children, title = 'BLOG' } = this.props
        return (
            <di>
                <Head>
                    <title>DISCONNECT | {title}</title>
                    <meta charset='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel='stylesheet' href='/static/css/style.css' />
                </Head>
                <Header />
                {children}
                <Footer company="DISCONNECT" email="dis@connect.com" />
            </di>
        )
    }
}

export default Layout