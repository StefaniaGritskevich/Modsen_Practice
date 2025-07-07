import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 24px;
  gap: 16px;
  min-height: calc(100vh - 100px);
  align-items: start;

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, minmax(250px, 1fr));
  }

  @media (min-width: 1200px) and (max-width: 1599px) {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }

  @media (min-width: 980px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (min-width: 761px) and (max-width: 979px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    place-items:center; 

  }
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:35px;
  margin-bottom: 16px;
  background-color: #F8FAFC;
`;

export const BoardTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #1e293b;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
`;