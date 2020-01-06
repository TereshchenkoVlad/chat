import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import eoLocale from 'date-fns/locale/en-US'

const Time = ({ date }) => (
    <>
        {formatDistanceToNow(date, { addSuffix: false, locale: eoLocale })}
    </>
)

export default Time