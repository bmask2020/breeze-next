import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'



export default function AddCareBedSheet() {

    const Swal = require('sweetalert2')
    const [code,setCode] = useState('');
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [material,setMaterial] = useState('');
    const [color,setColor] = useState('');
    const [quantity,setQuantity] = useState('');
    const [pageTitle,setPageTitle] = useState('');
    const [pageDescrition,setPageDescrition] = useState('');
    const [pageKeywords,setPageKeywords] = useState('');
    const [shortDescription,setShortDescription] = useState('');
    const [image,setImage] = useState('');
    const [thumbnail,setThumbnail] = useState('');
    const [description,setDescription] = useState('');


    const handleOnChangeImage = e => {
       
        setImage(e.target.files[0]);
    };


    const handleOnChangeThumbnail = e => {

        setThumbnail(e.target.files[0]);
    };

    
    
    const PatientPants = async (e) => {

        
    
        e.preventDefault()
        const csrf = () => axios.get('/sanctum/csrf-cookie')
        await csrf()

       let formData = new FormData()

       formData.append('code', code);
       formData.append('name', name);
       formData.append('price', price);
       formData.append('material', material);
       formData.append('color', color);
       formData.append('quantity', quantity);
       formData.append('pageTitle', pageTitle);
       formData.append('pageDescrition', pageDescrition);
       formData.append('pageKeywords', pageKeywords);
       formData.append('shortDescription', shortDescription);
       formData.append('image', image);
       formData.append('thumbnail', thumbnail);
       formData.append('description', description);

        axios
            .post('http://127.0.0.1:8000/api/care-bed-sheet-insert', formData)
            .then(response => 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product Add Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
                )
            .catch(error => console.log(error))

    
        }


        
    

    return (

        <>
        <AppLayout>
        <div class="content-body">
			<div class="container-fluid">
                <div className='row'>
        
                <div class="col-xl-12 col-lg-12">
                        <div class="card">
                            <div class="card-header" style={{padding:'1rem'}}>
                                <h4 class="card-title">Add Care Bed Sheet</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form onSubmit={PatientPants} style={{color:'#fff'}}>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Product Code</label>
                                                <input onChange={(e) => {setCode(e.target.value)}} type="text" class="form-control"/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Product Name</label>
                                                <input onChange={(e) => {setName(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Price</label>
                                                <input onChange={(e) => {setPrice(e.target.value)}} type="text" class="form-control"/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Material</label>
                                                <input onChange={(e) => {setMaterial(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Color</label>
                                                <input onChange={(e) => {setColor(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Quantity</label>
                                                <input onChange={(e) => {setQuantity(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Page Title</label>
                                                <input onChange={(e) => {setPageTitle(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Page Descrition</label>
                                                <input onChange={(e) => {setPageDescrition(e.target.value)}} type="text" class="form-control"/>
                                            </div>


                                            <div class="form-group col-md-6">
                                                <label>Page Keywords</label>
                                                <input onChange={(e) => {setPageKeywords(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Short Description</label>
                                                <input onChange={(e) => {setShortDescription(e.target.value)}} type="text" class="form-control"/>
                                            </div>

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Image</span>
                                                </div>
                                                <div class="custom-file">
                                                    <input onChange={handleOnChangeImage}  type="file" class="custom-file-input"/>
                                                    <label class="custom-file-label">Choose file</label>
                                                </div>
                                            </div>


                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Thumbnail</span>
                                                </div>
                                                <div class="custom-file">
                                                    <input onChange={handleOnChangeThumbnail} type="file" class="custom-file-input"/>
                                                    <label class="custom-file-label">Choose file</label>
                                                </div>
                                            </div>

                                        
                                            <div class="form-group" style={{width:'100%'}}>
                                            <textarea onChange={(e) => {setDescription(e.target.value)}} class="form-control" rows="5"></textarea>
                                            </div>

                                        </div>
                                       
                                      
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
					</div>

                </div>
            </div>
        </div>
        </AppLayout>
        </>
    )
}