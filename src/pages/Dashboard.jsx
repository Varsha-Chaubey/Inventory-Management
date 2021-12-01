import React from "react";
import { Link } from "react-router-dom";

import Chart from "react-apexcharts";
import StatusCard from "../components/status-card/StatusCard";
import statusCards from "../assets/JsonData/Status-card-data.json";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

const ChartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 95, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 16, 40, 20, 51, 60, 10],
    },
  ],

  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    strock: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const TopCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "Raj Singh",
      order: "300",
      price: "22,000",
    },

    {
      username: "Rajeshvari Pandey",
      order: "350",
      price: "25,800",
    },

    {
      username: "Manish Tivari",
      order: "150",
      price: "15,375",
    },

    {
      username: "Rajkumar Sharma",
      order: "245",
      price: "23,666",
    },

    {
      username: "Rashmi Sharma",
      order: "275",
      price: "29,666",
    }
  ]
};

const renderCustomerHead = (item, index) => (
  <th key={index}>
    {item}
  </th>
);

const renderCustomerBody = (item, index) => (
  <tr key={index}> 
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)


const latestOrders = {
  head: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD001",
      username: "Raj Singh",
      price: "300",
      date: "18 Jan 2021",
      status: "paid"
    },

    {
      id: "#OD002",
      username: "Rajeshvari Pandey",
      price: "800",
      date: "30 jan 2021",
      status: "shipping"
    },

    {
      id: "#OD003",
      username: "Manish Tivari",
      price: "1,000",
      date: "6 Feb 2021",
      status: "pending"
    },

    {
      id: "#OD004",
      username: "Rajkumar Sharma",
      price: "666",
      date: "22 Mar 2021",
      status: "paid"
    },

    {
      id: "#OD005",
      username: "Rashmi Sharma",
      price: "200",
      date: "27 Apr 2021",
      status: "refund"
    }
  ]
}

const orderStatus = {
  "shipping": "primary",
  "paid": "success",
  "pending": "warning",
  "refund": "danger"
}
const renderOrdersHead = (item, index) => (
  <th key={index}>
    {item}
  </th>
);

const renderOrdersBody = (item, index) => (
  <tr key={index}> 
    <td>{item.id}</td>
    <td>{item.username}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type= {orderStatus[item.status]} content={item.status}/>
    </td>
  </tr>
)
const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                {/* status card  */}

                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-6">
          <div className="card full-height">
            {/* chart boxes */}
            <Chart
              options={ChartOptions.options}
              series={ChartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              {/* table  */}
              <Table 
                headData = {TopCustomers.head}
                renderHead = {(item, index) =>renderCustomerHead(item, index)}
                bodyData = {TopCustomers.body}
                renderBody = {(item, index) =>renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">Veiw All</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData = {latestOrders.head}
                renderHead = {(item, index) => renderOrdersHead(item, index)}
                bodyData ={latestOrders.body}
                renderBody = {(item, index) => renderOrdersBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
