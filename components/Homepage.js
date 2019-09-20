import React from 'react'
import './Homepage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { user } = this.state
        return (
            <div className='userlist-wrapper'>
                List of users
                {
                    user.map((value, index) => {
                        return (
                            <div className='userlist-table' key={index + 'w'}>
                                <div className='userlist-cell' key={index + 'n'}> Name :- {value.name} </div>
                                <div className='userlist-cell' key={index + 'c'}> Company :- {value.company.name}</div>
                                <Link to='./postpage'>
                                    <div id={value.id} onClick={this.props.passTheId} className='userlist-cell blogpost'>Blog Posts</div>
                                </Link>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

export default HomePage