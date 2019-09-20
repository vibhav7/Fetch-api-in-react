import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PostDetailPage from './components/PostDetailPage';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 1,
      postId: 1,
    }
  }
  passTheId = (e) => {
    this.setState({
      id: e.target.id
    })
  }
  passIdPostDetailPage = (e) => {
    this.setState({
      postId: e.target.id
    })
  }

  render() {
    const homeStyle = {
      color: 'white',
      fontSize: '24px'
    }
    return (
      <Router>
        <div className='wrapper'>
          <div className='nav-home'>
            <Link style={homeStyle} to='/'>
              Home
            </Link>
          </div>
          <Switch>
            <Route path='/' exact
              render={(props) => <HomePage passTheId={this.passTheId} />}
            />
            <Route path='/postpage'
              render={(props) => <PostPage passIdPostDetailPage={this.passIdPostDetailPage}
                id={this.state.id} />}
            />
            <Route path='/postdetailpage'
              render={(props) => <PostDetailPage postId={this.state.postId} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
