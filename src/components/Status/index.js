import React from 'react'
import clasnames from 'classnames'

import './Status.scss'

const Status = ({ online }) => {
    return (
        <div className={clasnames('status', {'status--online': online})}>
            {online ? `В мережі` : `Не в мережі`}
        </div>
    )
}

export default Status