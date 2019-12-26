import React from 'react'
import classnames from 'classnames'

import { Time, MessageStatus } from 'components'
import './DialogItem.scss'

const DialogItem = ({ user, message, unreaded }) => {
    return (
        <div className={classnames('dialogs__item', {
            'dialogs__item--online': user.isOnline
        })}>
            <div className='dialogs__item-avatar'>
                <img src={'https://image.flaticon.com/icons/png/512/186/premium/186313.png'} alt={`${'Maximilian Ostapovich'} avatar`} /> 
            </div>
            <div className='dialogs__item-info'>
                 <div className='dialogs__item-info-top'>
                    <b>{ 'Maximilian Ostapovich' }</b>
                    <span>
                        {/* <Time date={new Date()} /> */}
                        21:00
                    </span>
                 </div>
                 <div className='dialogs__item-info-bottom'>
                    <p>
                        Hi bitch, sho ti blya sho ti blya sho ti blya?...
                    </p>
                    <MessageStatus isMe={true} isReaded={true} />
                    { unreaded > 0 && <div className='dialogs__item-info-bottom-count'>
                        { unreaded }
                    </div>}
                 </div>
            </div>
        </div>
    )
}

export default DialogItem
