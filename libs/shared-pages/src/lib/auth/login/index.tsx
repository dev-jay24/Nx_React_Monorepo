import {
  AuthLayout,
  Meta,
  RenderPasswordInput,
  RenderTextInput,
} from '@msr-monorepo/shared-components';
import { Button, Checkbox, Col, Form, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Regex, ROUTES, VALIDATION_MSG } from '@msr-monorepo/shared-utils';
import { Link } from 'react-router-dom';
import AuthHeader from '../components/AuthHeaders';
import { FormTitle } from '../Auth.Styled';

export function LoginPage({
  onSubmit,
  form,
  rememberMe,
  setRememberMe,
  loading,
}: any) {
  return (
    <>
      <Meta title="Sign In" />
      <AuthLayout>
        <FormTitle>Sign In</FormTitle>
        <AuthHeader formTitle="Enter your registered email id and password." />
        <Form
          onFinish={onSubmit}
          form={form}
          autoComplete="off"
          className="signInForm"
        >
          <Row gutter={[0, 20]}>
            <RenderTextInput
              col={{ xs: 24 }}
              name="email"
              placeholder="Enter Email"
              // label="Email ID"
              allowClear={true}
              size="large"
              prefix={<UserOutlined />}
              rules={[
                {
                  required: true,
                  message: VALIDATION_MSG.required('email'),
                },
                {
                  pattern: Regex.EMAIL,
                  message: VALIDATION_MSG.valid('email'),
                },
              ]}
            />
            <RenderPasswordInput
              col={{ xs: 24 }}
              name="password"
              required={true}
              placeholder="Enter Password"
              type="password"
              size="middle"
              prefix={<LockOutlined />}
              rules={[
                () => ({
                  validator: (_: any, value: string) => {
                    if (!value) {
                      return Promise.reject(
                        new Error(VALIDATION_MSG.required('password'))
                      );
                    } else if (
                      Regex.PASSWORD_REG.test(value) &&
                      /^.{6,16}$/.test(value)
                    ) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error(VALIDATION_MSG.invalidPassword())
                      );
                    }
                  },
                }),
              ]}
            />
            <Col xl={24}>
              <Form.Item>
                <div className="align-items-center justify-content-between d-flex w-full">
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  >
                    <span className="checkbox-text">Remember Me</span>
                  </Checkbox>
                  <Link to={ROUTES.forgotPassword} className="forgot-link ">
                    Forgot Password?
                  </Link>
                </div>
              </Form.Item>
            </Col>
            <Col xs={24} className="text-center">
              <Button
                loading={loading}
                block={true}
                type="primary"
                size="large"
                htmlType="submit"
                className="fontMd"
              >
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </AuthLayout>
    </>
  );
}

export default LoginPage;
