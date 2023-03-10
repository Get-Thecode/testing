import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card'>
            <div className='product-image'>
                <img src="images/watch.jpg" alt="product iamge" />
            </div>
            <div className='product-details'>
                <h6 className="brand">Yeh brand ka naam hai</h6>
                <h5 className='product-title'>Yeh title hoga</h5>
                <p  className='price'>$$Yeh price hoga</p>
            </div>
        </div>
      
    </div>
  )
}

export default ProductCard
