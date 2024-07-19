import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <>
      <div className="flex flex-col items-center mt-20">
      <h1 className='text-5xl text-center'>404 Error - Page Not Found</h1>
      <Link to='/'><button className='bg-green-700 text-white text-xl mt-5 w-40 h-8 rounded-lg'>Go to Home</button></Link>
      </div>
        
        </>
    );
}

export default NotFound;