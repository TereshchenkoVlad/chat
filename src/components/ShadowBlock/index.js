import React from 'react'
import classnames from 'classnames'

import './ShadowBlock.scss'

const ShadowBlock = ({children, className}) => {
    return (
        <div className={classnames('ShadowBlock', className)}>
            {children}
        </div>
    )
}

export default ShadowBlock