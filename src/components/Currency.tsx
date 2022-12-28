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
        if(fromCountry==='BD'){
            baseUSD = input * 0.0097;
        }
        else if(fromCountry==='USD'){
            baseUSD = input * 1;
        }
        else if(fromCountry==='INR'){
            baseUSD = input * 0.012;
        }
        if(toCountry==='BD'){
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
      <Box mt={10}>{amount} {amount && toCountry}</Box>
      
    </div>
  );
};

export default Currency;
