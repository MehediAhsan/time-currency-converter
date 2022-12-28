import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex,
  Text,
} from "@chakra-ui/react"
import { Link, RouterProvider } from 'react-router-dom';
import { router } from "./Routes/Routes";
import Home from "./components/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router}></RouterProvider>
    
  </ChakraProvider>
)
