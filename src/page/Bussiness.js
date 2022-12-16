import React, { useContext, useState } from 'react';
import { InfoContext } from './Home';

const Bussiness = () => {
    let { setActive, info, setInfo } = useContext(InfoContext)
    let [err, setErr] = useState('')
    let personalForm = e => {
        e.preventDefault();
        let businessName = e.target.businessName.value,
            gstNo = e.target.gstNo.value,
            address = e.target.address.value;
        if (!businessName || !gstNo || !address) {
            setErr('Please enter all business information')
            return;
        }
        if (!info.firstName || !info.lastName || !info.mobileNo || !info.age) {
            setErr('Please enter all personal information')
            return;
        }

        let newUser = {
            ...info,
            businessName, address, gstNo
        }
        setInfo(newUser)
        setErr('')
        setActive(3)
    }

    return (
        <div className="hero bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Business Information</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={personalForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Business Name</span>
                            </label>
                            <input defaultValue={info?.businessName} type="text" name="businessName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GST No.</span>
                            </label>
                            <input defaultValue={info?.gstNo} type="number" name="gstNo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input defaultValue={info?.address} type="text" name="address" className="input input-bordered" />
                        </div>
                        {err && <p className='text-sm text-center text-error'>{err}</p>}
                        
                                <div className="form-control mt-6">
                                    <input type='submit' className="btn btn-primary" value='Next' />
                                </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bussiness;