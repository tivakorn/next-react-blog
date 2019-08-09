import React , { Component }from 'react'
import Layout from '../components/Layout'

class Error extends Component {

    static getInitialProps({res , err}){
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode } 
    }

    render () {
        return ( 
            <Layout>
                <div className='container'>
                    <div className='text-center'>
                        <h3>
                            {this.props.statusCode &&
                                'ไม่พบหน้าที่คุณต้องการ' + this.props.statusCode 
                            }
                        </h3>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Error