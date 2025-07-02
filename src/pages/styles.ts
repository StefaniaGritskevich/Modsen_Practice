import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  padding: 24px;
  gap: 16px;
  overflow-x: auto;
  min-height: calc(100vh - 100px);
  align-items: flex-start;
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