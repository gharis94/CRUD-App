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
  const {isEdit,updateEdit} = React.useContext(GlobalContext)

  

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
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  defaultValue="Hello World"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue="Hello World"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Contact"
                  defaultValue="Hello World"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Info"
                  defaultValue="Hello World"
                />
              </div>

            </Box>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={updateEdit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
