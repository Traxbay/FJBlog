import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'

class App extends Component {
  render(){
  return (
      <div className='grid-container'>
          <Navigation />
            <div className='content'>  
                <Route path='/blogs' component={Blogs} />
                <Route path='/about' component={About} />
                <Route path='/' component={Home}  exact/>
                <Route path='/' component={Services} exact/>
            </div>
            <Footer />
          </div>
  );
}
}

export default App;
