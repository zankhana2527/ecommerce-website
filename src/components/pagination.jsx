import React from 'react'

const Pagination = ({ productsPerPage, products, paginate}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(products/productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#" >{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination