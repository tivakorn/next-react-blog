import React, { Component } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

class Detail extends Component {

    static async getInitialProps({ query }) {
        const res = await axios.get(`http://localhost:3001/blogs/${query.id}`);
        return { blog: res.data };
    }

    render() {
        const { blog } = this.props
        return (
            <Layout>
                <div className="container">
                    <h1 className="mt-4 mb-4 title">{blog.subject}</h1>
                    <div className="row">
                        <div className="col-15">
                            <img className="img-fluid" src={blog.thumbnail} />
                            <div className="text-justify mt-4 detail">{blog.detail}</div>
                            <hr />
                            <h5 className="text-success">
                                เขียนโดย {`${blog.created_by.user.firstname} ${blog.created_by.user.lastname}`}
                            </h5>
                            <h6 className="text-muted text-right">
                                แก้ไขเมื่อ {blog.updated_date}
                            </h6>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Detail