import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface SearchBar {
    searchField:string,
}
const initialState:SearchBar = {
    searchField:'',
}

export const searchBarSlice = createSlice({
    name:'searchBar',
    initialState,
    reducers:{
        setSearchField:(state,action:PayloadAction<string>)=>{
            console.log('redux',action.payload)
            state.searchField = action.payload
        },
    }
})
export const {setSearchField} = searchBarSlice.actions
export const selectSearchField = (state:RootState) => state.searchBar.searchField
export default searchBarSlice.reducer