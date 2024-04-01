import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DataGrid } from '@mui/x-data-grid';
import './TableDisplay.css';

const TableDisplay = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'ProductName',
          headerName: 'Product Name',
          width: 600,
        },
        {
          field: 'Stock',
          headerName: 'Stock',
          width: 90,
        },
        {
          field: 'Price',
          headerName: 'Price',
          type: 'number',
          width: 90,
        },
        {
          field: 'TotalSales',
          headerName: 'Total Sales',
          type: 'number',
          width: 120,
        },
      ];
      
      const rows = [
        { id: 1, ProductName: 'Abstract 3D', Stock: '32 in stock', Price: '$ 14.99', TotalSales: '20' },
        { id: 2, ProductName: 'Sarphens Illustration', Stock: '32 in stock', Price: '$ 31.92', TotalSales: '60' },
        { id: 3, ProductName: 'Photoshop', Stock: '32 in stock', Price: '$ 31.92', TotalSales: '90' },
        { id: 4, ProductName: 'NextJs', Stock: '32 in stock', Price: '$ 11.92', TotalSales: '80' },
        { id: 5, ProductName: 'NodeJs', Stock: '32 in stock', Price: '$ 42.92', TotalSales: '40' },
        
      ];

    return (
        <div className='table-box'>
            <div className='table-header'>
                <h2>Product Sell</h2>
                <div className='days-text'>
                <TextField
                    id="outlined-start-adornment"
                    sx={{ width: '20ch', background: 'white', mr:'20px' }}
                    size='small'
                    placeholder='Search'
                    InputProps={{
                        startAdornment: <InputAdornment position="start"> <SearchIcon /> </InputAdornment>,
                    }}
                />
                    <h4>Last 30 days</h4>
                    <KeyboardArrowDownIcon sx={{fontSize:'20px'}}/>
                </div>
            </div>
            <div className='table'>                
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    sx={{overflow: 'scroll'}}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />        
            </div>
        </div>
    )
}

export default TableDisplay
