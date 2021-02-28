import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import Home from './components/home';
import Login from './components/login';
import Search from './components/search';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { actGetPostsRequest } from './redux/actions/postsAction';

function App() {
  const postsSelector = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const { posts } = postsSelector;
    if(Array.isArray(posts) && !posts.length) {
      console.log('alo');
      dispatch(actGetPostsRequest());
    }

  }, [dispatch]);

  return (
    <Router>
        <NavigationBar /> 
        <Switch>
          <Route path='/' render={() => <Home />} exact/>
          <Route path='/login' render={() => <Login />}/>
          <Route path='/search' render={() => <Search />}/>
        </Switch>
    </Router>
  );
}

export default App;
