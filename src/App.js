
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Users from './components/Users';
import Team from './components/Team';

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/team" element={<Team />} />

      </Routes>
    </>
  );
}

export default App;
