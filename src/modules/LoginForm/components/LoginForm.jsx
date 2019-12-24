import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Button, ShadowBlock } from 'components'

const LoginForm = props => {
    
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = props
        
    return (
        <div>
            <ShadowBlock>
                <div className="auth__top">
                    <h2>Увійти в обліковий запис</h2>
                    <p>Будь-ласка увійдіть в свій обліковий запис</p>
                </div>
                <Form onSubmit={props.handleSubmit} className="login-form">
                <Form.Item 
                    validateStatus = {
                        !touched.email ? '' : errors.email ? 'error' : 'success' 
                    } 
                    help = {!touched.email ? '' : errors.email}
                    hasFeedback
                >
                    <Input
                        id='email'
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Електронна пошта"
                        size='large'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                
                <Form.Item 
                    validateStatus = {
                        !touched.password ? '' : errors.password ? 'error' : 'success' 
                    } 
                    help = {!touched.password ? '' : errors.password}
                    hasFeedback
                >
                    <Input
                        type='password'
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Пароль"
                        size='large'
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" onClick={handleSubmit} className="login-form-button" size='large'>
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

export default LoginForm