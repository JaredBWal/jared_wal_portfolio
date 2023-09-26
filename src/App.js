
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import Research from './pages/Research'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/' element={<Projects />}></Route>
            <Route path='Projects' element={<Projects />}></Route>
            <Route path='About' element={<About />}></Route>
            <Route path='Projects/:title' element={<ProjectDetails />}></Route>
            <Route path='Research' element={<Research />}></Route>
          </Routes>
        </Header>
    </BrowserRouter>
    </div>
  );
}

export default App;
