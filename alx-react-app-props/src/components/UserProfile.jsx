import {useContext} from 'react'
import UserContext from './UserContext'

export default function UserProfile () {
    const usersData = useContext(UserContext)
    return (
        <div>
            <h2>{usersData.name}</h2>
            <p>Age: {usersData.age}</p>
            <p>Bio: {usersData.bio}</p>
        </div>
    )
}