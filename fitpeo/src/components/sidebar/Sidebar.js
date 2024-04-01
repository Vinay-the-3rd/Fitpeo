import React from 'react';
import TokenIcon from '@mui/icons-material/Token';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ContactsIcon from '@mui/icons-material/Contacts';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PercentIcon from '@mui/icons-material/Percent';
import InfoIcon from '@mui/icons-material/Info';
import Person from '../../assets/images/person.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Sidebar.css';

const Sidebar = () => {

  const itemList = [
    {
      text: 'Product',
      Icon: AutoAwesomeMosaicIcon
    },
    {
      text: 'Customers',
      Icon: ContactsIcon
    },
    {
      text: 'Income',
      Icon: CurrencyExchangeIcon
    },
    {
      text: 'Promote',
      Icon: PercentIcon
    },
    {
      text: 'Help',
      Icon: InfoIcon
    }
  ]

  return (
    <div className='sidebar'>

        <div className='dashboard'>
          <TokenIcon sx={{fontSize:'30px'}}/>
          <h2>
            Dashboard            
          </h2>
        </div>

        <div className='option-list-dashboard'>
          <TokenIcon sx={{fontSize:'20px'}}/>
          <h2>
              Dashboard            
          </h2>
        </div>

        {itemList.map((item)=>{
          const{text, Icon} = item;
          return(
            <div className='option-list' key={text}>              
                <Icon sx={{fontSize:'20px'}}/>
              <h2>
                  {text}            
              </h2>
              <div className='arrow-icon'>
                <ArrowForwardIosIcon sx={{fontSize:'10px'}}/>
              </div>
            </div>
          );
        })}

        <div className='manager-outerbox'>
            <img src={Person} />
          <div className='manager-innerbox'>
          <h2>
            Evano            
          </h2>
          <h3>
            Project Manager            
          </h3>
          </div>
          <div className='down-arrow-icon'>
            <KeyboardArrowDownIcon sx={{fontSize:'20px'}}/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar