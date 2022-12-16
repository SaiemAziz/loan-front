import React, { createContext, useState } from 'react';
import Bussiness from './Bussiness';
import Loan from './Loan';
import Personal from './Personal';
import Tab from './Tab';

export const InfoContext = createContext('')

const Home = () => {
    let [active, setActive] = useState(1)
    let [info, setInfo] = useState({})
    return (
        <InfoContext.Provider value={{info, setInfo, setActive, active}}>
            <div className='max-w-4xl mx-auto'>
                <Tab/>
                {active === 1 && <Personal/>}
                {active === 2 && <Bussiness/>}
                {active === 3 && <Loan/>}
            </div>
        </InfoContext.Provider>
    );
};

export default Home;