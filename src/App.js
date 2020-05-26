import React from "react";
import Nav from './components/Nav.jsx';
import Banner from './components/Banner.jsx';
const App = () => {
  return (
    <div className='App'>
      <div className='main-container'>
        <Nav />
        <section className='main-content'>
          <Banner />
        </section>

      </div>
     

    </div>
  );
};
export default App;
