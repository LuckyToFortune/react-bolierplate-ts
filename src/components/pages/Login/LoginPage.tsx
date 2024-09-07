import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate';
import Icon from '../../atoms/Icon';
import { LogoIcon } from '../../../assets/icons/Icons';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';
import Button from '../../molecules/Button';
import HorizontalLine from '../../atoms/HorizontalLine';
import GoogleButton from '../../molecules/GoogleButton';

const LoginPage: React.FC = () => (
  <AuthTemplate>
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center transform -translate-y-10 gap-5">
        <Icon src={LogoIcon} />
        <p>Welcome Back</p>
        <Card size="large" className="bg-gray-10 flex flex-col gap-5 p-10">
          <div>
            <h6>Email</h6>
            <Input
              type="email"
              lable="Email"
              size="login"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <h6>Password</h6>
            <Input
              type="password"
              lable="Password"
              size="login"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <Button
              text="Sign In"
              size="login"
              variant="primary"
              onClick={() => {}}
              isLoading={false}
              disabled={false}
            />
          </div>
          <p>Forgot Password</p>
          <div>
            <Button
              text="Sign Up"
              size="login"
              variant="primary"
              onClick={() => {}}
              isLoading={false}
              disabled={false}
            />
          </div>
          <HorizontalLine size="small" />
          <div>
            <GoogleButton
              variant="primary"
              size="login"
              text="Continue with Google"
              onClick={() => {}}
            />
          </div>
        </Card>
      </div>
    </div>
  </AuthTemplate>
);

export default LoginPage;
