/* eslint-disable no-undef */
import React from "react";
import { MdDelete, MdModeEditOutline, MdRemoveRedEye } from "react-icons/md";
import '../../styles/table.css'
// import currencyFormatter from "currency-formatter";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const rows = props.clientes.map( cliente =>{

        let data_mes = String(cliente.dataCadastro).split(',')[1]

        if(data_mes.length === 1){
            data_mes = "0" + data_mes 
        }

        let data  = cliente.dataCadastro ? 
                    `${String(cliente.dataCadastro).split(',')[2]}/
                     ${data_mes}/
                     ${String(cliente.dataCadastro).split(',')[0]}`
                    : '';

        let nome =((String(cliente.nome).split(' ')).length !== 1) ? 
                    `${String(cliente.nome).split(' ')[0]} ${String(cliente.nome).split(' ')[1]} `: cliente.nome;
        return (
            <tr key={cliente.id}>

                 {/* botoes de editar e deletar cobsulta */}
                 <td> 

                    <button type="button"  title="Editar"
                            className="btn btn-secondary bg-transparent me-1"
                            onClick={ ()=> props.editAction(cliente.id)}>
                            <MdModeEditOutline color="blue"/>
                    </button>

                    <button type="button" title="Excluir"
                            className="btn btn-secondary bg-transparent me-1" 
                            // eslint-disable-next-line no-undef
                            onClick={()=> props.deleteAction(cliente)}>
                           <MdDelete color="red"/>
                    </button>

                    <button type="button" title="Detalhar"
                            className="btn btn-secondary bg-transparent" 
                            // eslint-disable-next-line no-undef
                            onClick={()=> props.detailAction(cliente)}>
                           <MdRemoveRedEye color="green"/>
                    </button>

                </td>
                <td>{nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.cidade}</td>
                <td>{cliente.estado}</td>
                <td>{data}</td>
            </tr>
        )
    })

    return(
        <div className="table-responsive">
            <table className="table table-hover">
                
                <thead>
                    <tr>
                        <th scope="col">Opções </th>
                        <th scope="col">Nome </th>
                        <th scope="col">Email </th>
                        <th scope="col">Cidade </th>
                        <th scope="col">Estado </th>
                        <th scope="col">Data Cadastro</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
                
            </table>
        </div>
    )
}