import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavigationContextProvider } from "../public/context/navigationContext";
import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store, persistor } from "../public/redux/store";
import UserContextProvider from "../public/context/userContext";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserContextProvider>
          <NavigationContextProvider>
            <ChakraProvider theme={theme}>
              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{ duration: 3000 }}
              />
              <Component {...pageProps} />
            </ChakraProvider>
          </NavigationContextProvider>
        </UserContextProvider>
      </PersistGate>
    </Provider>
  );
}
