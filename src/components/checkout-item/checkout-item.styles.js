import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

const commonWidthStyles = css`
  width: 23%;
`

export const ImageContainer = styled.div`
  ${commonWidthStyles};
  padding-right: 15px;
  img {
      width: 100%;
      height: 100%;
  }
`

export const Name = styled.div`
  ${commonWidthStyles};
`

export const Price = styled.div`
  ${commonWidthStyles};
`

export const Quantity = styled.span`
  ${commonWidthStyles};
  display: flex;
    .arrow {
      cursor: pointer;
    }
    .value {
      margin: 0 10px;
    }
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`




