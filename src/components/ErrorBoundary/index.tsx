import React, { ErrorInfo, ReactNode } from 'react';

import { ErrorContainer, ErrorMessage, RetryButton } from './styles';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackComponent?: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallbackComponent || (
          <ErrorContainer>
            <ErrorMessage>
              An Error Has Occured. {this.state.error?.message}
            </ErrorMessage>
            <RetryButton onClick={() => this.setState({ hasError: false })}>
              Reload
            </RetryButton>
          </ErrorContainer>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
