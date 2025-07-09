import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.theme.sizes.gridColumnWidth}, 1fr)
  );
  padding: ${(props) => props.theme.sizes.padding.boardContainer};
  gap: ${(props) => props.theme.sizes.gap};
  min-height: calc(100vh - 100px);
  align-items: start;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(
      5,
      minmax(${(props) => props.theme.sizes.gridColumnWidth}, 1fr)
    );
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) and (max-width: ${(props) =>props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(
      4,
      minmax(${(props) => props.theme.sizes.gridColumnWidth}, 1fr)
    );
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) and (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(
      3,
      minmax(${(props) => props.theme.sizes.gridColumnWidth}, 1fr)
    );
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(
      2,
      minmax(${(props) => props.theme.sizes.gridColumnWidth}, 1fr)
    );
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.sizes.padding.boardHeader};
  margin-bottom: ${(props) => props.theme.sizes.gap};
  background-color: ${(props) => props.theme.colors.boardHeaderBack};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;

export const BoardTitle = styled.h1`
  font-size: ${(props) => props.theme.typography.boardTitle.fontSize};
  font-weight: ${(props) => props.theme.typography.boardTitle.fontWeight};
  color: ${(props) => props.theme.colors.boardTitle};
  font-family: ${(props) => props.theme.typography.boardTitle.fontFamily};
  margin: 0;
`;

export const ThemeToggleButton = styled.button<{ isDark: boolean }>`
  padding: 8px 12px;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.colors.boardHeaderBack
      : props.theme.colors.boardHeaderBack};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius.medium};
  cursor: pointer;
  font-size: 16px;
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.gap};
`;
