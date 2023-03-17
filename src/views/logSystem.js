import React from "react";
// import { AiTwotoneBuild , AiOutlineBuild} from "react-icons/ai";
import { FcMultipleDevices } from "react-icons/fc";
import Footer from "../components/footer";

export default class LogSystem extends React.Component{
    render(){
        return (
            <>
                               
                <h1 className="m-5 text-center" >
                    
                    <FcMultipleDevices size={350} color="red mt-4"/> 
                    Pagina em Construção
                </h1>
                    
                <Footer  />      
            </>
        )
    }
}
