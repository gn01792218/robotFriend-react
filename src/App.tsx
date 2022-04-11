import { useEffect, useState } from 'react'
import RobotCardList from './component/RobotCardList'
import SearchBar from './component/SearchBar'
import Scroll from './component/Scroll'
import { RobotInfo } from "./component/RobotCard"
function App() {
  const [robotArray, setList] = useState([])
  const [searchfield,setSearchfield] = useState('')
  function onSearchChange(event:any){
    setSearchfield(event.target?.value)
  }
  const filterRobotArr = robotArray.filter((robot:RobotInfo)=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
  })
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(res=>{
      setList(res)
    })
  },[])
  return (
      <div className="m-10">
        <SearchBar searchChange={onSearchChange}/>
        <Scroll>
          <RobotCardList robotList={filterRobotArr} />
        </Scroll>
      </div>
  )
}
export default App
