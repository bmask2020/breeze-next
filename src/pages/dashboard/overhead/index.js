import AppLayout from '@/components/Layouts/AppLayout'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Overhead() {
   
    const [records, setRecords] = useState([]);
   
    useEffect(() => {

        async function getData() {
            const query = await fetch('http://127.0.0.1:8000/api/overhead');
            const response = await query.json();
            // console.log('response from API ', response);
            setRecords(response);

          }

          getData();
          
    }, []);
   
   
    

    return (

        <>
         <AppLayout>
        
         <div class="content-body">
			<div class="container-fluid">
           <div className='row'>
           <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header" style={{padding:'1rem 1rem'}}>
                                <h4 class="card-title">Overhead</h4>
                                <Link href="/dashboard/overhead/add" class="btn  btn-square btn-warning">Add Product</Link>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-md" style={{textAlign:'center'}}>
                                        <thead>
                                            <tr>
                                                <th><strong>#</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>Price</strong></th>
                                                <th><strong>Image</strong></th>
                                                <th><strong> Actions </strong></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{color:'white'}}>

                                            {

                                                records.map((val, index) => {

                                                    return (

                                                        <tr>
                                                <td><strong>{val.id}</strong></td>
                                                <td>{val.name}</td>
                                                <td>{val.price}</td>
                                                <td><img width={50} height={50} src={'http://127.0.0.1:8000/' + val.img} /></td>
                                                
                                                <td>
													<div class="dropdown">
														<button type="button" class="btn btn-success light sharp" data-toggle="dropdown">
															<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
														</button>
														<div class="dropdown-menu">
															<Link class="dropdown-item" href={'/dashboard/overhead/' + val.id}>Edit</Link>
															<Link class="dropdown-item" href={'/dashboard/overhead/delete/' + val.id}>Delete</Link>
														</div>
													</div>
												</td>
                                            </tr>
                                                    )
                                                })
                                            }
                                           
											
                                        </tbody>
                                    </table>
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