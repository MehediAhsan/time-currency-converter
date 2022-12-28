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
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Link, RouterProvider } from 'react-router-dom';
import { router } from "./Routes/Routes";
import Home from "./components/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Flex justifyContent={'space-between'}>
          <a  href='/'>Home</a>
        <ColorModeSwitcher justifySelf="flex-end" />

        </Flex>
        <VStack spacing={8}>     
        <RouterProvider router={router}></RouterProvider>
        </VStack>
      </Grid>
    </Box>
    
  </ChakraProvider>
)
