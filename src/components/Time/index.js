import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import eoLocale from 'date-fns/locale/en-US'

const Time = ({ date }) => (
    <>
        {formatDistanceToNow(date, { addSuffix: false, locale: eoLocale })}
    </>
)
    

Time.propTypes = {
    // date: PropTypes.string
}

export default Time