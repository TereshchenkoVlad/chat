import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Button, ShadowBlock } from 'components'

class RegisterForm extends React.Component {
    render(){
        const success = false;
        return (
            <div>
                <div className="auth__top">
                    <h2>Реєстрація</h2>
                    <p>Для входу в чат, необхідно зареєструватися</p>
                </div>
                <ShadowBlock>
                {
                    !success 
                    ? 
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback>
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Електронна пошта"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ім'я"
                                size='large'
                                
                            />
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input
                                type='password'
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Пароль"
                                size='large'
                                
                            />
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input
                                type='password'
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Повторіть пароль"
                                size='large'
                                
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" size='large'>
                                Зареєструватися
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/login'>
                            Увійти
                        </Link>
                    </Form> 
                    : 
                    <div className='auth__success-block'>
                        <div>
                            <Icon type='info-circle' theme='twoTone' />
                        </div>
                        <h2>Підтвердіть свій аккаунт</h2>
                        <p>
                            На вашу електронну адресу відправлений лист з посиланням для підтвердження аккаунта.
                        </p>
                    </div>
                }
                </ShadowBlock>
            </div>
        )
    }
}

export default RegisterForm