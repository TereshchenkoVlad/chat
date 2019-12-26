import React from 'react'
import PropTypes from 'prop-types'
import checkedSvg from 'assets/img/checked.svg'
import unCheckedSvg from 'assets/img/unchecked.svg'

const MessageStatus = ({ isMe, isReaded }) => (
    isMe && 
    (isReaded) ? (
        <img className='message__checked' src={checkedSvg} alt='checked' />
    ) : (
        <img className='message__checked' src={unCheckedSvg} alt='unchecked' />
    ) 
)
    


MessageStatus.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}

export default MessageStatus