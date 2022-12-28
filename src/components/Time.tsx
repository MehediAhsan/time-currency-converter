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
    const [input, setInput] = useState<any | null>("");
    const [fromCountry, setFromCountry] = useState<string>("");
    const [ toCountry, setToCountry] = useState<string>("");
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setInput(e.target.value);
    
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
      setFromCountry(e.target.value);
  
    const handleConvertChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
      setToCountry(e.target.value);

      const handleSubmit = (_e:any) => {
        console.log(input, fromCountry, toCountry);
    }
  
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
          <Select onChange={handleCountryChange} placeholder="Select country">
          <option>BD</option>
          <option>USD</option>
          <option>INR</option>
        </Select>
          <FormLabel>To</FormLabel>
          <Select onChange={handleConvertChange} placeholder="Select country">
          <option>BD</option>
          <option>USD</option>
          <option>INR</option>
        </Select>
        <Button onClick={handleSubmit} mt={4} colorScheme="teal" type="submit">
          Convert
        </Button>
        </FormControl>
        <Box justifySelf="flex-end" mt={44} ml={52}><Link to='/'>Back to Home</Link></Box>
      </div>
    );
  };
  
  export default Time;
  