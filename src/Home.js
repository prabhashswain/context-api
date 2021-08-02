import React,{ useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const Home = () => {
    const { data } = useContext(GlobalContext)
    
    return (
        <div>
            <h2>Name : {data.name}</h2>
            <h2>Designation : {data.role}</h2>
            <h2>Address : {data.address}</h2>
            <h2>Salary : {data.salary}</h2>
        </div>
    )
}

export default Home;
