import React from 'react';
import Home from './Home';
import Sidebar from './components/Sidebar';
//import Contact from './Contact';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-20 w-full">
        <section id="home"><Home /></section>
        
      </main>
    </div>
  );
}

export default App;