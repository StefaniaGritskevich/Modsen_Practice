import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      globalBackground: string;
      toDo: string;
      inProgress: string;
      done: string;
      boardHeaderBack: string;
      darkSlate: string;
      slateGray: string;
      border: string;
      borderHover: string;
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
      formBackground: string;
      inputBorder: string;
      inputFocusBorder: string;
      inputFocusShadow: string;
      buttonText: string;
      darkGray: string;
      danger: string;
      dangerHover: string;
      success: string;
      successHover: string;
      priorityBg: string;
      selectArrow: string;
      selectFocus: string;
      placeholder: string;
      columnBackground: string;
      deleteButton: string;
      deleteButtonHover: string;
      addTaskButtonHover: string;
      priorityHighBg: string;
      priorityHighText: string;
      priorityMediumBg: string;
      priorityMediumText: string;
      priorityLowBg: string;
      priorityLowText: string;
      taskTitle: string;
      saveButton: string;
      saveButtonHover: string;
      deleteButtonDanger: string;
      deleteButtonDangerHover: string;
    };
    sizes: {
      unit: string;
  spacing: {
    xs: string;
    pt: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  components: {
    gridColumn: string;
    column: string;
    input: string;
    textarea: string;
    taskCount: string;
    columnForty: string;
    columnThirty: string;
    line: string;
    transform:string;
  };
  padding: {
    xxs: string;
    xs: string;
    sm: string;
    smr:string;
    av: string;
    bta: string;
    md: string;
    lg: string;
    full: string;
  };
  radius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    pill: string;
    full: string;
  };
  icon: {
    sm: string;
    md: string;
    lg: string;
  };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
      large: string;
    };
    typography: {
     fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  };
    };
    shadows: {
      small: string;
      medium: string;
    };
    transitions: {
      default: string;
    };
  }
}
