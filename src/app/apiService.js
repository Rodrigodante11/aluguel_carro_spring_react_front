import axios from "axios"
import AuthService from "./service/authService"
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
        const token = AuthService.obtertoken()
  
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.get(requestUrl, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
    }

}

export default ApiService