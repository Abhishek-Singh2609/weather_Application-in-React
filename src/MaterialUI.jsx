import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
function MaterialUI() {
    let handleClick=()=>{
     console.log("clicked button");
    }
     return (
       <>
       <h1>Material UI Demo</h1>
       <Button variant="outlined" onClick={handleClick} >Click</Button>
       <Button variant="contained" onClick={handleClick} color="error" size='medium'>Click!2</Button>
       <Button variant="contained" onClick={handleClick} color="error" size='large' endIcon={<DeleteIcon />} >Delete</Button>
       
       <Alert severity="error">This is an error Alert.</Alert>
   
        </>
     )
   }
   
   export default MaterialUI
   