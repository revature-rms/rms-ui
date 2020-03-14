import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid var(--acc1)',
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginFunction = (props:any) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className = "btn">
        Login
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        //onClose={handleClose}
      >
          
          <div style={modalStyle} className={classes.paper}> 
          <Link to="" className="x-btn"
      
          onClick = {handleClose}>X</Link>      
          <h4 id="simple-modal-title">Enter your credentials</h4>
          <form>
            <label htmlFor= "username" >
                <span className="lbl"><b>Username</b></span>  
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
                required
                type= "text" 
                id = "username"
                placeholder = "Username"
                name = "username"
                value = {props.username}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
            <label htmlFor= "password">
            <span className="lbl"><b>Password</b></span>  
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
                required
                type= "password" 
                id = "password"
                placeholder = "enter password"
                name = "password"
                value = {props.password}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
         
            <button type="button" onClick={props.updateEmpDetails} className = "btn" >Sign in</button>
        
          </form>
          <br/>
        <h4>{props.updateMessage}</h4>
        </div>        
      </Modal>
    </div>
  );
  }

export default LoginFunction;
