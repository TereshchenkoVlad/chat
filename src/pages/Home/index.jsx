import React from 'react'
import { Icon } from 'antd'

import { Messages, Status, ChatInput } from 'components'
import { Dialogs  } from 'containers'
 
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
                                <Status online={true} />
                            </div>
                        </div>
                        <div className='chat__dialog-burger-menu'>
                            <Icon type='ellipsis' style={{fontSize: '24px'}} />
                        </div>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages items={[]} />
                    </div>
                    <div className="chat__dialog-type-area">
                        <ChatInput />
                    </div>
                </div>
            </div>
            
            

            
        </section>
    )
}

export default Home