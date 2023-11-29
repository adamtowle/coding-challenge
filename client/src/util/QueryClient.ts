import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const queryClient = new QueryClient();

const createClient = (configOptions?: QueryClientConfig) => {
    queryClient.setDefaultOptions({ ...configOptions, queries: { retry: 3 }});
    return queryClient;
}

const getClient = () => queryClient;

export { getClient };
export default createClient;