import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
          <Navigation />
            <div className='content'>
                <Route path='/blogs' component={Blogs} />
                <Route path='/' component={Home}  exact={true}/>
            </div>
            <Footer />
          </div>
    </BrowserRouter>
  );
}

export default App;
