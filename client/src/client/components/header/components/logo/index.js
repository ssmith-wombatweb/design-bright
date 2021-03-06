/* eslint-env browser */
// IMPORT DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, screenBreaks, globalStyle } from '../../../styleConsts';

const Logo = styled(
  ({ className }) => (
    <div className={className}>
      <Link to="/">
        <img
          srcSet={`/assets/img/logo-retina.png 580w,
                        /assets/img/logo-large.png 435w,
                        /assets/img/logo-medium.png 290w,
                        /assets/img/logo-small.png 145w`}
          sizes={`(min-width: ${screenBreaks.large}) 290px,
                        (min-width: ${screenBreaks.large}) 290px,
                        (min-with: ${screenBreaks.medium}) 90vw,
                        (min-with: ${screenBreaks.medium}) 90vw,`}
          src="/assets/img/logo-retina.png"
          alt="Design Bright Logo" />
      </Link>
    </div>
  ),
)`

align-self: flex-end;
max-width: 80%;
margin-bottom: -0.125rem;

@media screen and (min-width: ${screenBreaks.small}) {
  margin-bottom: -0.25rem;
}

  a:link {
    border: none;
    max-width: 100%;
    width: 290px;
    display: block;
    margin: 0 auto;

    @media screen and (min-width: ${screenBreaks.medium}) {
      margin: 0;
    }
    
    img {
      max-width: 100%;
      width: 290px;
    }
  }
`;

export default Logo;
