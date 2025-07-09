import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      globalBackground: string;
      toDo: string;
      inProgress: string;
      done: string;
      boardHeaderBack: string;
      boardTitle: string;
      textSecondary: string;
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
      formText: string;
      formTitle: string;
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
      taskCounterBg: string;
      addTaskButtonHover: string;
      inputBackground: string;
      priorityHighBg: string;
      priorityHighText: string;
      priorityMediumBg: string;
      priorityMediumText: string;
      priorityLowBg: string;
      priorityLowText: string;
      taskCardBackground: string;
      taskTitle: string;
      taskDescription: string;
      saveButton: string;
      saveButtonHover: string;
      deleteButtonDanger: string;
      deleteButtonDangerHover: string;
    };
    sizes: {
      gridColumnWidth: string;
      padding: {
        boardContainer: string;
        boardHeader: string;
        form: string;
        button: string;
        input: string;
      };
      gap: string;
      borderRadius: {
        small: string;
        medium: string;
        large: string;
        circle: string;
      };
      icon: {
        small: string;
        medium: string;
      };
      form: {
        gapSmall: string;
        gapMedium: string;
        borderRadiusFull: string;
      };
      column: {
        width: string;
        padding: string;
        margin: string;
        borderRadius: string;
      };
      title: {
        borderRadius: string;
        padding: string;
      };
      taskCounter: {
        width: string;
        height: string;
        borderRadius: string;
      };
      taskCard: {
        borderRadius: string;
        padding: string;
        marginBottom: string;
      };
      priorityLabel: {
        padding: string;
        borderRadius: string;
        marginBottom: string;
      };
      editForm: {
        padding: string;
        borderRadius: string;
        gap: string;
      };
      input: {
        padding: string;
        borderRadius: string;
      };
      textarea: {
        minHeight: string;
      };
      select: {
        width: string;
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
      boardTitle: {
        fontSize: string;
        fontWeight: number;
        fontFamily: string;
      };
      tittle: {
        fontWeight: number;
      };
      button: {
        fontSize: string;
        fontWeight: number;
        fontFamily: string;
      };
      input: {
        fontSize: string;
        fontFamily: string;
      };
      label: {
        fontSize: string;
        fontFamily: string;
      };
      formTitle: {
        fontSize: string;
        fontWeight: number;
        fontFamily: string;
      };
      formText: {
        fontSize: string;
        fontWeight: number;
        fontFamily: string;
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
