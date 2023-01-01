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
  let baseUSD:number;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(parseInt(e.target.value));

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFromCountry(e.target.value);

  const handleConvertChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setToCountry(e.target.value);

    

    const handleSubmit = (_e:any) => {
        
        console.log(input, fromCountry, toCountry);
        if(fromCountry==='BDT'){
            baseUSD = input * 0.0097;
        }
        else if(fromCountry==='USD'){
            baseUSD = input * 1;
        }
        else if(fromCountry==='INR'){
            baseUSD = input * 0.012;
        }
        else if(fromCountry==='EUR'){
            baseUSD = input * 1.07;
        }
        else if(fromCountry==='PHP'){
            baseUSD = input * 0.018;
        }
        if(toCountry==='BDT'){
            const value = baseUSD * 102.62;
            setAmount(value)
        }
        else if(toCountry==='USD'){
            const value = baseUSD;
            setAmount(value)
        }
        else if(toCountry==='INR'){
            const value = baseUSD * 82.78;
            setAmount(value)
        }
        else if(toCountry==='EUR'){
            const value = baseUSD * 0.93;
            setAmount(value)
        }
        else if(toCountry==='PHP'){
            const value = baseUSD * 55.68;
            setAmount(value)
        }

    }



  return (
    <Box width='25%' border='1px' borderColor='gray.700' padding={6}>
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
          <option>BDT</option>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>PHP</option>
        </Select>
        <FormLabel>To</FormLabel>
        <Select onChange={handleConvertChange} placeholder="Select country">
          <option>BDT</option>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>PHP</option>
        </Select>
        <Button onClick={handleSubmit} mt={4} colorScheme="teal" type="submit">
          Convert
        </Button>
      </FormControl>
      <Box mt={10}>{amount} {amount && toCountry}</Box>
      
    </Box>
  );
};

export default Currency;
