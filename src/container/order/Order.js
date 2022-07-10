import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik ,Form ,Formik} from 'formik';
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



function Order(props) {
    const [open, setOpen] = React.useState(false);
    const [dopen, setDOpen] = React.useState(false);
    const [did ,setDid] = useState(0);
    const[update ,setUpdate] = useState(false);
    let [data, setData] = useState([]);

    const handleDClickOpen = () => {
        setDOpen(true);
      };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDOpen(false);
    setUpdate(false);
    formikObj.resetForm();

  };

  const handleUpdate = (values) =>{
    let localData = JSON.parse(localStorage.getItem("order"))

    let uData = localData.map((d) => {
      if (d.id === values.id) {
        return values;
      } else {
        return d;
      }
    })

    localStorage.setItem("order", JSON.stringify(uData));

    loadData();
    formikObj.resetForm();
    handleClose()

  }
  const handleEdit = (params) =>{
    setUpdate(true)

    handleClickOpen()
 
    formikObj.setValues(params.row)
  }

  let schema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    address: yup.string().required("Enter your resedential address"),
    area: yup.string().required("Enter your resedential area"),
    phone: yup.number().required("Enter your contact number"),
    food: yup.string().required("Place your order")
  });

  const insertData = (values) =>{
    let  localData = JSON.parse(localStorage.getItem("order"));

    let id = Math.floor(Math.random() * 5000)

    let data = {
        id:id ,
        ...values
    }
      console.log(data);

      if (localData === null) {
        localStorage.setItem("order", JSON.stringify([data]));
      } else {
        localData.push(data);
        localStorage.setItem("order", JSON.stringify(localData));
      }
  
  
      loadData();
      formikObj.resetForm();
      handleClose()
  }
  const formikObj = useFormik({
    initialValues: {
      name: '',
      address: '',
      area: '',
      phone: '',
      food: ''
    },
    validationSchema: schema,
    onSubmit: values => {
        console.log(values);
        
        {
          if(update){
            handleUpdate(values);
          }else{
            insertData(values);
          }
        }
      },
  });

  const handleDelete = () => {
    let localData = JSON.parse(localStorage.getItem("order"))
    let fData = localData.filter((d) => d.id !== did)
    localStorage.setItem("order", JSON.stringify(fData))
    loadData();
    handleClose()
  }

    const columns = [
        { field: 'name', headerName: 'NAME', width: 70 },
        { field: 'address', headerName: 'RESEDENTIAL ADDRESS', width: 200 },
        { field: 'area', headerName: 'RESEDENTIAL AREA', width: 180 },
        { field: 'phone', headerName: 'CONTACT NUMBER', width: 180 },
        { field: 'food', headerName: 'ORDER', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
              <>
              <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
               <EditIcon />
             </IconButton>
              <IconButton aria-label="delete" onClick={() => {handleDClickOpen() ;setDid(params.id)}}>
                <DeleteIcon />
              </IconButton>
               
             </>
            )
          }
      ];

      useEffect(() => {
        loadData();
      }
        , [])
    
      const loadData = () => {
    
        let localData = JSON.parse(localStorage.getItem('order'))
    
        if (localData !== null) {
          setData(localData)
        }
      }
      


    const  {handleBlur ,handleChange ,handleSubmit ,touched ,errors}  = formikObj 
    return (
        <div>
          
            <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{ backgroundImage: 'url(images/bg-title-page-03.jpg)' }}>
                    <h2 className="tit6 t-center">
                        Order Now
                    </h2>
                </section>

            
            <div style={{margin:60}}>
               <h4>Order you have placed can be seen here .....</h4>
            </div>
  
            <Button variant="contained" onClick={handleClickOpen}>
        Order your food
      </Button>

      <div style={{ height: 450, width: '100%' ,marginTop:100}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   
    <Dialog
        open={dopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
      {
          update ?
        <DialogTitle>Replace your order</DialogTitle>
          :
        <DialogTitle>Order your Food</DialogTitle>
        }
        <Formik values={formikObj}>
        <Form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            It's time to have some tasty and delicious fun with PATO RESTAURANT.
            Your food is on your way.... 
          </DialogContentText>
          <TextField
          
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : ''}
           <TextField
           
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? <p>{errors.address}</p> : ''}
           <TextField
             margin="dense"
            id="area"
            label="Residential Area"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.area && touched.area ? <p>{errors.area}</p> : ''}
           <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="name"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? <p>{errors.phone}</p> : ''}
           <TextField
            margin="dense"
            id="food"
            label="Food"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.food && touched.food ? <p>{errors.food}</p> : ''}
          <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                {
                  update ?
                  
                <Button type='submit'>Update</Button>
                :
                <Button type='submit'>Submit</Button>
              }
              </DialogActions>
        </DialogContent>
        </Form>
        </Formik>
      </Dialog>

         
        </div>
    );
}

export default Order;