import { useState } from 'react'
import RobotCardList from './component/RobotCardList'
import SearchBar from '@/component/SearchBar'
import { RobotInfo } from "./component/RobotCard"
import { robotList } from '@/robotList'
function App() {
  const [robotArray, setList] = useState(robotList)
  const [searchfield,setSearchfield] = useState('')
  function onSearchChange(event:any){
    console.log(event.target?.value)
  }
  return (
      <div className="m-10">
        <SearchBar searchChange={onSearchChange}/>
        <RobotCardList robotList={robotArray} />
      </div>
  )
}
export default App
