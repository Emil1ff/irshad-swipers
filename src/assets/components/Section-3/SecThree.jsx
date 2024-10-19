import React from 'react'
import './three.css'
import Carusel from '../Carousel/Carusel'

const SecThree = () => {
    return (
        <section className='discounted-swip'>
            <div className="discounted-products">
                <div className="title">
                    <a className='popular' href="">Çox satılanlar</a>
                    <a className='new' href="">Endirimli məhsullar</a>
                </div>
                <Carusel apiUrl={"https://fakestoreapi.com/products"}/>
            </div>
        </section>
    )
}

export default SecThree
