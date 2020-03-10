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
    border: '2px solid #000',
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EditEmpDetails = (props:any) => {
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
        Edit
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        //onClose={handleClose}
      >
          
          <div style={modalStyle} className={classes.paper}> 
          <Link to="employee-details" 
          style = {{float: "right", 
          fontStyle: "italic", 
          fontFamily: "sans serif", 
          borderStyle: "solid", 
          borderColor: "red",
          textDecoration: "none",
          color: "blue", 
          borderRadius: "40%"}}  
          onClick = {handleClose}>
            close
          </Link>      
          <h2 id="simple-modal-title">Edit employee details</h2>
          <form>
            <label htmlFor= "firstName" >
                <span style = {{}}>First Name </span>  
                <input
                style = {{borderStyle: "solid", borderColor: "black", borderRadius: "25px", height: "20px"}}
                required
                type= "text" 
                id = "firstName"
                placeholder = "enter first name"
                name = "fname"
                value = {props.fname}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
            <label htmlFor= "lastName">
            <span style = {{paddingRight: "3px"}}>Last Name</span>  
                <input
                style = {{borderStyle: "solid", borderColor: "black", borderRadius: "25px", height: "20px"}}
                required
                type= "text" 
                id = "lastName"
                placeholder = "enter last name"
                name = "lname"
                value = {props.lname}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
            <label htmlFor= "email">
            <span style = {{paddingRight: "3px"}}>Email</span> 
                <input
                style = {{borderStyle: "solid", borderColor: "black", borderRadius: "25px", height: "20px"}}
                required
                type= "email" 
                id = "email"
                placeholder = "enter email"
                name = "email"
                value = {props.email}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
            <label htmlFor= "title">
            <span style = {{paddingRight: "3px"}}>Title </span>  
                <input
                style = {{borderStyle: "solid", borderColor: "black", borderRadius: "25px", height: "20px"}}
                required
                type= "text" 
                id = "title"
                placeholder = "enter title"
                name = "title"
                value = {props.title}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
            <label htmlFor= "department">
            <span style = {{paddingRight: "3px"}}>Department </span>  
                <input
                style = {{borderStyle: "solid", borderColor: "black", borderRadius: "25px", height: "20px"}}
                required
                type= "text" 
                id = "department"
                placeholder = "enter department"
                name = "department"
                value = {props.department}
                onChange = {props.handleChange}
                />
            </label>
            <br/> <br/>
            <button type="button" onClick={props.updateEmpDetails} className = "btn" >Update</button>
        
          </form>
        </div>
        <br/>
        <h3>{props.updateMessage}</h3>
      </Modal>
    </div>
  );
  }

export default EditEmpDetails;
