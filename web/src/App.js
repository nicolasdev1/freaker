import React, { useEffect, useState } from 'react'

import api from './services/api'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('products').then(({ data }) => {
      setProducts(data)
    })
  }, [products])

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          {product.images.map((image, index) => (
            <img key={index} src={image} alt="" width={512} />
          ))}
        </div>
      ))}
    </>
  )
}

export default App
