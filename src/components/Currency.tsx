import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Currency = () => {
  const [input, setInput] = useState<any | null>("");
  const [fromCountry, setFromCountry] = useState<string>("");
  const [ toCountry, setToCountry] = useState<string>("");
  const [amount, setAmount] = useState<any | null>("");
  let baseUSA:number;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFromCountry(e.target.value);

  const handleConvertChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setToCountry(e.target.value);

    

    const handleSubmit = (_e:any) => {
        
        console.log(input, fromCountry, toCountry);
        if(fromCountry==='BD'){
            baseUSA = input * 0.0097;
        }
        else if(fromCountry==='USA'){
            baseUSA = input * 1;
        }
        else if(fromCountry==='INR'){
            baseUSA = input * 0.012;
        }
        if(toCountry==='BD'){
            const value = baseUSA * 102.62;
            setAmount(value)
        }
        else if(toCountry==='USA'){
            const value = baseUSA;
            setAmount(value)
        }
        else if(toCountry==='INR'){
            const value = baseUSA * 82.78;
            setAmount(value)
        }

    }



  return (
    <div>
      <FormControl>
        <FormLabel>Amout</FormLabel>
        <Input
          type="number"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter Curreny"
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
      <Box mt={10}>{amount}</Box>
      <Box justifySelf="flex-end" mt={44} ml={52}>
        <Link to="/">Back to Home</Link>
      </Box>
    </div>
  );
};

export default Currency;
