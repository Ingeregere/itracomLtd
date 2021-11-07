import axios from 'axios'
import {API} from "../../../config";

const  COMMAND_API_URL = `${API}/api/command/`;

class AllServices {
    getAll(){
        return axios.get( COMMAND_API_URL)
    }

    create(data) {
        return axios.post( COMMAND_API_URL, data)
    }

    update(data) {
        return axios.put( COMMAND_API_URL, data)
    }
    remove(id){
        return axios.delete( COMMAND_API_URL + id)
    }
    getById(id){
        return axios.get( COMMAND_API_URL +'getCommandById/'+id)
    }

    search(id){
        return axios.get( COMMAND_API_URL +'searchCommandByCreatedAt/'+id)
    }
}

export default new AllServices