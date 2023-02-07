import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Interface() {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const api= 'https://63e223bdad0093bf29c8a7b9.mockapi.io/crud'

  const navigate = useNavigate()
  const postData = ()=>{
      if(fname.length >=3 && lname.length >=3) {
          axios.post(api, {
              fname,
              lname,
              email,
              phone
          }).then(()=> {
              navigate('/post')
          axios.get(api)
          })
          
      }else{
          alert("Please write correct information")
      }
  }

  return (
    <div className="App">
      <h3>بيانات التواصل</h3>
      <input type="text" placeholder='الاسم' onChange={e=> setFName(e.target.value)}/>
      <input type="text" placeholder='العائله' onChange={e=> setLName(e.target.value)}/>
      <input type="email" placeholder='البريد الالكتروني' onChange={e=> setEmail(e.target.value)}/>
      <input type="number" placeholder='رقم التواصل' onChange={e=> setPhone(e.target.value)}/>
      <button onClick={postData}>تسجيل البيانات</button>
    </div>
  )
}
