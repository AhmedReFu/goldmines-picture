import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='btn-group'>
                {pageNumbers.map(number => <>
                    <li key={number} className="">
                        <div className="">
                            <button onClick={() => paginate(number)} className="btn btn-outline btn-warning m-1">{number}</button>
                        </div>
                    </li>
                </>)}
            </ul>
        </nav>

    )
}

export default Pagination