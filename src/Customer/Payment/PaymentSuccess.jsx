import Button from '@mui/material/Button'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { proceedPayment } from "../../../Redux/payment/action";

const PaymentSuccess = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const getQueryParam = (key) => {
        const params = new URLSearchParams(location.search)
        return params.get(key)
    }

    const {id} = useParams()
    const sessionId = getQueryParam("session_id");

    useEffect(() => {
        if(id) {
            dispatch(
              proceedPayment({
                paymentId: id,
                paymentRequest: {
                  sessionId: sessionId,
                },
                jwt: localStorage.getItem("jwt"),
              }),
            );
        }
    }, [id])
  return (
    <div className='min-h-[90vh] flex justify-center items-center'>
        <div className="bg-primary-color text-secondary-color p-8 w-[90%] lg:w-[25%] border rounded-md h-[49vh] flex flex-col gap-7 items-center justify-center">
            <h1 className='text-3xl font-semibold'>Congratulations!</h1>
            <h1 className='text-2xl font-semibold'>Your booking get success!</h1>
            <div className="">
                <Button variant='contained' color='secondary' onClick={() => navigate("/")}>
                    Go To Home
                </Button>
            </div>
        </div>
    </div>
  )
}

export default PaymentSuccess