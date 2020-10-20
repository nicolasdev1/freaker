import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 32px 32px 32px;
  max-width: 426px;
  display: flex;
  flex-direction: column;
`;

export const TypeProduct = styled.div`
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 400;
  }
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background: #000000;
  color: #ffffff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 20px;
  font-weight: bold;
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;

  .solid {
    color: #ffffff;
    background: #111111;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  border-radius: 30px;
  padding: 20px 0 20px 0;
  margin-top: 10px;

  background: #ffffff;
  color: #000000;
  border: 1px solid #d3d3d3;
  cursor: pointer;
  outline: 0;
`;
