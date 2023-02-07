import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Interface from './Interface'

export default function Post() {

    const api= 'https://63e223bdad0093bf29c8a7b9.mockapi.io/crud'
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get(api).then(res=> {
            setData(res.data)
        })
    }, [])

  return (
    <div>
        <Interface />
        <ul>
            {data.map((item:any)=> 
                <div key={item.id}>
                    <p> {item.fname} {item.lname} مرحبا</p>
                    <p>{item.email} البريد المسجل</p>
                    <p>{item.phone} الرقم المسجل</p>
                </div>
             )}
        </ul>    
    </div>
  )
}
