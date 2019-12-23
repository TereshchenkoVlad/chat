import React from 'react'

import { Message } from 'components'
 
const Home = () => {
    return (
        <section>
            <Message 
                avatar='https://image.flaticon.com/icons/png/512/186/premium/186313.png' 
                text='Привіт друже як ти? Вже став міддл розробником?😂' date={new Date('2019-12-12')} 
            />
            <Message 
                avatar='https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png' 
                text='Я вже  Senior, looser! Поняв да?!Я вже  Senior, looser! Поняв да?!' date={new Date('2019-12-20')} 
                isMe={true}
                isReaded={true}
            />
        </section>
    )
}

export default Home