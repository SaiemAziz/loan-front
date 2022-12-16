import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { InfoContext } from './Home';

const Loan = () => {
    let { setActive, info, setInfo } = useContext(InfoContext)
    let [load, setLoad] = useState(false)
    let [err, setErr] = useState('')
    let personalForm = e => {
        e.preventDefault();
        setLoad(true)
        let loanAmount = e.target.loanAmount.value,
            taxTenure = e.target.taxTenure.value,
            interestRate = e.target.interestRate.value;
        if (!loanAmount || !taxTenure || !interestRate) {
            setErr('Please enter all loan information')
            setLoad(false)
            return;
        }
        if (!info.firstName || !info.lastName || !info.gstNo || !info.mobileNo || !info.age || !info.businessName || !info.address) {
            setErr('Please enter all personal and business information')
            setLoad(false)
            return;
        }

        let newUser = {
            ...info,
            loanAmount, interestRate, taxTenure
        }
        setInfo(newUser)
        setErr('')
        setActive(3)
        fetch('http://localhost:5000/add-user', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(data => {
                if (data.result.acknowledged) {
                    setLoad(false)
                    setActive(1);
                    setInfo({});
                    toast.success('Successfully User Added')
                }
            })
    }

    return (
        <div className="hero bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Loan Information</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={personalForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Loan Amount in $</span>
                            </label>
                            <input defaultValue={info?.loanAmount} type="number" name="loanAmount" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Interest Rate in %</span>
                            </label>
                            <input defaultValue={info?.interestRate} type="number" name="interestRate" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tax Tenure in months</span>
                            </label>
                            <input defaultValue={info?.taxTenure} type="number" name="taxTenure" className="input input-bordered" />
                        </div>
                        {err && <p className='text-sm text-center text-error'>{err}</p>}
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loan;