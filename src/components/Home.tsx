import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, Heading, VStack, WrapItem } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Home = () => {
    return (
        <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Flex justifyContent={'space-between'}>
            <Flex gap={5}>
                <Link  to='/'>Home</Link>
                <Link  to='/blog'>Blog</Link>
            </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
  
          </Flex>
          <VStack spacing={8}>     
         <Outlet/>
         

         </VStack>
        </Grid>
      </Box>
    );
};

export default Home;