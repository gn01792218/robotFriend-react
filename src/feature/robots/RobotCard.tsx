interface Props {
    robotInfo:RobotInfo,
}
export declare interface RobotInfo{
    img:string,
    name:string,
    email:string,
}
function RobotCard (props:Props) {
    const {img , name , email} = props.robotInfo
        return (
            <>
            <h1></h1>
            <div className="mr-2 w-[220px] h-[300px] bg-rose-400 rounded-lg flex-col items-center justify-center text-center hover:bg-red-300">
                <div className="m-auto w-1/2 h-1/2">
                    <img className="w-full h-full" src={`https://robohash.org/${name}?size=100x100`} alt={`機器人${name}`} width="100" height="100"/>
                </div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            </>
        )
}
export default RobotCard