/* eslint-env browser */
// IMPORT DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

import { colors, screenBreaks, globalStyle } from '../../../styleConsts';
import MenuItem from './menuItem';
import Search from './search';
import UserMenu from './userMenu';

const mouseLeaveMenu = id => document.getElementById(id).classList.remove('hover');
const mouseOverMenu = (e, id) => {
  const element = document.getElementById(id);
  if (('ontouchstart' in document.documentElement)) {
    return null;
  }
  return element.classList.add('hover');
};

const onClickMenu = (e, id) => {
  const element = document.getElementById(id);
  if (('ontouchstart' in document.documentElement)) {
    if (element.classList.contains('hover')) {
      if (e.target.id !== 'search') {
        return element.classList.remove('hover');
      }
      return null;
    }
    element.classList.add('touch');
    return element.classList.add('hover');
  }

  if (element.classList.contains('hover')) {
    const targetId = e.target.id;
    if (targetId !== 'search' && targetId.indexOf('Icon') === -1) {
      return element.classList.remove('hover');
    }
    return null;
  }
};

const Menu = styled(
  ({ className }) => (
    <nav id='mainMenu' className={className}>
      <ul
        onMouseLeave={() => mouseLeaveMenu('mainMenu')}
        onClick={e => onClickMenu(e, 'mainMenu')}
      >
        <svg version="1.1" id="menuIcon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 306 306"
          style={{ enableBackground: 'new 0 0 306 306' }}
          onMouseOver={e => mouseOverMenu(e, 'mainMenu')}>
          <path className="bars" d="M249.8,90H56.2c-1.5,0-2.7-1.2-2.7-2.7V76.6c0-1.5,1.2-2.7,2.7-2.7h193.6c1.5,0,2.7,1.2,2.7,2.7v10.7C252.4,88.8,251.2,90,249.8,90z M249.8,161H56.2c-1.5,0-2.7-1.2-2.7-2.7v-10.6c0-1.5,1.2-2.7,2.7-2.7h193.6c1.5,0,2.7,1.2,2.7,2.7v10.6C252.4,159.8,251.2,161,249.8,161z M249.8,232H56.2c-1.5,0-2.7-1.2-2.7-2.7v-10.7c0-1.5,1.2-2.7,2.7-2.7h193.6c1.5,0,2.7,1.2,2.7,2.7v10.7C252.4,230.8,251.2,232,249.8,232z" />
          <path className="close" d="M166.1,153l70.6-70.6c2.4-2.4,2.4-6.3,0-8.7l-4.4-4.4c-2.4-2.4-6.3-2.4-8.7,0L153,139.9L82.4,69.4c-2.4-2.4-6.3-2.4-8.7,0l-4.4,4.4c-2.4,2.4-2.4,6.3,0,8.7l70.6,70.5l-70.5,70.6c-2.4,2.4-2.4,6.3,0,8.7l4.4,4.4c2.4,2.4,6.3,2.4,8.7,0l70.5-70.6l70.6,70.6c2.4,2.4,6.3,2.4,8.7,0l4.4-4.4c2.4-2.4,2.4-6.3,0-8.7L166.1,153z" />
        </svg>
        <div>
          <li><MenuItem linkURL="/campaigns/browse" linkName="Explore" /></li>
          <li><Search /></li>
          <li>
            <UserMenu mouseLeaveMenu={mouseLeaveMenu} mouseOverMenu={mouseOverMenu} onClickMenu={onClickMenu} />
          </li>
        </div>
      </ul>
    </nav>
  ),
) `
align-self: flex-end;
position: relative;
min-width: 40px;
margin-bottom: 0.5rem;

@media screen and (min-width: ${screenBreaks.medium}) {
  width: 50%;
}

&.hover {
  > ul {
    @media screen and (max-width: ${screenBreaks.medium}) {
      outline: none;
      > svg#menuIcon {
        background-color: ${colors.brightGraphite};
        
        .bars {
          fill: white;
        }
      }

      > div  {
        max-height: 300px;
        padding-bottom: 1rem;
      }
    }
  }

  &.touch {
    > ul {
      @media screen and (max-width: ${screenBreaks.medium}) {
        > svg#menuIcon {
          .bars {
            opacity: 0;
          }
          .close {
            opacity: 1;
          }
        }
      }
    }
  }
}

> ul {
  > svg#menuIcon {
      display: inline-block;
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 0.3rem;
      transition: background-color 0.5s;
      transition-timing-function: ease-in-out;
      cursor: pointer;

      > * {
        pointer-events: none;
      }

      .bars {
        opacity: 1;
        fill: ${colors.lightGraphite};
        transition: opacity 0.5s;
        transition-timing-function: ease-in-out;
      }

      .close {
        opacity: 0;
        fill: white;
        transition: opacity 0.5s;
        transition-timing-function: ease-in-out;
      }

      @media screen and (min-width: ${screenBreaks.small}) {
        width: 2.5rem;
        height: 2.5rem;
      }

    @media screen and (min-width: ${screenBreaks.medium}) {
      display: none;
    }
  }

  > div {
    padding-top: calc((2.125rem) - 0.5rem);

    @media screen and (max-width: ${screenBreaks.medium}) {
      position: absolute;
      width: 100vw;
      right: -1.125rem;
      max-height: 0;
      transition: max-height 1s, padding 1s;
      transition-timing-function: ease-in-out;
      overflow: hidden;
    }

    > li {
      font-size: 1.5rem;
      line-height: 1.625rem;
      font-weight: 300;
      display: block;
      background-color: ${colors.brightGraphite};
      
      @media screen and (min-width: ${screenBreaks.medium}) {
        background-color: transparent;
        display: inline-block;
        text-align: center;
      }
    }

    @media screen and (min-width: ${screenBreaks.medium}) {
      height: auto;
      display: flex;
      justify-content: space-between;
      display: flex;
    }
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;

  a:link, a:visited {
    color: white;
    border: none;

    @media screen and (min-width: ${screenBreaks.medium}) {
      color: ${colors.lightGraphite};
  
      &:hover {
        color: ${colors.graphite};
      }
    }
  }
}
`;

export default Menu;
