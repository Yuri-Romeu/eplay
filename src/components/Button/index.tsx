import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onclick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
};

const Button = ({
  type,
  title,
  children,
  onclick,
  to,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onclick}
      >
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
