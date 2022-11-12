import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { UploadFile,createUser } from '../../utils/firebase';
import {useNavigate} from 'react-router-dom'

const INITIAL_STATE={
    name:'',
    email:'',
    info:'',
    contact:'',
    imageUrl:'',
    imageName:''
}

const AddUser = () => {
    const [data,setData] = useState(INITIAL_STATE);
    const {name,email,info,contact} = data;
    const [submit,setSubmit] = useState(false)
    const [progress,setProgress] = useState(null)
    const [file,setFile] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const upload =async()=>{
            console.log('a')
            console.log(file)
            if(!file) return
            console.log('b')
            await UploadFile(file,setData,setProgress)
            console.log(data)
        };
        return upload;
    },[file])

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        //const id= new Date().getTime()
        await createUser(data)
        setData(INITIAL_STATE)
        setFile('')
        navigate('/')        
    }
    const handleImage=(e)=>{
        setFile(e.target.files[0])
        setData((prev)=>({...prev,imageName: e.target.files[0].name}))
    }
  return (
    <div>
        <h2>Add user</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
            <Input
                name='name'
                type='text'
                value={name}
                required
                placeholder='Enter the name'
                onChange={(e)=>handleChange(e)}
            />
            <Input
                name='email'
                type='email'
                required
                value={email}
                placeholder='Enter the email'
                onChange={(e)=>handleChange(e)}
            />
            <Input
                name='contact'
                type='number'
                required
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
                name='imageName'
                type='file'
                value={info}
                placeholder='Enter the info..'
                onChange={(e)=>handleImage(e)}
                
            />
            <button type='submit' disabled={progress===null || progress<100}>submit</button>
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
