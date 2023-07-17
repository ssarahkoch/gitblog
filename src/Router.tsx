import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issues/:id" element={<Post />} />
    </Routes>
  )
}
