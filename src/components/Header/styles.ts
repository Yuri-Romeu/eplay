import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin: 0;
  }
`;
export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    &.is-open {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
  }
`;

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    a {
      text-align: center;
      display: block;
      padding: 16px 0;
    }
  }
`;

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;

export const Hamburger = styled.div`
  width: 32px;
  cursor: pointer;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
