import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import HomePage from './pages/home.page'
import SweatersPage from './pages/sweaters.page'
import store from './store'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Header />
            <Navbar />
            <Switch>
                <Route path='/sweaters' component={SweatersPage} />
                <Route path='/' exact component={HomePage}/>
            </Switch>
        </div>
    </Provider>
  );
}

export default App;
