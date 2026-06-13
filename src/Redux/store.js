import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { salonReducer } from './Salon/reducer'
import { authReducer } from './Auth/reducer'
import { categoryReducer } from './Category/reducer'
import { bookingReducer } from './Booking/reducer'
import { notificationReducer } from './Notifications/reducer'
import { reviewReducer } from './Review/reducer'
import { salonServiceReducer } from './Salon Services/reducer'
import { paymentReducer } from './Payment/reducer'
import { chartReducer } from './Chart/reducer'

const rootReducers = combineReducers({
    auth: authReducer,
    salon: salonReducer,
    review: reviewReducer,
    booking: bookingReducer,
    category: categoryReducer,
    notification: notificationReducer,
    service: salonServiceReducer,
    payment: paymentReducer,
    chart: chartReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))