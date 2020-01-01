import React from 'react'
import orderBy from 'lodash/orderBy'

import { DialogItem } from 'components'
import './Dialogs.scss'

const Dialogs = ({ items, userId }) =>  (
    <div className='dialogs'>
        { orderBy(items, ['created_at'], ['desc']).map((item, index) => (
            <DialogItem 
                key={item._id+index}
                user={item.user}
                created_at={item.created_at}
                text={item.text}
                isMe={item.user._id === userId } 
            />
        )) }
    </div>
);

export default Dialogs
