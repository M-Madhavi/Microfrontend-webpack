
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Navbar'

const Apponebutton = React.lazy(
  () => import ('appone/Button')
);

const App = () => {
    return (
      <>
        
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <h1>APP TWO</h1>
      <div>
        <React.Suspense fallback='Loading Button'>
          <Apponebutton />
        </React.Suspense>
      </div>
      <h2>APP TWO</h2>
        </BrowserRouter>
      </>
    );
  }

export default App;
