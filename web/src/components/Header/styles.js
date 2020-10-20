import styled, { css } from 'styled-components';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BsMoon } from 'react-icons/bs';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background: #ffffff;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  max-width: 1280px;
  height: 100%;

  margin: 0 auto;
  padding: 0 25px;
`;

export const ContentLeft = styled.div`
  h1 {
    color: #0e0e0e;
  }
`;

export const ContentCenter = styled.div`
  display: flex;

  h1 {
    color: #313131;
  }

  img {
    margin-left: 10px;
  }
`;

export const ContentRight = styled.div`
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  fill: #8d8d8d;
`;

export const IconMoon = styled(BsMoon)`
  ${iconCSS}
`;

export const IconShopping = styled(RiShoppingCart2Line)`
  ${iconCSS}
`;

export const WrapperBar = styled.div`
  width: 100%;

  background: #f7f7f7;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

export const Main = styled.div`
  padding: 15px;

  max-width: 700px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #313131;
  }
`;
