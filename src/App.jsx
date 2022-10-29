import React from 'react';
import { Home } from '@/components/home/index';
import { About } from '@/components/about/index';
import { Contact } from '@/components/contact';
import NavBar from '@/components/navbar';
import { Switch, Route, Router } from 'wouter';

export function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Router>
          <Route path='/'>
            <Home></Home>
          </Route>

          <Route path='/contact'>
            <Contact
              title={
                <div className='font-semibol mt-5 flex justify-center text-4xl'>
                  Contactos
                </div>
              }
            >
              texto
            </Contact>
          </Route>

          <Route path='/about'>
            <About>Acerca de Nosotros</About>
          </Route>
        </Router>
      </Switch>
    </>
  );
}

export default App;
