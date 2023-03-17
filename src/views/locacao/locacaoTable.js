/* eslint-disable no-undef */
import React from "react";
import { MdDelete, MdModeEditOutline, MdRemoveRedEye } from "react-icons/md";
import '../../styles/table.css'

// import currencyFormatter from "currency-formatter";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const rows = props.locacaos.map( locacao =>{


        let nome =((String(locacao.cliente.nome).split(' ')).length !== 1) ? 
                    `${String(locacao.cliente.nome).split(' ')[0]} ${String(locacao.cliente.nome).split(' ')[1]} `
                    : locacao.cliente.nome;

        let automovel = `${String(locacao.automovel.marca)}  ${String(locacao.automovel.modelo)} `

        var valor = locacao.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        return (
            <tr key={locacao.id}>

                 {/* botoes de editar e deletar cobsulta */}
                 <td> 

                    <button type="button"  title="Editar"
                            className="btn btn-secondary bg-transparent me-1"
                            onClick={ ()=> props.editAction(locacao.id)}>
                            <MdModeEditOutline color="blue"/>
                    </button>

                    <button type="button" title="Excluir"
                            className="btn btn-secondary bg-transparent me-1" 
                            // eslint-disable-next-line no-undef
                            onClick={()=> props.deleteAction(locacao)}>
                           <MdDelete color="red"/>
                    </button>

                    <button type="button" title="Detalhar"
                            className="btn btn-secondary bg-transparent" 
                            // eslint-disable-next-line no-undef
                            onClick={()=> props.detailAction(locacao.id)}>
                           <MdRemoveRedEye color="green"/>
                    </button>

                </td>
                <td>{nome}</td>
                <td>{automovel}</td>
                <td>{locacao.locacaoKM}</td>
                <td>{valor}</td>
            </tr>
        )
    })

    return(
        <div className="table-responsive">
            <table className="table table-hover">
                
                <thead>
                    <tr>
                        <th scope="col">Opções </th>
                        <th scope="col">Cliente </th>
                        <th scope="col">Automovel </th>
                        <th scope="col">locação KM </th>
                        <th scope="col">Valor </th>
                      
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
                
            </table>
        </div>
    )
}