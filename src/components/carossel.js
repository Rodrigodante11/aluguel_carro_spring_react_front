import mustang from '../imgs/Mustang.jpg'
import camaro from '../imgs/camaro.jpg'
import auditt from '../imgs/auditt.jpg'
import '../styles/carossel.css'
import React from 'react';

export default function Carrossel(){
    return (
        <div id="carrosel">
            <div className="container p-5 ">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ford Mustang</h5>
                            <p>Confira o novo carro de performance da Ford. Tudo o que você precisa saber sobre o Mustang Mach 1 2022. Solicite o seu orçamento.</p>
                        </div>
                        <img src={mustang} className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block">
                            <h5 >Camaro</h5>
                            <p>Confira o novo carro de performance da Ford. Tudo o que você precisa saber sobre o Mustang Mach 1 2022. Solicite o seu orçamento.</p>
                        </div>
                        <img src={camaro} className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                   
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Audi TT</h5>
                            <p>Confira o novo carro de performance da Ford. Tudo o que você precisa saber sobre o Mustang Mach 1 2022. Solicite o seu orçamento.</p>
                        </div>
                        <img src={auditt} className="d-block w-100" alt="..." />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    )
}