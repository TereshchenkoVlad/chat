import React from 'react'

import { Message } from 'components'
 
const Home = () => {
    return (
        <section>
            <Message 
                avatar='https://image.flaticon.com/icons/png/512/186/premium/186313.png' 
                text='Привіт друже як ти? Вже став міддл розробником?😂' date={new Date('2019-12-19')} 
                isMe = {true} 
                isReaded = {true}
                attachments = {[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/user/erondu/100x100',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/user/erondu/100x100',
                    }
                ]}
            />
            <Message 
                avatar = 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png'
                isTyping = {true} 
            />
        </section>
    )
}

export default Home