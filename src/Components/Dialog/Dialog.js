import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../context/GlobatContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import {updateData} from '../../utils/firebase'
import { async } from '@firebase/util';
import { FormControl, Input } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const {isEdit,updateEdit,currentUser,updateState} = React.useContext(GlobalContext)
  const [state,setState] = React.useState(currentUser)
  
  const handleChange=(e)=>{

    const {name,value} = e.target;
    setState(prev=>({...prev,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    updateState(state)
    // (async()=>{
    //   await updateData(state)
    //   updateEdit()
    // })()
  }
  return (
    <div>
      {/* <Button variant="outlined" onClick={updateEdit}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={updateEdit}
        aria-labelledby="customized-dialog-title"
        open={isEdit}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={updateEdit}>
          Update Values
        </BootstrapDialogTitle>
        <DialogContent dividers>
          
           <Box
              component="form"
              sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
              noValidate
              autoComplete="off"
              onSubmit={(e)=>handleSubmit(e)}
            >
              <FormControl>
                <TextField
                  
                  id="outlined-required"
                  label="Name"
                  type='text'
                  name='name'
                  onChange={(e)=>handleChange(e)}
                  value={state.name}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  name='email'
                  onChange={(e)=>handleChange(e)}
                  value={state.email}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Contact"
                  name='contact'
                  onChange={(e)=>handleChange(e)}
                  value={state.contact}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Info"
                  name='info'
                  onChange={(e)=>handleChange(e)}
                  value={state.info}
                />
              </FormControl>
              <DialogActions>
                <Button autoFocus type='submit'>
                  Save changes
                </Button>
              </DialogActions>
            </Box>
          
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}
