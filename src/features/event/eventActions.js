import { fetchSampleData } from "../../app/data/mockApi";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {
            event
        }
    }
}

export const updateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        payload: {
            event
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