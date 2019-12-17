import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'antd'
import classnames from 'classnames'

import './Button.scss'

const Button = props => {
    return (
        <BaseButton {...props} className={classnames('button', props.className, {
            'button': props.size === 'large'
        })} />
    )
}

Button.propTypes = {
    className: PropTypes.string
}

export default Button