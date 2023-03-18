import React from "react";
import Footer from "../components/footer";
import mustang from '../imgs/Mustang.jpg';
import camaro from '../imgs/camaro.jpg';
import auditt from '../imgs/auditt.jpg';
import Carrossel from "../components/carossel";

// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/card";

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <Carrossel />

                <div className="container ">
            
                    <div className="row  d-flex justify-content-center">
                    
                        <div className="col">

                            <Card title='Mustang'>
                                <img src={mustang} alt=""/>
                            
                            </Card>
                        </div>
                        
                        <div className="col">
                            <Card title='Camaro'>
                                <img src={camaro} alt=""/>
                         
                            </Card>
                        </div>

                        <div className="col">
                            <Card title='Audi TT'>
                                <img src={auditt} alt=""/>
                            
                            </Card>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}