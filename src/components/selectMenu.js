import React from 'react'

const obterListaEstados = [

        {    index: 0 ,value: "" , label: 'Selecione...' },
        {    index: 1 ,value:"AC", label: 'Acre'},
        {    index: 2 ,value:"AL", label: 'Alagoas'},
        {    index: 3 ,value:"AP", label: 'Amapá'},
        {    index: 4 ,value:"AM", label: 'Amazonas'},
        {    index: 5 ,value:"BA", label: 'Bahia'},
        {    index: 6 ,value:"CE", label: 'Ceará'},
        {    index: 7 ,value:"DF", label: 'Distrito Federal'},
        {    index: 8 ,value:"ES", label: 'Espírito Santo'},
        {    index: 9 ,value:"GO", label: 'Goiás'},
        {    index: 10 ,value:"MA", label: 'Maranhão'},
        {    index: 11 ,value:"MT", label: 'Mato Grosso'},
        {    index: 12 ,value:"MS", label: 'Mato Grosso do Sul'},
        {    index: 13 ,value:"MG", label: 'Minas Gerais'},
        {    index: 14 ,value:"PA", label: 'Pará'},
        {    index: 15 ,value:"PB", label: 'Paraíba'},
        {    index: 16 ,value:"PR", label: 'Paraná'},
        {    index: 17 ,value:"PE", label: 'Pernambuco'},
        {    index: 18 ,value:"PI", label: 'Piauí'},
        {    index: 19 ,value:"RJ", label: 'Rio de Janeiro'},
        {    index: 20 ,value:"RN", label: 'Rio Grande do Norte'},
        {    index: 21 ,value:"RS", label: 'Rio Grande do Sul'},
        {    index: 22 ,value:"RO", label: 'Rondônia'},
        {    index: 23 ,value:"RR", label: 'Roraima'},
        {    index: 24 ,value:"SC", label: 'Santa Catarina'},
        {    index: 25 ,value:"SP", label: 'São Paulo'},
        {    index: 26 ,value:"SE", label: 'Sergipe'},
        {    index: 27 ,value:"TO", label: 'Tocantins'},
        {    index: 28 ,value:"EX", label: 'Estrangeiro'},
        
    ]

    const obterListaTipoDeCarro = [

        {    index: 0 ,value: "" , label: 'Selecione...' },
        {    index: 1 ,value:"CONVERSIVEL", label: 'Conversivel'},
        {    index: 2 ,value:"SEDA", label: 'Seda'},
        {    index: 3 ,value:"HATCH", label: 'Hatch'},
        {    index: 4 ,value:"PICAPE", label: 'Picape'},
        {    index: 5 ,value:"ESPORTIVO", label: 'Esportivo'},

    ]

 
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

    let options= '';

    if(props.name ==="estado"){

        options = obterListaEstados.map( (option) =>{
            return (
                <option key={option.index} value={option.value} > {option.label}</option>
            )
        }) 
    }

    if(props.name ==="tipoCarro"){
        options = obterListaTipoDeCarro.map( (option) =>{
            return (
                <option key={option.index} value={option.value} > {option.label}</option>
            )
        }) 
    }
    if(props.name ==="cliente" ){

        const lista =Array.from(props.value); 

        options = lista.map( (option) =>{
       
            return (
                <option key={option.id} value={option.id} > {option.nome}</option>
            )
        });
        
    }


    if(props.name ==="automovel" ){

        const lista =Array.from(props.value); 
        
        options = lista.map( (option) =>{
       
            return (
                <option key={option.id} value={option.id} > {option.marca} {option.modelo}</option>
            )
        });
        
    } 
    
    return(

        <select {...props}>
            
            {options}
        </select>

    )
}

// Atribua o primeiro e o segundo itens de às variáveis e coloque o restante em uma matriz:numbers

// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;