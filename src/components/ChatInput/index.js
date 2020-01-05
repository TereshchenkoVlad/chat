import React from 'react'

import './ChatInput.scss'
import { Icon, Input  } from 'antd'

const ChatInput = () => {
    return (
        <div className='chat-input'>
            <div className='chat-input__smile-btn'>
                <Icon type="smile" />
            </div>
            <Input placeholder='Повідомлення...' size='large' />
            <div className='chat-input__actions'>
                <Icon type="camera" /> 
                <Icon type="audio" />
                <Icon type="double-right" />
            </div>
        </div>
    )
}

export default ChatInput