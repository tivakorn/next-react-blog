import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import axios from 'axios'

class Index extends Component {

    static async getInitialProps() {
        const res = await axios.get("http://localhost:3001/blogs")
        return { blogs: res.data }
    }

    renderBlogs = blogs => {
        return (
            blogs.map(blog => {
                return (
                    <div key={blog.id} className="col-6 mb-4">
                        <img src={blog.thumbnail} className="img-fluid" style={{ height: 300, width: 800 }} />
                        <Link href={'/blog/detail?id=' + blog.id}>{blog.subject}</Link>
                        <hr />
                        <p className="text-justify">{blog.intro}</p>
                    </div>
                )
            })
        )
    }
    render() {
        console.log(this.props.blogs)
        return (
            <Layout>
                <div className='container'>
                    <div className='row'>
                        {this.renderBlogs(this.props.blogs)}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Index