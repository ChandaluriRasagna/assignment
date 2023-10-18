import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { PieChart, Pie, Text } from 'recharts';
 import BasicTable from './BasicTable'; 
 const CustomLabel = ({ cx, cy }) => {
  return (
      <>
          <text x={cx} y={cy - 15} fill="#8884d8" textAnchor="middle" dominantBaseline="middle" fontWeight="bold" fontSize="16">
              65%
          </text>
          <text x={cx} y={cy} fill="#8884d8" textAnchor="middle" dominantBaseline="middle" fontSize="12">
              Total
          </text>
          <text x={cx} y={cy + 15} fill="#8884d8" textAnchor="middle" dominantBaseline="middle" fontSize="12">
              New Customers
          </text>
      </>
  );
};

function Home() {
  const pieData = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 600 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  
    const data = [
        {
          month:'Jan',
          uv: 4000,
        },
        {
          month:'Feb',
          uv: 2000,
        },
        {
          month:'Mar',
          uv: 2500,
        },
        {
          month:'Apr',
          uv: 3000,
        },
        {
          month:'May',
          uv: 3500,
        },
        {
          month:'Jun',
          uv: 3200,
        },
        {
          month:'Jul',
          uv: 4000,
        },
        {
          month:'Aug',
          uv: 4000,
        },
        {
          month:'Sep',
          uv: 4200,
        },
        {
          month:'oct',
          uv: 4000,
        },{
          month:'Nov',
          uv: 2300,
        },{
          month:'Dec',
          uv: 4000,
        },
      ];
     

  return (
    <main className='main-container'>
        {/* <div className='main-title'>
            <h3>Hello Shahrukh,</h3>
        </div> */}

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earning</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>$198k</h1>
                <h5>↑37.8% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h5>↓2% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h5>↓2% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Sales</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>$89k</h1>
                <h5>↑11% this week</h5>
            </div>
        </div>
        <div className='main-cards'>
        <div className='charts card' style={{backgroundColor: 'white' ,width: '600px'}}>
        <h3 className='h1'>
    <div>Overview</div>
    <div style={{ display: 'inline-flex' }}>Monthly Earning</div>
</h3>
<select 
                            style={{
                                marginLeft: '10px',
                                height: '20px',
                                border: '1px solid #ccc',
                                borderRadius: '5px'
                            }}
                        >
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                        </select>
        <div className='card-inner'>
        <BarChart width={500} height={200} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
      <XAxis dataKey="month" />
    </BarChart>
    </div>
    </div>

{/* PieChart */}
<div className='card charts' style={{backgroundColor: 'white' ,width: '450px'}}>
{/* <div style={{ padding: '25px' }} ></div> */}
<h4 className='h1'>
        <div>Customers</div>
        <div ><h5>Customers that buy products</h5></div>
    </h4>
<div className='card-inner'>
<PieChart width={350} height={180}>
            <Pie
                data={pieData}
                cx={250}
                cy={90}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
               label={CustomLabel}
            >
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                
                </Pie>
        </PieChart>
        </div>
        </div>
        </div>
        <BasicTable/>
    </main>
  )
}

export default Home