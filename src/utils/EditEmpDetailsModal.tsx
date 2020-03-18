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
      >
          
          <div style={modalStyle} className={classes.paper}> 
          <Link to="employee-details" className="x-btn"
          onClick = {handleClose}>X</Link>      
          <h4 id="simple-modal-title">Edit Employee Details</h4>
          <form>
            <label htmlFor= "firstName" >
                <span className="lbl"><b>First Name</b></span>  
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
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
            <span className="lbl"><b>Last Name</b></span>  
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
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
            <span className="lbl"><b>Email</b></span> 
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
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
            <span className="lbl"><b>Title</b></span>  
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
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
            <span className="lbl"><b>Department</b></span>  
                <input
                style = {{borderStyle: "solid", borderColor: "var(--acc2)", borderRadius: "25px", height: "20px", padding: "5px", width:"200px"}}
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
          <br/>
        <h4>{props.updateMessage}</h4>
        </div>        
      </Modal>
    </div>
  );
  }

export default EditEmpDetails;
