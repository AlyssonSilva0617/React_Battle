const React = require('react')
const ReactRouter = require('react-router-dom')

// works in dev but not in prod
const Router = ReactRouter.BrowserRouter

// https://stackoverflow.com/questions/37550560/why-is-react-webpack-production-build-showing-blank-page
//const Router = ReactRouter.HashRouter

const Route = ReactRouter.Route
const Switch = ReactRouter.Switch

const Nav = require('./Nav')
const Home = require('./Home')
const Battle = require('./Battle')
const Results = require('./Results')
const Popular = require('./Popular')
const HelloWorld = require('./HelloWorld')
const PageNotFound = require('./PageNotFound')

// Define a React App component here. A component may have:
// - state
// - lifecycle event (e.g. appear / disappear from screen)
// - UI
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route path='/helloworld' component={HelloWorld} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App