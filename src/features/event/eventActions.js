import { toastr } from "react-redux-toastr";
import { fetchSampleData } from "../../app/data/mockApi";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";

export const createEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_EVENT,
                payload: {
                    event
                }
            })
            toastr.success('Success!', 'Event has been created')
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')

        }
    }

}

export const updateEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
                type: UPDATE_EVENT,
                payload: {
                    event
                }
            })
            toastr.success('Success!', 'Event has been updated')
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')

        }
    }
}

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    }
}
export const loadEvents = () => {
    return async dispatch => {
        try {
            console.log('try')
            dispatch(asyncActionStart())
            let events = await fetchSampleData()
            console.log('events:', events)
            dispatch({ type: FETCH_EVENTS, payload: { events } })
            dispatch(asyncActionFinish())

        } catch (error) {
            console.log('error:', error)
            dispatch(asyncActionError())

        }
    }
}