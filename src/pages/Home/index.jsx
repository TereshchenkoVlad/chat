import React from 'react'

import { Message, DialogItem } from 'components'
 
const Home = () => {
    return (
        <section>
            <DialogItem user = {{
                fullname: 'Cristiano Ronaldo',
                isOnline: true, 

            }} 
            unreaded = {0}
            />
            <DialogItem user = {{
                fullname: 'Cristiano Ronaldo',
                isOnline: true, 

            }} 
            unreaded = {0}
            />
            <DialogItem user = {{
                fullname: 'Cristiano Ronaldo',
                isOnline: true, 

            }} 
            unreaded = {0}
            />
            {/* <Dialogs items= {[
                {
                    user: {
                        fullname: 'Maximilian Ostapovich',
                        avatar: null  
                    },
                    message: {
                        text: `Hi bitch, sho ti blya? Здравствуй, Ангел мой, Аня… А тут игра, 
                        от которой оторваться не мог. Можешь представить, в каком я был возбуждении.`,
                        isReaded: false,
                        updated_at: new Date()
                    }
                }
            ]} /> */}

            {/* <Message 
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
                attachments = {[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/user/erondu/100x100',
                    }
                ]}
            />
            <Message 
                avatar = 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png'
                isTyping = {true} 
            /> */}
        </section>
    )
}

export default Home