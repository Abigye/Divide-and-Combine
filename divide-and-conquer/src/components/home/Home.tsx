import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Lightning, Cpu, PuzzlePiece, MagnifyingGlass, SquaresFour, ChartBar, Warning, Archive } from '@phosphor-icons/react';
import { PRINCIPLES, MERGESORT, BINARY_SEARCH, QUICKSORT, STRASSEN_MATRIX } from "@/constant/index";
import CardGrid from "@/components/ui/card";
import Footer from "@/components/ui/footer";

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.substring(1); // Remove '#'
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className="flex-col justify-center  max-w-fit ml-4 mr-4 pb-16">
            <div className="mt-18 text-center"> 
                <h3 className="mt-2  underline  mb-4 text-center"> What is Divide and Conquer? </h3>
                <div className="text-left">
                    <p>
                        Divide and Conquer is a powerful algorithmic paradigm that breaks down a problem into smaller, more manageable subproblems.
                        The goal is to solve each of these subproblems independently, then combine their solutions to form the solution to the original problem. This approach can greatly improve efficiency, particularly for complex problems.
                    </p>
                </div>
                < CardGrid data={PRINCIPLES} showImage={true}/>
    
                            {/* Why use Divide and conquer */}
                <h3 className="mt-2  underline  mb-4 text-center">Why Use Divide and Conquer?</h3>
                <div className="space-y-4">
                <div className="flex items-center">
                    <Lightning className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Efficiency:</strong> Dividing problems into smaller parts leads to more efficient solutions, especially with large datasets.</p>
                </div>
                <div className="flex items-center">
                    <Cpu className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Parallelization:</strong> Independent subproblems allow parallel processing, improving speed on modern hardware.</p>
                </div>
                <div className="flex items-center">
                    <PuzzlePiece className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Simplicity:</strong> Complex problems can be simplified by breaking them down recursively.</p>
                </div>
                </div>
                        {/* Examples */}
                <h3 className="mt-2 underline  mb-4 text-center" >Examples of Divide and Conquer Algorithms</h3>

                <div id="merge-sort" className="p-4 rounded-lg shadow-lg border-l-5 border-blue-500 mb-4 scroll-mt-16">
                    <div className="flex items-center mb-2">
                        <ChartBar className="w-6 h-6 text-blue-500 mr-2" />
                        <h4 className="text-xl">Merge Sort </h4>
                        </div>
                        <p className="text-left">Time Complexity: O(n log n)</p>
                        <p className="text-left"> Problem: Sorting an array or list of elements </p>
                        <CardGrid data = {MERGESORT} showImage={false} />
                    </div>
                </div> 
            <div className="p-4 rounded-lg shadow-lg border-l-5 border-yellow-500 mb-4">
                <div className="flex items-center mb-1">
                    <MagnifyingGlass className="w-6 h-6 text-yellow-500 mr-2" />
                    <h4 id= "binary-search" className="text-xl">Binary Search</h4>
                </div>
                    <p className="text-left">Time Complexity: O(log n)</p>
                    <p className="text-left"> Problem: Finding an element in a sorted array </p>
                    <CardGrid data={BINARY_SEARCH} showImage={false}/>
            </div>
            <div className="p-4 rounded-lg shadow-lg border-l-5 border-green-500 mb-4">
                <div className="flex items-center mb-2">
                    <ChartBar className="w-6 h-6 text-green-500 mr-2"/>
                    <h4 id= "quick-sort" className="text-xl">Quick Sort</h4>
                </div>
                    <p className="text-left"> Time Complexity: O(n log n) best case and average case, O(n²) worst case </p>
                    <p className="text-left"> Problem: Sorting an array or list of elements. </p>
                    <CardGrid data={QUICKSORT} showImage={false}/>
            </div>
            <div className="p-4 rounded-lg shadow-lg border-l-5 border-red-500 mb-4">
                <div className="flex items-center mb-2">
                    <SquaresFour  className="w-6 h-6 text-red-500 mr-2" />
                    <h4  id= "strassen-matrix" className="text-xl">Strassen Matrix</h4>
                </div>
                    <p className="text-left">Time Complexity: O(n².81)</p>
                    <p className="text-left"> Problem: Multiplying two matrices </p>
                    <CardGrid data={STRASSEN_MATRIX} showImage={false}/>
            </div>
                    {/* Challenges */}
             <h3 className="mt-2 underline  mb-4 text-center">Some Challenges</h3>
                <div className="space-y-4">
                <div className="flex items-center">
                    <Warning className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Overhead in combining solutions:</strong> Combining subproblems can be complex.</p>
                </div>
                <div className="flex items-center">
                    <Warning className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Memory usage:</strong> Storing intermediate results may consume large amounts of memory.</p>
                </div>
      </div>

        {/* Real-World Applications */}

        <h3 className="mt-2 underline  mb-4 text-center">Real-World Applications</h3>
                <div className="space-y-4">
                <div className="flex items-center">
                    <Archive className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Sorting large datasets:</strong> Used in databases and search engines</p>
                </div>
                <div className="flex items-center">
                    <Archive className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Searching in databases:</strong> Binary search is used in sorted data.</p>
                </div>
                <div className="flex items-center">
                    <Archive className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Image processing:</strong> Edge detection and image merging often use divide and conquer.</p>
                </div>
                <div className="flex items-center">
                    <Archive className="w-6 h-6 text-blue-500 mr-3" />
                    <p><strong>Computer graphics:</strong> Used in rendering complex scenes.</p>
                </div>
            </div>
        
         {/* Footer */}
      <Footer />
    </div>
        );
    };

export default Home;