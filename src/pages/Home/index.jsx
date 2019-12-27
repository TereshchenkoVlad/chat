import React from 'react'

import { Dialogs, Message } from 'components'
 
const Home = () => {
    return (
        <section>
            
            <Dialogs 
            userId = {1}
            items= {[
                {
                    _id: 1,
                     text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                    created_at: new Date('2019-12-12'),
                    user: {
                        _id: 1,
                        fullname: 'Maximilian Ostapovich',
                        avatar: null,
                        isOnline: false
                    }
                },
                {
                    _id: 1,
                     text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                    created_at: new Date('2019-12-14'),
                    user: {
                        _id: 1,
                        fullname: 'Yirio Familiano',
                        avatar: 'http://pngimg.com/uploads/avatar/avatar_PNG47.png',
                        isOnline: true
                    }
                },
                {
                    _id: 1,
                     text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                    created_at: new Date('2019-12-24'),
                    user: {
                        _id: 1,
                        fullname: 'Riolo Giornio',
                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                        isOnline: true
                    }
                }
            ]} />

            <Message 
                avatar='https://image.flaticon.com/icons/png/512/186/premium/186313.png' 
                date={new Date('2019-12-19')} 
                isMe = {false} 
                isReaded = {true}
                audio='https://www.soundeffectsplus.com/uploads/prod_audio/39472249_footsteps-running-on-road-03.mp3'
            />
            
            {/*  <Message 
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