import { DefaultTheme } from 'styled-components';
export const lightTheme = {
  colors: {
    globalBackground: '#ffffff',
    forText: '#ffffff',
    toDo: '#4F46E5',
    inProgress: '#F59E0B',
    done: '#22C55E',
    boardHeaderBack: '#f8fafc',
    darkSlate: '#1e293b',
    slateGray: '#475569',
    border: '#94a3b8',
    borderHover: '#94a3b8',
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    secondary: '#f1f5f9',
    secondaryHover: '#e2e8f0',
    inputBorder: '#e2e8f0',
    inputFocusBorder: '#94a3b8',
    inputFocusShadow: '#dcdafa',
    darkGray: '#333',
    danger: '#ef4444',
    dangerHover: '#dc2626',
    success: '#2563eb',
    successHover: '#1d4ed8',
    priorityBg: '#eef2ff',
    selectArrow: '#000000',
    selectFocus: '#c7d2fe',
    placeholder: '#1e293b',
    columnBackground: '#f8fafc',
    deleteButton: '#666',
    deleteButtonHover: '#ff0000',
    addTaskButtonHover: 'transparent',
    priorityHighBg: '#ffebee', 
    priorityHighText: '#C62828',
    priorityMediumBg: '#FFF8E1',
    priorityMediumText: '#F57F17',
    priorityLowBg: '#E8F5E9',
    priorityLowText: '#2E7D32',
    taskTitle: '#1e293b',
    saveButton: '#4caf50',
    saveButtonHover: '#45a049',
    deleteButtonDanger: '#bb2706',
    deleteButtonDangerHover: '#d16e58',
  },
  sizes: {
    unit: '4px',
  spacing: {
    xs: '4px',
    pt: '5px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px'
  },
  
  components: {
    gridColumn: '250px',
    column: '280px',
    input: '120px',
    textarea: '80px',
    taskCount: '33px',
    columnForty: '40px',
    columnThirty: '30px',
    line: '1.6',
    transform: '0.98'
  },
  
  padding: {
    xxs: '0 8px',
    xs: '4px 8px',   
    sm: '8px 12px',
    smr: '12px 8px',
    av: '8px 16px',
    bta: '10px 12px',    
    md: '12px 16px',   
    lg: '16px 24px', 
    full: '12px'       
  },
  radius: {
    xs: '4px',      
    sm: '6px',      
    md: '8px',      
    lg: '12px',     
    xl: '16px',
    xxl:'24px',     
    pill: '9999px', 
    full: '1234px'  
  },
  
  icon: {
    sm: '18px',
    md: '20px',
    lg: '24px'
  }
  },
  breakpoints: {
    mobile: '760px',
    tablet: '980px',
    laptop: '1200px',
    desktop: '1600px',
    large: '1920px',
  },
  typography: {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: {
    xs: '12px',    
    sm: '14px',    
    md: '16px',    
    lg: '20px',    
    xl: '24px',    
    xxl: '30px'    
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  }
  },
  shadows: {
    small: '0 2px 4px #e6e6e6',
    medium: '0 4px 6px #e6e6e6',
  },
  transitions: {
    default: 'all 0.2s',
  },
} as DefaultTheme;

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    boardHeaderBack: '#1a1a2e',
    boardTitle: '#ffffff',
    textSecondary: '#a8a8a8',
    formBackground: '#16213e',
    formTitle: '#ffffff',
    columnBackground: '#1a1a2e',
    taskCardBackground: '#16213e',
    taskTitle: '#ffffff',
    taskDescription: '#e6e6e6',
    inputBackground: '#0f3460',
    inputBorder: '#2d3748',
    placeholder: '#a0aec0',
    globalBackground: '#121212',
    darkSlate: '#ffffff'
  },
  shadows:{
    small: '0 2px 4px #262424',
    medium: '0 4px 6px #262424',
  },
} as DefaultTheme;

export type ThemeColors = typeof lightTheme.colors;
