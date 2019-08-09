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
                        <Link href={'/blog/detail?id=' + blog.id}>
                            <div >
                                <img src={blog.thumbnail} className="img-fluid" style={{ height: 300, width: 800 }} />
                                <h3>{blog.subject}</h3>
                                <hr />
                                <p className="text-justify">{blog.intro}</p>
                            </div>
                        </Link>
                    </div>
                )
            })
        )
    }
    
    render() {
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