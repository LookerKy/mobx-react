import styled from 'styled-components';

export const SuperMarketTemplate = styled.div`
  width: 768px;
  display: flex;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  h2 {
    margin-top: 0;
  }
  > div {
    padding: 1rem;
    flex: 1;
  }
  .items-wrapper {
    background: #f8f9fa;
  }
`;
