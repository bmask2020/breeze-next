import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

export default function CheckBedSheetDelete() {

   
    useEffect(() => {

        const url = window.location.href;
        const myId = url.substring(55);

        const surgicalGown = async () => {

           
            const csrf = () => axios.get('/sanctum/csrf-cookie')
            await csrf()
    
           let formData = new FormData()
    
           formData.append('id', myId);
         
            axios
                .post('http://127.0.0.1:8000/api/check-bed-sheet/delete', formData)
                .then(response => 
                  
                    window.location.pathname = '/dashboard/check-bed-sheet'

                    )
                .catch(error => console.log(error))
    
        
            }

            surgicalGown();

      
          
    }, []);


}