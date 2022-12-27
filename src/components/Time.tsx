import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { Link } from 'react-router-dom';
  
  const Time = () => {
    const [input, setInput] = useState("");
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setInput(e.target.value);
  
    return (
      <div>
        <FormControl>
          <FormLabel>Time</FormLabel>
          <Input
          placeholder="Select Date and Time"
          size="md"
          type="time"
          onChange={handleInputChange}
          value={input}
          />
          <FormLabel>From</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
          <FormLabel>To</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
          <Button mt={4} colorScheme="teal" type="submit">
            Convert
          </Button>
        </FormControl>
        <Box justifySelf="flex-end" mt={44} ml={52}><Link to='/'>Back to Home</Link></Box>
      </div>
    );
  };
  
  export default Time;
  