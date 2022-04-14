import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './feature/Nav';
const AboutLazy = lazy(() => import('./pages/About'))
const RobotsFriendsLazy = lazy(() => import('./pages/RobotsFriends'))
function App() {
  return (
    <div className='p-20'>
      <BrowserRouter>
        <Nav />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutLazy />} />
            <Route path="robotsFriends" element={<RobotsFriendsLazy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
export default App;
