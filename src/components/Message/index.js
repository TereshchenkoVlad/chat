import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import eoLocale from 'date-fns/locale/en-US'
import classnames from 'classnames'
import checkedSvg from 'assets/img/checked.svg'
import unCheckedSvg from 'assets/img/unchecked.svg'

import './Message.scss'

const Message = ({avatar, user, text, date, isMe, isReaded, attachments, isTyping}) => {
    return (
        <div className={classnames('message', {
            'message--isme': isMe, 
            'message--is-typing': isTyping
            })}>
            <div className='message__content'>
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className='message__info'>
                    <div className='message__bubble'>
                        { text && <p className='message__text'>{text}</p>}
                        { isTyping && 
                        <div className='message__typing'>
                            <span />
                            <span />
                            <span />
                        </div>      
                        }
                    </div>
                    <div className='message__attachments'>
                        {
                            attachments 
                            ?
                            attachments.map((item, index) => (
                                <div key={item.filename + index}>
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            ))
                            :
                            null
                        }
                    </div>
                    {date && 
                        <span className='message__date'>
                            {formatDistanceToNow(date, { addSuffix: true, locale: eoLocale })}
                        </span>
                    }
                </div>
                
                
                {   isMe && isReaded 
                    ?
                    (
                        <img className='message__checked' src={checkedSvg} alt='checked' />
                    ) 
                    :
                    (
                        <img className='message__checked' src={unCheckedSvg} alt='unchecked' />
                    ) 
                }
                
            </div>
            
        </div>
    )
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string ,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool
}

export default Message