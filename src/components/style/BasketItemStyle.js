import styled from 'styled-components';

export const BasketItemWrapper = styled.div`
  display: flex;
  width: 100%;
  .name {
    flex: 2;
  }
  .price {
    flex: 1;
  }
  .count {
    flex: 1;
  }
  .return {
    margin-left: auto;
    color: #f06595;
    cursor: pointer;
  }
  .return:hover {
    text-decoration: underline;
  }
  & + & {
    margin-top: 1rem;
  }
`;
