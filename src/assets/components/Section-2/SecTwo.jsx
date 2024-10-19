import React from 'react'
import Carusel from '../Carousel/Carusel'
import './two.css'
import Mark from '../Carousel-mark/Mark'

const SecTwo = () => {
    return (
        <section className='products-swip'>
            <div className="popular-products">
                <div className="title">
                    <a className='popular' href="">Populyar məhsullar</a>
                    <a className='new' href="">Yeni məhsullar</a>
                </div>
                <Carusel apiUrl="https://fakestoreapi.com/products" />
                <Mark />
            </div>
        </section>
    )
}

export default SecTwo
