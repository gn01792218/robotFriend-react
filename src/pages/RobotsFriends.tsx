import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { setSearchField } from '../feature/searchBar/searchBarSlice'
import { requesRobotsPending, requesRobots, requesRobotsFailed } from '../feature/robots/robotsSlice'
import RobotCardList from '../feature/robots/RobotCardList'
import SearchBar from '../feature/searchBar/SearchBar'
import Scroll from '../feature/Scroll'
import { RobotInfo } from "../feature/robots/RobotCard"
function RobotsFriends(){
      //redux
  const dispatch = useAppDispatch()
  const robotArray = useAppSelector((state) => state.robots.robots)
  const searchField = useAppSelector((state) => state.searchBar.searchField)
  function onSearchChange(event: any) {
    dispatch(setSearchField(event.target?.value))
  }
  const filterRobotArr = robotArray.filter((robot: RobotInfo) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  useEffect(() => {
    dispatch(requesRobotsPending())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        dispatch(requesRobots(res))
      })
      .catch(err => {
        dispatch(requesRobotsFailed(err))
      })
  }, [])
    return (
        <div className="m-10">
          <SearchBar searchChange={onSearchChange} />
          <Scroll>
            <RobotCardList robotList={filterRobotArr} />
          </Scroll>
        </div>
    )
}
export default RobotsFriends