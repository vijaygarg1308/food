import React from 'react';
import { useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import "./Food.css";

export default function Food(){
    const location = useLocation();
    const { image,title } = location.state
    let parts = location.pathname.split("/").slice(1);
    
    return(
        <div>
            <div className="breadcrumb">
                {
                    parts.map((part,index) => {
                        let path = location.pathname.split(part)[0]
                        path = path + part
                        return(
                            <Link key={index} to={path}>{part}</Link>
                        )
                    })
                }
            </div>
            <h3>{title}</h3>
            <img src={image} alt="food item" width="30%"/>
        </div>
    )
}