import { useState } from 'react'
import RobotCardList from './component/RobotCardList'
import SearchBar from '@/component/SearchBar'
import { RobotInfo } from "./component/RobotCard"
import { robotList } from '@/robotList'
function App() {
  const [robotArray, setList] = useState(robotList)
  const [searchfield,setSearchfield] = useState('')
  function onSearchChange(event:any){
    setSearchfield(event.target?.value)
  }
  const filterRobotArr = robotArray.filter((robot:RobotInfo)=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
  })
  return (
      <div className="m-10">
        <SearchBar searchChange={onSearchChange}/>
        <RobotCardList robotList={filterRobotArr} />
      </div>
  )
}
export default App
