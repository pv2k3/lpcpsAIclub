import Navbar from './compoents/Navbar';
import './App.css';
import './tailwind/output.css'
import bg from "./img/bgai4.jpeg"
import AboutUs from './compoents/AboutUs';
// import Showcase from './compoents/Showcase';
import img1 from "./img/Vector1.svg"
import img2 from "./img/Vector2.svg"
import Introduction from './compoents/Introduction';
import Project from './compoents/Project';

function App() {
  return (
    <>
      <img src={img1} alt="effect" className='fixed right-0 bottom-0 z-[-1]'/>
      <img src={img2} alt="effect" className='fixed left-0 top-0 z-[-1]  rotate-180'/>
      <div className="App">
        <header className="App-header">
          <img src={bg} className='bg' alt='bg' />
          <Navbar />
          <h1 className='text-white text-6xl font-bold text-center font-ox w-4/5 m-auto flex justify-center items-center py-20'>Artificial Intelligence Club</h1>
        </header>
        <main>
          <Introduction />
          <Project />
        </main>
        <footer>
          <AboutUs />
        </footer>
      </div>
    </>
  );
}

export default App;
