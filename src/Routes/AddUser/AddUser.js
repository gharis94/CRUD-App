import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { UploadFile } from '../../utils/firebase';

const INITIAL_STATE={
    name:'',
    email:'',
    info:'',
    contact:'',
    file:''
}

const AddUser = () => {
    const [data,setData] = useState(INITIAL_STATE);
    const {name,email,info,contact} = data;
    const [submit,setSubmit] = useState(false)
    const [progress,setProgress] = useState(null)
    const [file,setFile] = useState('')

    useEffect(()=>{
        const upload =async()=>UploadFile(file);
        upload();
    },[file])

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }
  return (
    <div>
        <h2>Add user</h2>
        <Form>
            <Input
                name='name'
                type='text'
                value={name}
                placeholder='Enter the name'
                onChange={(e)=>handleChange(e)}
            />
            <Input
                name='email'
                type='email'
                value={email}
                placeholder='Enter the email'
                onChange={(e)=>handleChange(e)}
            />
            <Input
                name='contact'
                type='number'
                value={contact}
                placeholder='Enter the contact number'
                onChange={(e)=>handleChange(e)}
            />
            <Input
                name='info'
                type='text'
                value={info}
                placeholder='Enter the info..'
                onChange={(e)=>handleChange(e)}
            />
            <Input
                name='file'
                type='file'
                value={info}
                placeholder='Enter the info..'
                onChange={(e)=>setFile(e.target.files[0])}
            />
        </Form>
    </div>
  )
}

export default AddUser

const Form = styled.form`
    display:flex;
    flex-direction:column;
    padding:10px;
`
const Input = styled.input`
    margin:10px;
    padding:10px;
    border-radius:5px;
    border:none;
`
