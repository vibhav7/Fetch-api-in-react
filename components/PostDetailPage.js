import React from 'react'
import axios from 'axios'
import './postdetailpage.css'

class PostDetailPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            postDetail: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                postId: this.props.postId
            }
        })
            .then((res) => {
                this.setState({
                    postDetail: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteComment =()=>{
        axios.delete('https://jsonplaceholder.typicode.com/comments', {
            params: {
                postId: this.props.postId
            }
        })
            .then((res) => {
                this.setState({
                    postDetail: 'Deleted Successfully'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { postDetail } = this.state
        return (
            <div>
                PostDetailPage
                {
                    postDetail.length ?
                        postDetail.map((value) => {
                            return (
                                <div className='comment-postdetailpage' key={value.id}>
                                    {value.body}
                                </div>
                            )
                        })
                        :
                        <div>
                            Fetching....Please wait...
                        </div>
                }

                <button onClick={this.deleteComment} >Delete</button>
            </div>
        )
    }
}

export default PostDetailPage
