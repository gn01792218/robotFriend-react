import RobotCard,{ RobotInfo } from "../component/RobotCard"
interface Props{
    robotList:RobotInfo[],
}
const RobotCardList = (props:Props) =>{
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