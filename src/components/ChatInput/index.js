import React, {useState} from 'react'

import './ChatInput.scss'
import { Icon, Input  } from 'antd'

const ChatInput = () => {
    const [value, setValue] = useState(false)

    const openSendIcon = e => {
        e.target.value.trim() ? setValue(true) : setValue(false)
    }

    return (
        <div className='chat-input'>
            <div className='chat-input__smile-btn'>
                <Icon type="smile" />
            </div>
            <Input 
                placeholder='Повідомлення...' 
                size='large' 
                onChange={e => openSendIcon(e)}
            />
            <div className='chat-input__actions'>
                <Icon type="camera" /> 
                <Icon type="audio" />
                {value && <Icon type="double-right" /> }
            </div>
        </div>
    )
}

export default ChatInput