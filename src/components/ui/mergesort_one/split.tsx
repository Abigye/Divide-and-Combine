import React from 'react';

type SplitProps = {
  values: number[];
  isHighlighted: boolean;
  
};

const Split: React.FC<SplitProps> = ({ values, isHighlighted }) => {
  return (
    <div className={`flex items-center gap-0`}>
      {values.map((value, index) => (
        <div
          key={index}
          className={`px-6 py-3 border-1 text-xl font-bold ${
            isHighlighted
              ? 'bg-green-500 text-white border-green-700'
              : 'bg-gray-200 text-gray-800 border-gray-400'
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Split;

























// import React from 'react';

// type SplitProps = {
//   values: number[];
//   isHighlighted: boolean;
//   description: string;
// };

// const Split: React.FC<SplitProps> = ({ values, isHighlighted, description }) => {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className="flex items-center gap-2">
//         {values.map((value, index) => (
//           <div
//             key={index}
//             className={`px-4 py-2 border rounded-lg ${
//               isHighlighted ? 'bg-green-400 text-white' : 'bg-gray-100 text-gray-800'
//             }`}
//           >
//             {value}
//           </div>
//         ))}
//       </div>
//       {/* Description */}
//       <p className="text-sm text-gray-600 text-center">{description}</p>
//     </div>
//   );
// };

// export default Split;
