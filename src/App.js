import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'




const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </>
  )
}




export default App
