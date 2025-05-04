import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "@/css/shared.css"
import Navbar from '@/components/navbar/Navbar';
import Home from '@/components/home/Home';
import MergeSort from '@/components/mergesort_one/mergesort';
import MergeSortTwo from '@/components/mergesort_two/MergeSortTwo';
import MergeSortThree from '@/components/mergesort_three/MergeSortThree';
 
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge-sort" element={<MergeSort/>} />
        <Route path="/mergesort-two" element={< MergeSortTwo />} />
        <Route path="/mergesort-three" element={<MergeSortThree/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
