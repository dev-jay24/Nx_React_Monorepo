import {
  AuthLayout,
  BackIcon,
  Meta,
  RenderTextInput,
} from '@msr-monorepo/shared-components';
import { BackBtn, FormTitle } from '../Auth.Styled';
import AuthHeader from '../components/AuthHeaders';
import { Button, Col, Form, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Regex, ROUTES } from '@msr-monorepo/shared-utils';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  return (
    <>
      <Meta title="Forgot Password" />
      <AuthLayout>
        <FormTitle>Forgot Password</FormTitle>
        <AuthHeader formTitle=" Enter email address and you will receive reset instructions." />
        <Form
          // onFinish={onSubmit}
          // form={form}
          autoComplete="off"
          className="forgotPwdForm"
        >
          <Row gutter={[0, 30]}>
            <RenderTextInput
              col={{ xs: 24 }}
              name="email"
              prefix={<UserOutlined />}
              placeholder="Enter Your Email"
              allowClear={true}
              size="large"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email',
                },
                {
                  pattern: Regex.EMAIL,
                  message: 'Please enter valid email',
                },
              ]}
            />
            <Col xs={24} className="text-center">
              <Button
                // loading={isLoading}
                block={true}
                type="primary"
                size="large"
                htmlType="submit"
                className="mt-30 fontMd"
              >
                Send Link
              </Button>
            </Col>
            <Col xs={24} className="text-right">
              <Link to={ROUTES.signIn} className="noDecoration">
                <BackBtn>
                  <span>
                    <BackIcon />
                  </span>
                  Back to Sign In
                </BackBtn>
              </Link>
            </Col>
          </Row>
        </Form>
      </AuthLayout>
    </>
  );
}

export default ForgotPassword;
