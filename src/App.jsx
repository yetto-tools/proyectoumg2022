import React from 'react';
import { Home } from '@/components/home/index';
import { About } from '@/components/about/index';
import { Contact } from '@/components/contact';
import NavBar from '@components/navbar';
import { Switch, Route, Router } from 'wouter';

export function App() {
  return (
    <>
      {/* wouter */}
      <NavBar />
      <Switch>
        <Router>
          <Route
            component={Home}
            path='/'
          >
            Inicio
          </Route>
          <Route
            component={Contact}
            path='/contact'
          />
          <Route
            component={About}
            path='/about'
          />
        </Router>
      </Switch>
      {/* <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
              </Routes>
            </BrowserRouter>
          */}
    </>
  );
}

export default App;
