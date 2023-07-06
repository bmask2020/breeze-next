import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

export default function LabCoatDelete() {

   
    useEffect(() => {

        const url = window.location.href;
        const myId = url.substring(48);

        const surgicalGown = async () => {

           
            const csrf = () => axios.get('/sanctum/csrf-cookie')
            await csrf()
    
           let formData = new FormData()
    
           formData.append('id', myId);
         
            axios
                .post('http://127.0.0.1:8000/api/coverall/delete', formData)
                .then(response => 
                  
                    window.location.pathname = '/dashboard/coverall'

                    )
                .catch(error => console.log(error))
    
        
            }

            surgicalGown();
      
          
    }, []);


}