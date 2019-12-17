import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Button, ShadowBlock } from 'components'

class LoginForm extends React.Component {
    render(){
        return (
            <div>
                <ShadowBlock>
                    <div className="auth__top">
                        <h2>Увійти в обліковий запис</h2>
                        <p>Будь-ласка увійдіть в свій обліковий запис</p>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size='large'
                                
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" size='large'>
                                Увійти
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/register'>
                            Зареєструватися
                        </Link>
                    </Form>
                </ShadowBlock>
            </div>
        )
    }
}

export default LoginForm