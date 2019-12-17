import React from 'react'

import { Message } from 'components'
 
const Home = () => {
    return (
        <section>
            <Message 
                avatar='https://image.flaticon.com/icons/png/512/186/premium/186313.png' 
                text='Привіт друже як ти? Вже став міддл розробником?😂' date={new Date('2019-12-12')} />
        </section>
    )
}

export default Home