import React from 'react'
import { Icon, Input  } from 'antd'

import { Dialogs, Message } from 'components'

const { Search } = Input
 
const Home = () => {
    return (
        <section className='home'>
            <div className='chat'>
                <div className='chat__sidebar'>

                    <div className='chat__sidebar-header'>
                        <div>
                            <Icon type='team' />
                            <span>Список бесід</span>
                        </div>
                        <Icon type='form' />
                    </div>

                    <div className='chat__sidebar-search'>
                        <Search
                            placeholder='Пошук користувачів'
                            onSearch={value => console.log(value)}
                        />
                    </div>

                    <div className='chat__sidebar-dialogs'>
                        <Dialogs 
                            userId = {0}
                            items= {[
                                {
                                    _id: 'kdo1p2dkb8d98b9f0f1e0744d1bf91d9f52',
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-12'),
                                    user: {
                                        _id: 'qwefqwefwqef',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: 1,
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-14'),
                                    user: {
                                        _id: 'y12uktykub9f0f1e0744d1bf91d9f52',
                                        fullname: 'Yirio Familiano',
                                        avatar: null,
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: 1,
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-24'),
                                    user: {
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: '976636b8d98b9f0f1e0744d1bf91d9f52',
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-12'),
                                    user: {
                                        _id: '5123541235t123491d9f52',
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
                                        _id: '5035gh25h245h245h52',
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
                                        _id: '123123d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: null,
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: 1,
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-14'),
                                    user: {
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: 1,
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-14'),
                                    user: {
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-12'),
                                    user: {
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                                        isOnline: true
                                    }
                                },
                                {
                                    _id: 1,
                                    text: `Підтримує плагіни, розроблені за допомогою мови програмування Python`,
                                    created_at: new Date('2019-12-14'),
                                    user: {
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
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
                                        _id: '50b1bb8d98b9f0f1e0744d1bf91d9f52',
                                        fullname: 'Riolo Giornio',
                                        avatar: 'http://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png',
                                        isOnline: true
                                    }
                                }
                            ]} 
                        />
                    </div>

                </div>
                <div className='chat__dialog'>
                    <div className='chat__dialog-header'>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Владислав Терещенко</b>
                            <div className="chat__dialog-status">
                                <div className='status status--online'>В мережі</div>
                            </div>
                        </div>
                        <div className='chat__dialog-burger-menu'>
                            <Icon type='ellipsis' style={{fontSize: '24px'}} />
                        </div>
                    </div>
                    <div className="chat__dialog-messages">
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
                            text='на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей'
                        />
                        
                        <Message 
                            avatar = 'https://image.flaticon.com/icons/png/512/186/premium/186313.png'
                            isTyping = {true} 
                            isMe = {true} 
                        />
                    </div>
                </div>
            </div>
            
            

            
        </section>
    )
}

export default Home