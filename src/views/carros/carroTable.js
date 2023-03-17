/* eslint-disable no-undef */
import React from "react";
import { MdDelete, MdModeEditOutline, MdRemoveRedEye } from "react-icons/md";
import '../../styles/table.css'
// import currencyFormatter from "currency-formatter";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const rows = props.carros.map( carro =>{
        
        return (
            <tr key={carro.id}>

                 {/* botoes de editar e deletar cobsulta */}
                 <td> 

                    <button type="button"  title="Editar"
                            className="btn btn-secondary bg-transparent me-1"
                            onClick={ ()=> props.editAction(carro.id)}>
                            <MdModeEditOutline color="blue"/>
                    </button>

                    <button type="button" title="Excluir"
                            className="btn btn-secondary bg-transparent me-1" 
                            // eslint-disable-next-line no-undef
                            onClick={()=> props.deleteAction(carro)}>
                           <MdDelete color="red"/>
                    </button>

                    <button type="button" title="Detalhar"
                            className="btn btn-secondary bg-transparent" 
                            // eslint-disable-next-line no-undef
                            onClick={()=> props.detailAction(carro.id)}>
                           <MdRemoveRedEye color="green"/>
                    </button>

                </td>
                <td>{carro.marca}</td>
                <td>{carro.modelo}</td>
                <td>{carro.ano}</td>
                <td>{carro.tipoCarro}</td>
            </tr>
        )
    })

    return(
        <div className="table-responsive">
            <table className="table table-hover">
                
                <thead>
                    <tr>
                        <th scope="col">Opções </th>
                        <th scope="col">Marca </th>
                        <th scope="col">Modelo </th>
                        <th scope="col">Ano </th>
                        <th scope="col">Tipo </th>
                      
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
                
            </table>
        </div>
    )
}