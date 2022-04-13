import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface RobotsState {
    isPending:boolean,
    robots:[],
    error:string,
}
const initialState:RobotsState = {
    isPending:false,
    robots:[],
    error:'',
}

export const robotsSlice = createSlice({
    name:'robots',
    initialState,
    reducers:{
        requesRobotsPending:(state)=>{
            state.isPending = true
        },
        requesRobots:(state,action:PayloadAction<[]>)=>{
            state.robots = action.payload
            state.isPending = false
        },
        requesRobotsFailed:(state,action:PayloadAction<string>)=>{
            state.error = action.payload
            state.isPending = false
        }
    }
})

export const {requesRobotsPending,requesRobots,requesRobotsFailed} = robotsSlice.actions
export const selectRobots = (state:RootState) => state.robots.robots
export const selectRobotsIspending = (state:RootState) => state.robots.isPending
export const selectRobotsError = (state:RootState) => state.robots.robots.error
export default robotsSlice.reducer