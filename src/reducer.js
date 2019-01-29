import {CHANGE_SEACH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from'./constants.js'


const initialStateSearch = {
	searchField: ''
}

//a the reducer

export const searchRobots  = (state=initialStateSearch, action={})=>{
	switch(action.type){
		case CHANGE_SEACH_FIELD: 
			return {... state, searchField: action.payload}
		default:
			return state;
	}
}

const initialStateRobots ={
	isPending: false,
	robots: [],
	error:''
}


export const requestRobots =(state=initialStateRobots, action={}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING: 
			return Object.assign({}, state,{isPendind: true})

		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending:false})

		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})

		default:
			return state;
	}
}