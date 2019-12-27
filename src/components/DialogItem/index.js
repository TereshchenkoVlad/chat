import React from 'react'
import classnames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import { MessageStatus } from 'components'
import './DialogItem.scss'

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm')
    } else {
        return format(created_at, 'MMM d, yyyy')

    }
}

const getAvatar = (avatar, fullname) => {
    if (avatar) {
        return (
            <img 
                src={avatar}
                alt={fullname + ' - Avatar' }
            /> 
        )
    } else {
        return (
            <img 
                src='https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png'
                alt={fullname + ' - Avatar' }
            /> 
        )
    }
}

const DialogItem = ({ message, unreaded, isMe }) => {
    return (
        <div className={classnames('dialogs__item', {
            'dialogs__item--online': message.user.isOnline
        })}>
            <div className='dialogs__item-avatar'>
                { getAvatar(message.user.avatar, message.user.fullname) }
            </div>
            <div className='dialogs__item-info'>
                 <div className='dialogs__item-info-top'>
                    <b>{ message.user.fullname }</b>
                    <span>
                        { getMessageTime(message.created_at) } 
                        {/* <Time date={message.created_at} /> */}
                    </span>
                 </div>
                 <div className='dialogs__item-info-bottom'>
                    <p>
                        { message.text }
                    </p>
                    {isMe && <MessageStatus isMe={true} isReaded={true} />}
                    { unreaded > 0 && <div className='dialogs__item-info-bottom-count'>
                        { unreaded }
                    </div>}
                 </div>
            </div>
        </div>
    )
}

export default DialogItem
