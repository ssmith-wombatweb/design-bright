import styled from 'styled-components';

import { colors, screenBreaks, globalStyle } from '../styleConsts';

// globalStyle();

const buttonType = (props) => {
  if (props.primary) {
    return `
    text-shadow: ${colors.blueHydrangea} 0 0 0.25rem;
    color: #fff;
    font-size: 1.25rem;
    padding: 1rem 1.25rem;
    width: 90%;
    position: relative;

    ::after {
      content: "";
      background: url(/assets/img/blue-brush-btn.png);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-size: 100% 100%;
      position: absolute;
      z-index: -1;
      opacity: 0.75;
      transition: opacity 0.5s;
    }
    :hover::after {
      opacity: 1;
    }

    @media screen and (min-width: ${screenBreaks.medium}) {
      font-size: 1.5rem;
      width: 80%;
      max-width: 50rem;
      padding: 1.25rem 1.5rem 1.5rem;
    }
    `;
  } else if (props.secondary) {
    return `
    text-shadow: ${colors.mauiOrange} 0 0 0.25rem;
    color: #fff;
    font-size: 1.125rem;
    padding: 0.875rem 1.125rem;
    width: 80%;
    position: relative;  

    ::after {
      content: "";
      background: url(/assets/img/orange-brush-btn.png);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-size: 100% 100%;
      position: absolute;
      z-index: -1;
      opacity: 0.85;
      transition: opacity 0.5s;
    }
    :hover::after {
      opacity: 1;
    }

    @media screen and (min-width: ${screenBreaks.medium}) {
      font-size: 1.25rem;
      width: 70%;
      max-width: 45rem;
      padding: 1rem 1.25rem 1.25rem;
    }
    `;
  } else if (props.cancel) {
    return `
    margin-top: 1.25rem;
    padding: .5rem;
    color: ${colors.errorRed};
    font-size: 1rem;
    font-weight: 300;

    @media screen and (min-width: ${screenBreaks.medium}) {
      margin-top: 0;
    }
    `;
  }
  return null;
};

export const Button = styled.button`
  background-size: 100% 200%;
  font-weight: 400;
  cursor: pointer;
  appearance: none;
  border: 0;
  background-color: transparent;
  margin: 0 auto;
  display: block;
  outline: none;
  ${props => buttonType(props)}
  position: relative;

  :disabled {
    text-shadow: ${colors.graphite} 0 0 0.25rem;
    cursor: not-allowed;
    background-size: 100% 100%;
    filter: grayscale(100%);
    
    ::after {
      opacity: 0.8;
    }
    :hover::after {
      opacity: 0.8;
    }
  }
`;

export default Button;
