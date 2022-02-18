import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="container mt-5">
        <div className="row g-0 ">
        <div className="col-md-8">
        <input type="text" className="form-control py-3 text-start course-search" placeholder="Start Learning!Ex:Fiver Freelancing Course"/>        
        </div>
        <div className="col-md-4">
        <button className="btn btn-primary w-100  fs-2 btn-sa">Search Anything</button>
        </div>

        </div>
           
        </div>
    );
};

export default Search;