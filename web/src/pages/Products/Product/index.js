import React from 'react'

import ProductAction from '../ProductAction'
import Header from '../../../components/Header'

import {
  Container,
  Wrapper,
  Content,
  Panel,
  Column,
  Gallery,
  Description
} from './styles'

const Product = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Content>
            <Panel>
              <Column>
                <Gallery>
                  <div>
                    <img src="/images/product.jpg" alt="Product" />
                  </div>
                  <div>
                    <img src="/images/product.jpg" alt="Product" />
                  </div>
                  <div>
                    <img src="/images/product.jpg" alt="Product" />
                  </div>
                  <div>
                    <img src="/images/product.jpg" alt="Product" />
                  </div>
                  <div>
                    <img src="/images/product.jpg" alt="Product" />
                  </div>
                  <div>
                    <img src="/images/product.jpg" alt="Product" />
                  </div>
                </Gallery>
              </Column>

              <Column>
                <ProductAction />
                <Info />
              </Column>
            </Panel>
          </Content>
        </Wrapper>
      </Container>
    </>
  )
}

const Info = () => (
  <Description>
    <b>ESTILO ICÔNICO. E ARRASA.</b>

    <p>
      O Nike Air Max 90 20 atualiza um clássico com detalhes iridescentes e
      amortecimento Max Air para conforto o dia todo e sola de borracha sólida
      para tração.
    </p>
    <br />
    <br />
    <b>Benefícios</b>
    <p>
      A unidade de Max Air no calcanhar oferece amortecimento. A gola acolchoada
      adiciona conforto ao redor do tornozelo. A sola de borracha sólida
      maximiza a tração, mas ainda é leve.
    </p>
  </Description>
)

export default Product
