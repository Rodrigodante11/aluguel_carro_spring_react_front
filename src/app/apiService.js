import axios from "axios"

const httpClient = axios.create({
    // baseUrl: 'http://localhost:8080' // forma Errada 
    
    baseURL: 'https://aluguel-carro-spring.herokuapp.com', // forma correta
    withCredentials: true
    
})

class ApiService{

    constructor(apiUrl){
       
        this.apiUrl=apiUrl
      
    }
    
    static registrarToken(token){
       
        if(token){
            httpClient.defaults.headers['Authorization'] = `Bearer ${token}`
           
        }        
    }

    post(url, objeto){

        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.post(requestUrl, objeto,)
        
    }

    put(url,objeto){

        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.put(requestUrl, objeto)
    }

    delete(url){

        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.delete(requestUrl)
    }

    get(url){
  
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.get(requestUrl)
    }

}

export default ApiService