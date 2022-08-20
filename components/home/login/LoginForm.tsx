import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { signInGoogle } from '../../../apis/auth';
import FormInput from './FormInput';
import { FaSeedling } from 'react-icons/fa';
import { COLORS } from '../../../styles/palette';

const LoginForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Heading>
          Welcome AimEco
          <FaSeedling />
        </Heading>
        <FormInput label="아이디" name="id" type="text" />
        <FormInput label="비밀번호" name="password" type="password" />
        <CustomButton onClick={signInGoogle} variant="contained">
          <Image src="images/google-icon.png" alt="google logo" />
          구글로 로그인하기
        </CustomButton>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    color: ${COLORS.lightGreen};
  }
`;

const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 1rem;
  gap: 2rem;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

const CustomButton = styled(Button)`
  font-family: NotoSans;
`;
