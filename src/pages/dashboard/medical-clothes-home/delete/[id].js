import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

export default function MedicalClothesHomeDelete() {

   
    useEffect(() => {

        const url = window.location.href;
        const myId = url.substring(60);

        const surgicalGown = async () => {

           
            const csrf = () => axios.get('/sanctum/csrf-cookie')
            await csrf()
    
           let formData = new FormData()
    
           formData.append('id', myId);
         
            axios
                .post('http://127.0.0.1:8000/api/medical-clothes/delete', formData)
                .then(response => 
                  
                    window.location.pathname = '/dashboard/medical-clothes-home'

                    )
                .catch(error => console.log(error))
    
        
            }

            surgicalGown();

        
          
    }, []);


}