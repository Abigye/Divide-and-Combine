import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "@/css/shared.css"
import Navbar from '@/components/navbar/Navbar';
import Home from '@/components/home/Home';
import MergeSort from '@/components/mergesort_one/mergesort';
 
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge-sort" element={<MergeSort/>} />
        <Route path="/merge-sort-two" element={<div>MergeSort Two</div>} />
        <Route path="/mergesort-tree" element={<div>MergeSort Three</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
