import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Charts.css';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const pieData = {
  datasets: [{
    label: 'My First Dataset',
    data: [100, 150, 150],
    backgroundColor: [
      'rgba(246,47,147,255)',
      'rgba(98,58,235,255)',
      'rgba(241,239,251,255)'
    ],
    hoverOffset: 4
  }]
};


const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Dataset',
    data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 80, 67, 65 ],
    backgroundColor: [
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(90,50,234,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
      'rgba(242,239,255,255)',
    ],
  }]
}; 


const Charts = () => {
  return (
    <div className='chart-box'>
        <div className='bar-chart-box'>
          <div className='bar-text'>
            <div className='bar-text1'>
              <h2>Overview</h2>
              <h4>Monthly Earning</h4>
            </div>
            <div className='bar-text2'>
              <h4>Quarterly</h4>
              <KeyboardArrowDownIcon sx={{fontSize:'20px'}}/>
            </div>
          </div>
          <div className='bar-chart'>
            <Bar data={data}  width={'100%'} height={'100%'} options={{ maintainAspectRatio: false }}/>
          </div>
        </div>
        <div className='pie-chart'>
            <div className='pie-text'>
              <h2>Customers</h2>
              <h4>Customer that buy products</h4>
            </div>
            <div className='pie'>
              <Doughnut data = {pieData}/>
            </div>
        </div>
    </div>
  )
}

export default Charts