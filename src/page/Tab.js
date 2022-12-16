import React, { useContext } from 'react';
import { useState } from 'react';
import { InfoContext } from './Home';

const Tab = () => {
    let {setActive, active} = useContext(InfoContext)
    return (
        <div className="tabs my-10 font-bold mx-auto w-fit">
            <button className={`tab tab-lifted tab-lg ${active===1 && 'tab-active'}`}
            onClick={()=>{
                setActive(1)
            }}
            >Personal</button>
            <button className={`tab tab-lifted tab-lg ${active===2 && 'tab-active'}`}
            onClick={()=>{
                setActive(2)
            }}
            >Business</button>
            <button className={`tab tab-lifted tab-lg ${active===3 && 'tab-active'}`}
            onClick={()=>{
                setActive(3)
            }}
            >Loan</button>
        </div>
    );
};


export default Tab;