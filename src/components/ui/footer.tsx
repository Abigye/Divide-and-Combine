// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="w-full bg-gray-800 text-white py-4 mt-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//         <div className="mb-2 md:mb-0">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} MergeSort Visualizer. All Rights Reserved.
//           </p>
//         </div>
//         <div className="flex space-x-6">
//           <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
//             Contact Me
//           </a>
//           <a
//             href="https://www.linkedin.com/in/your-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://github.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MergeSort Visualizer. All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

