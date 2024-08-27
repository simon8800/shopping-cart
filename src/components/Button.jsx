import styled from "styled-components";

const buttonStyles = {
  default: {
    background: '#3498DB',
    color: '#ffffff',
    border: '#3498DB',
    hoverBackground: '#2591d9',
    hoverBorder: '#2591d9',
  },
  primary: {
    background: '#007bff',
    color: '#ffffff',
    border: '#007bff',
    hoverBackground: '#0056b3',
    hoverBorder: '#0056b3',
  },
  secondary: {
    background: '#6c757d',
    color: '#ffffff',
    border: '#6c757d',
    hoverBackground: '#5a6268',
    hoverBorder: '#545b62',
  },
  success: {
    background: '#28a745',
    color: '#ffffff',
    border: '#28a745',
    hoverBackground: '#218838',
    hoverBorder: '#1e7e34',
  },
  danger: {
    background: '#dc3545',
    color: '#ffffff',
    border: '#dc3545',
    hoverBackground: '#c82333',
    hoverBorder: '#bd2130',
  },
  warning: {
    background: '#ffc107',
    color: '#212529',
    border: '#ffc107',
    hoverBackground: '#e0a800',
    hoverBorder: '#d39e00',
  },
};

const Button = styled.button`
  color: ${props => (props.$variation ? buttonStyles[props.$variation].color: buttonStyles.default.color)};;
  background: ${props => (props.$variation ? buttonStyles[props.$variation].background: buttonStyles.default.background)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => (props.$variation ? buttonStyles[props.$variation].border: buttonStyles.default.border)};;
  border-radius: 3px;
  cursor: pointer;
  text-style: normal;
  text-decoration: none;
  transition: background-color 0.3s ease, border 0.3s ease;

  &:hover {
    background: ${props => (props.$variation ? buttonStyles[props.$variation].hoverBackground: buttonStyles.default.hoverBackground)};;
    border-color: ${props => (props.$variation ? buttonStyles[props.$variation].hoverColor: buttonStyles.default.hoverColor)};;
  }
`;

export default Button;