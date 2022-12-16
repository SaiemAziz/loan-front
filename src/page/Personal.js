import React, { useContext, useState } from 'react';
import { InfoContext } from './Home';

const Personal = () => {
    let {setActive, info, setInfo} = useContext(InfoContext)
    let [err, setErr] = useState('')
    let personalForm = e => {
        e.preventDefault();
        let firstName = e.target.firstName.value,
        lastName = e.target.lastName.value,
        age = e.target.age.value,
        mobileNo = e.target.mobileNo.value;
        if(!firstName || !lastName || !mobileNo || !age)
        {
            setErr('Please enter all personal information')
            return;
        }

        let newUser = {
            ...info,
            firstName, lastName, age, mobileNo
        }
        setInfo(newUser)
        setErr('')
        setActive(2)
    }

    return (
        <div className="hero bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Personal Information</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={personalForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input defaultValue={info?.firstName} type="text" name="firstName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input defaultValue={info?.lastName} type="text" name="lastName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input defaultValue={info?.age} type="number" name="age" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile No.</span>
                            </label>
                            <input defaultValue={info?.mobileNo} type="number" name="mobileNo" className="input input-bordered" />
                        </div>
                        {err && <p className='text-sm text-center text-error'>{err}</p>}
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Next'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Personal;