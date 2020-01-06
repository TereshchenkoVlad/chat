import React from 'react'
import { Message } from 'components'

import { Empty } from 'antd'

const Messages = ({ items }) => {
    return  items.length 
            ? 
            <>
                <Message 
                    avatar='https://image.flaticon.com/icons/png/512/186/premium/186313.png' 
                    date={new Date('2019-12-25')} 
                    isMe = {false} 
                    isReaded = {true}
                    audio='https://www.soundeffectsplus.com/uploads/prod_audio/39472249_footsteps-running-on-road-03.mp3'
                />
                
                <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    attachments = {[
                        {
                            filename: 'image.jpg',
                            url: 'https://source.unsplash.com/user/erondu/100x100',
                        }
                    ]}
                />

                <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    date={new Date('2019-12-25')} 
                    isMe = {true} 
                    isReaded={true}
                    text='на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей'
                />
                    <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    date={new Date('2019-12-25')} 
                    isMe = {true} 
                    text='на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей'
                />
                    <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    date={new Date('2019-12-25')} 
                    isMe = {false} 
                    text='на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей'
                />
                    <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    date={new Date('2019-12-25')} 
                    isMe = {true} 
                    text='на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей'
                />
                    <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    date={new Date('2019-12-25')} 
                    isMe = {false} 
                    text='на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей'
                />
                
                <Message 
                    avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                    isTyping = {true} 
                    isMe = {true} 
                />
            </> 
            : 
            <Empty description='Немає повідомлень' />
}

export default Messages