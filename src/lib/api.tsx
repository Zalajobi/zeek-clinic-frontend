// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactNode } from "react";
//
// const QueryClientProviderWrapper = ({children}:{children:ReactNode}) => {
//     const queryClient = new QueryClient()
//
//     return (
//         <QueryClientProvider client={queryClient}>
//             {children}
//         </QueryClientProvider>
//     )
// }
//
// export default QueryClientProviderWrapper

// api.js
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

const QueryClientProviderWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryClientProviderWrapper;
