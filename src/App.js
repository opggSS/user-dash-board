import { Switch, Route , HashRouter as Router} from 'react-router-dom'
import UsersList from './pages/UsersList'
import UserDetails from './pages/UserDetails'
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={UsersList} />
        <Route path='/user/:id' component={UserDetails} />
      </Switch>
    </Router>
  )
}

export default App;
