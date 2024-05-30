'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

export function Providers({ children }: { children: JSX.Element }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
