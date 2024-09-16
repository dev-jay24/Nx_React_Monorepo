import { FomFooterDesc, FormFooter } from '../Auth.Styled';

interface IProps {
  formTitle: string;
  formDesc: string;
}
const AuthFooter = ({ formTitle, formDesc }: IProps) => {
  return (
    <FormFooter>
      {formTitle}
      <FomFooterDesc>{formDesc}</FomFooterDesc>
    </FormFooter>
  );
};

export default AuthFooter;
