import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Heading as='h2' size='2xl' mb={10} noOfLines={1}>
                Time Currency converter
            </Heading>
            <Breadcrumb ml={44} separator='-'>
  <WrapItem>
      <Button colorScheme='orange' mr={5}><Link to='/time'>Time</Link></Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='yellow'><Link to='/currency'>Currency</Link></Button>
    </WrapItem>
</Breadcrumb>
        </div>
    );
};

export default Home;