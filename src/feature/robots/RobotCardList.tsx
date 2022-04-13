import RobotCard,{ RobotInfo } from "./RobotCard"
interface Props{
    robotList:RobotInfo[],
}
function RobotCardList (props:Props){
    const { robotList } = props
    return (
        <div className="flex justify-center flex-wrap">
        {
            robotList.map((robot:RobotInfo)=>{
                return (
                    <RobotCard
                    key={robot.name}
                    robotInfo = {robot}
                    />
                )
            })
        }
        </div>
    )
} 
export default RobotCardList