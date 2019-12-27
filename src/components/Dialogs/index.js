import React from 'react'
import orderBy from 'lodash/orderBy'

import { DialogItem } from 'components'
import './Dialogs.scss'

const Dialogs = ({ items, userId }) =>  (
    <div className='dialogs'>
        { orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem 
                key={item._id}
                message={item}
                isMe={item.user._id === userId } 
            />
        )) }
    </div>
);

export default Dialogs
