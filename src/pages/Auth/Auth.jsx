import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Button, ShadowBlock } from '../../components/components'
import './Auth.scss'

class Auth extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <section className='Auth'>
                <div className="Auth__content">
                    <div className="Auth__top">
                        <h2>Увійти в обліковий запис</h2>
                        <p>Будь ласка, увійдіть в свій обліковий запис</p>
                    </div>
                    <ShadowBlock className>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item hasFeedback>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                size='large'
                                />,
                            )}
                            </Form.Item>
                            <Form.Item hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size='large'
                                />,
                            )}
                            </Form.Item>

                            <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button button" size='large'>
                                Увійти
                            </Button>
                            </Form.Item>

                            <a href="1213" className='Auth__register-link'>Зареєструватися</a>
                        </Form>
                    </ShadowBlock>
                </div>
            </section>
        )
    }
}

    

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Auth)

export default WrappedNormalLoginForm