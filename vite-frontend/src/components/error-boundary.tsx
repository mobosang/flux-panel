import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
          <div className="max-w-md p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
              应用发生错误
            </h2>
            <div className="text-sm text-red-600 dark:text-red-300 mb-4">
              {this.state.error?.message}
            </div>
            <details className="text-xs text-gray-600 dark:text-gray-400">
              <summary className="cursor-pointer mb-2">详细错误信息</summary>
              <pre className="whitespace-pre-wrap">
                {this.state.error?.stack}
              </pre>
              {this.state.errorInfo && (
                <pre className="whitespace-pre-wrap mt-2">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              重新加载页面
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}