import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 pb-2">
        <div className="flex justify-center">
      <ul className="flex space-x-4">
        <li>
          <Link 
            to="/" 
            className={`block p-2 rounded border ${location.pathname === "/" ? "bg-gray-700 border-gray-500" : "border-transparent"} text-white`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/merge-sort" 
            className={`block p-2 rounded border ${location.pathname === "/merge-sort" ? "bg-gray-700 border-gray-500" : "border-transparent"} text-white`}
          >
            Merge Sort
          </Link>
        </li>
        <li>
          <Link 
            to="/merge-sort-two" 
            className={`block p-2 rounded border ${location.pathname === "/merge-sort-two" ? "bg-gray-700 border-gray-500" : "border-transparent"} text-white`}
          >
            MergeSort Two
          </Link>
        </li>
        <li>
          <Link 
            to="/mergesort-tree" 
            className={`block p-2 rounded border ${location.pathname === "/mergesort-tree" ? "bg-gray-700 border-gray-500" : "border-transparent"} text-white`}
          >
            MergeSort Three
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// // const Navbar: React.FC = () => {
// //   const location = useLocation();

// //   return (
// //     <nav className="navbar">
// //       <ul>
// //         <li>
// //           <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/merge-sort" className={location.pathname === "/merge-sort" ? "active" : ""}>
// //             Merge Sort
// //           </Link>
// //         </li>
// //         <li>
// //           <Link to ="/merge-sort-two"className={location.pathname === "/merge-sort-two" ? "active" : ""}>
// //           MergeSort Two</Link>
// //         </li>
// //         <li>
// //           <Link to="/mergesort-tree" className={location.pathname === "/mergesort-tree" ? "active" : ""}>MergeSortThree</Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;



