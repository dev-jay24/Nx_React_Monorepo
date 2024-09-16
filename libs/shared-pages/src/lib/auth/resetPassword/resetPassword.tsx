import {
  AuthLayout,
  Button,
  Meta,
  RenderPasswordInput,
} from '@msr-monorepo/shared-components';
import { FormTitle } from '../Auth.Styled';
import AuthHeader from '../components/AuthHeaders';
import { Col, Form, Row } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Regex, VALIDATION_MSG } from '@msr-monorepo/shared-utils';

export function ResetPassword() {
  return (
    <>
      <Meta title="Reset Password" />
      <AuthLayout>
        <FormTitle>Reset Password</FormTitle>
        <AuthHeader formTitle="Enter your new password" />
        <Form
          // onFinish={onSubmit}
          // form={form}
          autoComplete="off"
          className="signInForm"
        >
          <Row gutter={[0, 20]}>
            <RenderPasswordInput
              col={{ xs: 24 }}
              name="password"
              required={true}
              placeholder="Enter New Password"
              type="password"
              size="middle"
              prefix={<LockOutlined />}
              rules={[
                () => ({
                  validator: (_: any, value: string) => {
                    if (!value) {
                      return Promise.reject(
                        new Error(VALIDATION_MSG.required('new password'))
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
            <RenderPasswordInput
              col={{ xs: 24 }}
              name="confirm_password"
              required={true}
              placeholder="Enter Confirm Password"
              type="password"
              size="middle"
              prefix={<LockOutlined />}
              rules={[
                {
                  required: true,
                  message: VALIDATION_MSG.required('confirm password'),
                },
                ({ getFieldValue }: any) => ({
                  validator(_: any, value: string) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        `Confirm password doesn't match with new password`
                      )
                    );
                  },
                }),
              ]}
            />
            <Col xs={24} className="text-center1">
              <Button
                // loading={loading}
                block={true}
                type="primary"
                size="large"
                htmlType="submit"
                className="mt-30 fontMd"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </AuthLayout>
    </>
  );
}

export default ResetPassword;
