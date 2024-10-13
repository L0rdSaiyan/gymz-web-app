import axios from "axios"

export const handler = axios.create(
    {
        baseURL: 'https://gymz-api-cipl.onrender.com/api',
        headers: 
        {
            "Content-Type" : "application/json"
        }
    }
)