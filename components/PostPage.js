import React from 'react'
import './Postpage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }



    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId: this.props.id
            }
        })
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                PostPage
                {posts.map((value) => {
                    return (
                        <div className='postpage-table' key={value.id + 'w'}>
                            <div className='postpage-cell' key={value.id}>
                                {value.title}
                            </div>
                            <Link to='./postDetailpage'>
                                <div id={value.userId} value={this.state.posts} onClick={this.props.passIdPostDetailPage} className='postpage-cell postpage'>postDetailpage</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostPage