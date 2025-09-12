import * as S from './styles';

export type Props = {
  type: 'button' | 'link' | 'submit';
  title: string;
  to?: string;
  onclick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button = ({
  type,
  title,
  children,
  onclick,
  disabled,
  to,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onclick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    );
  }

  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
