import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Buttons({ variant = 'primary'}: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}