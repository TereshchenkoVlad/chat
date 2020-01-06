import React from 'react'
import orderBy from 'lodash/orderBy'
import { Input, Empty  } from 'antd'

import { DialogItem } from 'components'

import './Dialogs.scss'

const { Search } = Input

const Dialogs = ({ items, userId, onSearch, inputValue }) =>  (
    
    <div className='dialogs'>
        <div className='dialogs__search'>
            <Search
                placeholder='Пошук користувачів'
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>

        { items.length ? orderBy(items, ['created_at'], ['desc']).map((item, index) => (
            <DialogItem 
                key={item._id+index}
                user={item.user}
                created_at={item.created_at}
                text={item.text}
                isMe={item.user._id === userId } 
            />
        )) : <Empty description='Пусто' />}
    </div>
);

export default Dialogs
