import React from 'react'
import PropTypes from 'prop-types'
import generateAvatar from 'utils/generateAvatar'

import './Avatar.scss'


const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img 
                className='avatar'
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}
            /> 
        )
    } else {
        const {color, colorLighten} = generateAvatar(user._id)
        const firstLetter = user.fullname[0]
        return (
                <div 
                    className='avatar avatar--empty'
                    style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)` }}
                >
                    {firstLetter.toUpperCase()}
                </div>
            )
    }
}

Avatar.PropTypes = {
    className: PropTypes.string
}

export default Avatar