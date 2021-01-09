import React, { useState, useEffect } from 'react'
import BannerSweater from '../assets/banner-sweaters.jpg'
import ProductCard from '../components/product-card'
import Pagination from '../components/pagination'
import Footer from '../components/footer'
 

const SweatersPage = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(9)

    useEffect(() => {
       fetch('products.json', {
           headers: {
               'Content-Type': 'application/json',
                'Accept': 'application/json'
           }
       })
       .then(res => res.json())
       .then(data => { setProducts(data)}) 
    }, [])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate  = (pageNumber) => { setCurrentPage(pageNumber)}

    return (
        <div className='sweaterPage'>
            <img src={BannerSweater} alt="banner-sweater" className='sweaterImage'/>
            <div className="product-grid">
                    {products.map(product => <ProductCard product={product} products={currentProducts}/>)}
            <Pagination productsPerPage={productsPerPage} products={products.length} paginate={paginate}/>
            </div>
            <div className="wrapper">
                <Footer />
            </div>
        </div>
    )
}

export default SweatersPage