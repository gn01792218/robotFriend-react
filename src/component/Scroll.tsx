const Scroll = (props:any)=>{
    return (
        <div className="h-[500px] p-5 border-8 border-black border-solid overflow-auto">
            {props.children}
        </div>
    )
}

export default Scroll