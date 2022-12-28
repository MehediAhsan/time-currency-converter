import { Breadcrumb, Button, Heading, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Main = () => {
    return (
        <div>
        <Heading as='h2' size='2xl' mb={10} noOfLines={1} bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='5xl'
  fontWeight='extrabold'>
            Time Currency converter
        </Heading>
        <Breadcrumb ml={44} separator='-'>
<WrapItem>
  <Button p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, red.500, yellow.500)'
  _hover={{
    bgGradient: 'linear(to-r, teal.500, green.500)',
  }} mr={5}><Link to='/time'>Time</Link></Button>
</WrapItem>
<WrapItem>
  <Button p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}><Link to='/currency'>Currency</Link></Button>
</WrapItem>
</Breadcrumb>
    </div>
    );
};

export default Main;