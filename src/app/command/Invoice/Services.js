import axios from 'axios'

const INVOICE_API_URL = "http://store-software-backend.herokuapp.com:80/api/invoice/";

class AllServices {
    getAll(){
        return axios.get(INVOICE_API_URL)
    }

    create(data) {
        return axios.post(INVOICE_API_URL, data)
    }
    update(data) {
        return axios.put(INVOICE_API_URL, data)
    }
    getById(id){
        return axios.get(INVOICE_API_URL +'getInvoiceById/'+id)
    }

    search(id){
        return axios.get(INVOICE_API_URL +'getInvoiceByName/'+id)
    }
}

export default new AllServices