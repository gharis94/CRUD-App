import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import {deleteData} from '../../utils/firebase'
import { GlobalContext } from '../../context/GlobatContext';

export default function CardComponent({user}) {
    const {name,imageUrl,info,contact,email,id,imageName} =user
    const {users,setUsers,updateEdit} = React.useContext(GlobalContext)
    
    
    const handleDel =async(id,imageName)=>{
      if(window.confirm("Are you sure?")){
        await deleteData(id,imageName)
        const newUsers = users.filter(user=>user.id !== id);
        setUsers(newUsers)
      }
    }
  return (
    <Card sx={{ maxWidth: 345,margin:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Contact:${contact}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`email:${email}`}
          </Typography>
          <Stack direction='row' spacing={2}>
            <Typography  color = 'primary'
            onClick = {() => handleDel(id,imageName)}>
              Delete
            </Typography>
            <Typography onClick={()=>updateEdit(id)} color='primary'>Edit</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}