import { FormHeader } from '../Auth.Styled';

interface IProps {
  formTitle: string;
}
const AuthHeader = ({ formTitle }: IProps) => {
  return <FormHeader>{formTitle}</FormHeader>;
};

export default AuthHeader;
