import React from 'react'

import { Message } from 'components'
 
const Home = () => {
    return (
        <section>
            <Message 
                avatar='https://image.flaticon.com/icons/png/512/186/premium/186313.png' 
                text='Привіт друже як ти? Вже став міддл розробником?😂' date={new Date('2019-12-19')} 
                isMe = {false} 
            />
            <Message 
                avatar='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png' 
                text='І тобі привіт! Я як найкраще! Я вже Senior, looser!' date={new Date('2019-12-20')} 
                isMe = {true} 
            />
        </section>
    )
}

export default Home