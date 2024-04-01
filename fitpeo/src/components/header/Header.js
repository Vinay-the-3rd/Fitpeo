import React from 'react'
import HelloImg from '../../assets/images/hi.png';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='person-name'>
            <h2>Hello Shahrukh</h2>
            <img src={HelloImg} alt='hi' />
            <span>,</span>
        </div>
        <TextField
          id="outlined-start-adornment"
          sx={{  width: '25ch', background:'white' }}
          size='small'
          placeholder='Search'
          InputProps={{
            startAdornment: <InputAdornment position="start"> <SearchIcon /> </InputAdornment>,
          }}
        />
    </div>
  )
}

export default Header