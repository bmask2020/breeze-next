import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

export default function SplitDrapeDelete() {

   
    useEffect(() => {

        const url = window.location.href;
        const myId = url.substring(51);

        const surgicalGown = async () => {

           
            const csrf = () => axios.get('/sanctum/csrf-cookie')
            await csrf()
    
           let formData = new FormData()
    
           formData.append('id', myId);
         
            axios
                .post('http://127.0.0.1:8000/api/split-drape/delete', formData)
                .then(response => 
                  
                    window.location.pathname = '/dashboard/split-drape'

                    )
                .catch(error => console.log(error))
    
        
            }

            surgicalGown();

          
    }, []);


}