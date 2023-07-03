import AppLayout from '@/components/Layouts/AppLayout'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Swal from 'sweetalert2'
import { redirect } from 'next/navigation'

export default function SurgicalGownDelete() {

   
    useEffect(() => {

        const url = window.location.href;
        const myId = url.substring(53);

        const surgicalGown = async () => {

           
            const csrf = () => axios.get('/sanctum/csrf-cookie')
            await csrf()
    
           let formData = new FormData()
    
           formData.append('id', myId);
         
            axios
                .post('http://127.0.0.1:8000/api/surgical-gown/delete', formData)
                .then(response => 
                  
                     redirect('/dashboard')

                    )
                .catch(error => console.log(error))
    
        
            }

            surgicalGown();
          
    }, []);


}