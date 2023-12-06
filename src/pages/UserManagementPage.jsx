import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { IconDelete} from '../components';
import './pages.css';
import axios from 'axios';

const UserManagementPage = (props) => {
    const [data, setData] = useState( [{'id': 1, 'name':"name", 'email':"email", "type":"type"}]);
    const columns = [ { name: 'Type',
                        selector: row => row.type,
                        cell: (d) => <span>{d.type}</span>}, 
                      { name: 'Name',
                        selector: row => row.name,
                        cell: (d) => <span>{d.name}</span>},    
                      { name: 'Email',
                        selector: row => row.email,
                        cell: (d) => <span>{d.email}</span>,},
                      { name: "Action",
                        sortable: false,
                        selector: "null",
                        cell: (d) => <button onClick={handleClick.bind(this, d.id)} style= {{border: 'none'}}>
                                        <IconDelete width='24px' height='24px' color='black'/>
                                     </button>},
                    ]
    const handleClick = (id) => {
        console.log(`Delete button clicked for id: ${id}`);
        axios({
            method: "POST",
            url: props.proxy +"/delete",
            data:{
                user_id: id
            },
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        })
        .then((response) => {
            props.removeToken()
        }).catch((error) => {
           if (error.response) {
             console.log(error.response)
             console.log(error.response.status)
             console.log(error.response.headers)
             }
        })
        axios({
            method: "GET",
            url: props.proxy + "/all_users",
            headers: {
            Authorization: 'Bearer ' + props.token
            }
        })
        .then((response) => {
            setData(response.data)
        }).catch((error) => {
            if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    };               
    useEffect(() => {
        axios({
            method: "GET",
            url: props.proxy + "/all_users",
            headers: {
            Authorization: 'Bearer ' + props.token
            }
        })
        .then((response) => {
            setData(response.data)
        }).catch((error) => {
            if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    }, [props.proxy, props.token]);
    return (
        <div> 
            <Link to="/"> <button className="primary-button" style={{ position: 'fixed', top: 10, left: '50%', transform: 'translateX(-50%)' }}>Home</button> </Link>
            <div style={{ position: 'fixed', top: 75, left: '50%', transform: 'translateX(-50%)', width:'75%' }}>  
                <DataTable title= "ALL USERS" columns={columns} data={data}/>
            </div>
        </div>
    );
}

export default UserManagementPage