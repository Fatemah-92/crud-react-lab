import axios from 'axios'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Interface from './components/Interface'
import Post from './components/Post'


function App() {
  return (
    <Routes>
    <Route path="/" element={<Interface />}></Route>
    <Route path="/post" element={<Post />}></Route>
  </Routes>
  )
}

export default App
