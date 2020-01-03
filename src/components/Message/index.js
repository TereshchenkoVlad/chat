import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import convertTime from 'utils/convertTime'

import { Time, MessageStatus } from 'components'
import wavesPng from 'assets/img/Waves.png' 
import playPng from 'assets/img/play.png' 
import pausePng from 'assets/img/pause.png' 
import './Message.scss'

const MessageAudio = ({audio}) => {
    const [isPlay, setIsPlay] = useState(false)
    const [progress, setProgress] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef(null)

    const tooglePlay = () => {
        isPlay ? audioRef.current.pause() : audioRef.current.play()
    }

    useEffect(() => {
        audioRef.current.addEventListener('playing', () => setIsPlay(true))
        audioRef.current.addEventListener('pause', () => setIsPlay(false))
        audioRef.current.addEventListener('ended', () => {
            setIsPlay(false)
            setProgress(0)
            setCurrentTime(0)
        })
        audioRef.current.addEventListener('timeupdate', () => {
            const duration = (audioRef.current && audioRef.current.duration) || 0
            setCurrentTime(audioRef.current.currentTime)
            setProgress((audioRef.current.currentTime / duration) *   100)
        })
    }, [])

    return (
        <>
        <div className='message--is-audio-progress' style={{width: progress + '%'}}></div>
        <div className='message--is-audio'>
            <audio ref={audioRef} src={audio} preload='auto' />
            <div className='message--is-audio-button'  onClick={tooglePlay} > 
            { isPlay 
            ? <img className='message--is-audio-play' src={pausePng} alt={playPng} />
            : <img className='message--is-audio-play' src={playPng} alt={playPng} />
            }
                
            </div>
            <img className='message--is-audio-wave' src={wavesPng} alt={wavesPng} />
            <div className='message--is-audio-time'>{convertTime(currentTime)}</div>
        </div>
        </>
    )
}

const Message = ({avatar, user, text, date, isMe, isReaded, attachments, isTyping, audio}) => {

    return (
        <div className={classnames('message', {
            'message--isme': isMe, 
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--is-audio': audio
            })}>
            <div className='message__content'>
                <div className='message__avatar' >
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className='message__info'>
                    { (text || isTyping || audio) && 
                        <div className='message__bubble'>
                        
                    { // If Audio
                        audio && <MessageAudio audio={audio}/>
                    } 
                    
                        { text && <p className='message__text'>{text}</p>}
                        { isTyping && 
                        <div className='message__typing'>
                            <span />
                            <span />
                            <span />
                        </div>      
                        }
                        </div>
                    }

                    

                    { attachments && 
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
                    </div> }
                    {date && 
                        <span className='message__date'>
                            <Time date={date} />
                        </span>
                    }
                </div>
                
                <MessageStatus isMe={isMe} isReaded={isReaded}/>
                
            </div>
            
        </div>
    )
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    sMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    avatar: PropTypes.string,
    text: PropTypes.string,
    // date: PropTypes.string ,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string
}

export default Message