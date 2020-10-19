import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Services from './components/Services'

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
          <Navigation />
            <div className='content'>
                <Route path='/blogs' component={Blogs} />
                <Route path='/' component={Home}  exact={true}/>
                <Route path='/' component={Services} />
            </div>
            <Footer />
          </div>
    </BrowserRouter>
  );
}

export default App;
