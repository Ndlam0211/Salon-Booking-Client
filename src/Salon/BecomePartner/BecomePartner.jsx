import React from 'react'
import SellerAccountForm from './SellerAccountForm';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const BecomePartner = () => {
    const navigate = useNavigate()

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-1 col-span-3 p-10 shadow-lg rounded-b-md">
        <SellerAccountForm />
        <div className="mt-10 space-y-2">
            <h1 className='text-center text-sm font-medium'>Already have account?</h1>
            <Button fullWidth variant='outlined' onClick={() => navigate("/login")}>Login</Button>
        </div>
      </section>
    </div>
  );
}

export default BecomePartner