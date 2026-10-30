import React from 'react';

interface SuspenseLoaderProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

export const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({ children, fallback }) => {
  return (
    <React.Suspense
      fallback={
        fallback || (
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '200px',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: '2px solid var(--border-color)',
                  borderTopColor: 'var(--accent-primary)',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
              <span>Carregando módulo...</span>
            </div>
          </div>
        )
      }
    >
      {children}
    </React.Suspense>
  );
};

