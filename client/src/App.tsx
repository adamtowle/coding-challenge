import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainContainer from "./notes/MainContainer";
import createClient from "./util/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Create the query client for data fetching/mutations
createClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={createClient()}>
				<ChakraProvider>
					<Routes>
						<Route path="/" element={<MainContainer />}  />
					</Routes>
				</ChakraProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
