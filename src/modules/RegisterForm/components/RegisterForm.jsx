import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Button, ShadowBlock } from 'components'

const success = false;

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
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
                            !touched.fullname ? '' : errors.fullname ? 'error' : 'success' 
                        } 
                        help = {!touched.fullname ? '' : errors.fullname}
                        hasFeedback
                    >
                        <Input
                            id='fullname'
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Ім'я"
                            size='large'
                            value={values.fullname}
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
                            id='password'
                            type='password'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Пароль"
                            size='large'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus = {
                            !touched.passwordRepeat ? '' : errors.passwordRepeat ? 'error' : 'success' 
                        } 
                        help = {!touched.passwordRepeat ? '' : errors.passwordRepeat}
                        hasFeedback
                    >
                        <Input
                            id='passwordRepeat'
                            type='password'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Пароль"
                            size='large'
                            value={values.passwordRepeat}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={handleSubmit} className="login-form-button" size='large'>
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

export default RegisterForm