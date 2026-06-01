import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { salonReducer } from './Salon/reducer'
import { authReducer } from './Auth/reducer'
import { categoryReducer } from './Category/reducer'
import { bookingReducer } from './Booking/reducer'
import { notificationReducer } from './Notifications/reducer'

const rootReducers = combineReducers({
    salon: salonReducer,
    auth: authReducer,
    booking: bookingReducer,
    category: categoryReducer,
    notification: notificationReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))