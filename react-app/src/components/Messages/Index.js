import React, { useEffect } from 'react'
import './Messages.css'
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../../store/users';


const Messages = ({message, setCurrentChannelId}) => {
    const users = useSelector((state) => state.users.list)
    const user = users ? users.find((user) => user.id === message.user_id) : []
    const dispatch = useDispatch();

    console.log("---these are the message(s)", message)

    useEffect( async () => {
        console.log("inside dispatch for messages---------")
        await dispatch(getUsers())
    }, [])

    console.log("---------this is the users that got dispatched here", users)

    return (
        <div className='messages'>
            {/* maybe an avatar? */}
            <div className="messageInfo">
                <h4>
                {user.username}
                {/* <span className='timeStamp'>
                    {message.createdAt.toDateString()}
                </span> */}
                </h4>
                <div className="actualMessage">
                     {message.content}
                </div>
            </div>
        </div>
    )
}

export default Messages