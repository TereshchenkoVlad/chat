import React from 'react'
import classnames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import { MessageStatus, Avatar } from 'components'

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm')
    } else {
        return format(created_at, 'MMM d, yyyy')

    }
}

const DialogItem = ({ user, unreaded, created_at, text, isMe }) => {
    return (
        <div className={classnames('dialogs__item', {
            'dialogs__item--online': user.isOnline
        })}>
            <div className='dialogs__item-avatar'>
                <Avatar user={user}/> 
            </div>
            <div className='dialogs__item-info'>
                 <div className='dialogs__item-info-top'>
                    <b>{ user.fullname }</b>
                    <span>
                        { getMessageTime(created_at) } 
                        {/* <Time date={message.created_at} /> */}
                    </span>
                 </div>
                 <div className='dialogs__item-info-bottom'>
                    <p>
                        { text }
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
