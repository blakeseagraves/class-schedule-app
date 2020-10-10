import { FETCH_COURSES, REMOVE_COURSE, ADD_COURSE } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_COURSES:
            return [...state, ...action.payload]
        case REMOVE_COURSE:
            console.log("remove clicked")
            return  [
                ...state.map((course, index) => {
                    if(course == action.payload) {
                        course.enrolled = false
                    }
                    return course
                })
            ]
        case ADD_COURSE:
            console.log("add clicked")
            return  [
                ...state.map((course, index) => {
                    if(course == action.payload) {
                        course.enrolled = true
                    }
                    return course
                })
            ]
        default: return state

    }
}