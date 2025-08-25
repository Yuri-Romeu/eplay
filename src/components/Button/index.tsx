import { ButtonContainer, ButtonLink } from './styles';

type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onclick?: () => void;
  children: string;
};

const Button = ({ type, title, children, onclick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onclick}>
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  );
};

export default Button;
