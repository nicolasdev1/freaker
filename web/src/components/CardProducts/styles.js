import styled from 'styled-components'

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  margin-top: 40px;
`

export const CardItem = styled.div`
  .selected {
    background: #2e2e2e;
    border: 4px solid #e04e5b;
  }

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  border: 1px solid #dcdcdc;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  height: 250px;
  padding-bottom: 8px;

  img {
    background: #ffffff;
    text-decoration: none;
    transition: 200ms;
    overflow: hidden;

    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    cursor: pointer;

    flex-shrink: 0;

    margin: 0 auto;
    object-fit: cover;

    max-width:300px;
    max-height:147px;
    min-height:147px;
    min-width:300px;
    width: 100%;
    height: auto;
  }

  span {
    margin-top: 10px;
    padding: 8px 8px 8px 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
  }
`

export const Price = styled.div`
  margin-top: 10px;
  font-weight: bold;

  span {
    font-size: 16px;
  }
`
