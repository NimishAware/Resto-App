import React, { PureComponent } from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaBook, FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PieChart, Pie, Legend } from 'recharts';


const Dashboard = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });
  //console.log(stats);

  const {data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStats");
      return res.data;
    },
  });
  //console.log(chartData);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  const PieChartData = chartData.map((data)=>{
    return {name: data.category, value: data.revenue}
  })

  return (
    <div className='w-full md:w-[870px] mx-auto px-4'>
      <h2 className='text-2xl font-semibold my-4'>Hi, {user.displayName}</h2>

      {/* stats div */}
      <div className="stats stats-vertical w-full lg:stats-horizontal shadow">
  
        <div className="stat bg-emerald-200">
        <div className="stat-figure text-secondary text-3xl">
        <PiCurrencyInrBold />
        </div>

          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
  
        <div className="stat bg-orange-200">
        <div className="stat-figure text-secondary text-3xl">
        <FaUsers/>
        </div>

          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
  
        <div className="stat bg-indigo-400">
        <div className="stat-figure text-secondary text-3xl">
        <FaBook/>
        </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat bg-purple-300">
        <div className="stat-figure text-secondary text-3xl">
        <FaShoppingCart/>
        </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
  
      </div>

      {/* charts and graphs */}
      <div className='mt-16 flex flex-col sm:flex-row'>
        {/* bar chart */}
        <div className='sm:w-1/2 w-full'>
        <div  style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>

      {/* pie charts */}
      <div className='sm:w-1/2 w-full'>
        <div style={{width: '100%', height: 300}}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={PieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {PieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard