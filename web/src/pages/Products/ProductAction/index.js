import React from 'react';

import {
  Container,
  TypeProduct,
  Row,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  Actions,
  Button,
} from './styles';

const ProductAction = () => {
  return (
    <Container>
      <TypeProduct>Casual</TypeProduct>

      <Row>
        <h1>Tênis Nike Air Max 90 20 Masculino</h1>
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span>R$439,99</span>
        </PriceRow>

        <InstallmentsInfo>ou até 10x sem juros</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponivel</StockStatus>

      <Actions>
        <Button className="solid">Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>
    </Container>
  );
};

export default ProductAction;
