interface Props{
    searchChange:Function,
}
function SearchBar (props:Props){
    const {searchChange} = props
    return (
        <div className="flex justify-center mb-5">
            <input className="border-black" type="text" placeholder="searchRobot" onChange={searchChange as any}/>
        </div>  
    )
}
export default SearchBar