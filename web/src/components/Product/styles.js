import styled from 'styled-components'

export const Wrapper = styled.div`
  border: ${({ selected }) => selected ? '3px solid #e04e5b' : '3px solid transparent'};
  border-radius: 11px;

  user-select: none;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;

  border: ${({ selected }) => selected ? '0px solid transparent' : '1px solid #d3d3d3'};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  height: 300px;
  padding-bottom: 8px;

  img {
    text-decoration: none;
    transition: 200ms;
    overflow: hidden;

    flex-shrink: 0;

    margin: 0 auto;
    object-fit: cover;

    max-width: 100%;
    max-height: 50%;
    min-height: 50%;
    min-width: 300px;
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
