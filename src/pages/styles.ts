import styled, { css, DefaultTheme } from 'styled-components';

interface ThemeProps {
  theme: DefaultTheme;
}

interface ThemeToggleProps extends ThemeProps {
  isDark: boolean;
}

export const BoardContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${theme.sizes.components.gridColumn}, 1fr)
    );
    padding: ${theme.sizes.spacing.xl};
    gap: ${theme.sizes.spacing.lg};
    min-height: calc(100vh - 100px);
    align-items: start;

    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: repeat(
        5,
        minmax(${theme.sizes.components.gridColumn}, 1fr)
      );
    }

    @media (min-width: ${theme.breakpoints.laptop}) and (max-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: repeat(
        4,
        minmax(${theme.sizes.components.gridColumn}, 1fr)
      );
    }

    @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: repeat(
        3,
        minmax(${theme.sizes.components.gridColumn}, 1fr)
      );
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: repeat(
        2,
        minmax(${theme.sizes.components.gridColumn}, 1fr)
      );
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
      place-items: center;
    }
  `}
`;

export const BoardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.sizes.spacing.xxl};
    margin-bottom: ${theme.sizes.spacing.lg};
    background-color: ${theme.colors.boardHeaderBack};
    border-radius: ${theme.sizes.radius.md};
  `}
`;

export const BoardTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xxl};
    font-weight: ${theme.typography.fontWeight.extraBold};
    color: ${theme.colors.darkSlate};
    font-family: ${theme.typography.fontFamily};
    margin: 0;
  `}
`;

export const ThemeToggleButton = styled.button<ThemeToggleProps>`
  ${({ theme, isDark }) => css`
    padding: ${theme.sizes.padding.sm};
    background-color: ${theme.colors.boardHeaderBack};
    color: white;
    border: none;
    border-radius: ${theme.sizes.radius.md};
    cursor: pointer;
    font-size: ${theme.typography.fontSize.md};
    transition: ${theme.transitions.default};

    &:hover {
      opacity: 0.8;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.spacing.lg};
  `}
`;