import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Heading,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMailOutline, IoPersonCircleOutline, IoCall } from "react-icons/io5";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const submitContact = async (e) => {
    e.preventDefault();

    const data = {
      name,
      tel,
      email,
    };

    const res = await fetch("/api/contact", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
  };
  return (
    <>
      <Box p={4}>
        <Heading as="h3" mx="4" fontSize="20" color="#0b0e3F">
          Testez votre éligibilité
        </Heading>
        <Box m={4} color="#0b0e3F">
          <VStack spacing={4} as="form" method="POST" onSubmit={submitContact}>
            <FormControl>
              <FormLabel>Votre nom</FormLabel>
              <InputGroup borderColor="#74bd4c">
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<IoPersonCircleOutline color="gray.800" />}
                />
                <Input
                  type="text"
                  placeholder="Dupont"
                  size="md"
                  id="name"
                  focusBorderColor="#74bd4c"
                  onChange={(e) => setName(e.target.value)}
                  isRequired
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Votre téléphone</FormLabel>
              <InputGroup borderColor="#74bd4c">
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<IoCall color="gray.800" />}
                />
                <Input
                  type="tel"
                  placeholder="04 00 00 00 00"
                  size="md"
                  id="tel"
                  focusBorderColor="#74bd4c"
                  onChange={(e) => setTel(e.target.value)}
                  isRequired
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Votre email</FormLabel>
              <InputGroup borderColor="#74bd4c">
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<IoMailOutline color="gray.800" />}
                />
                <Input
                  type="email"
                  placeholder="dupont@mail.com"
                  size="md"
                  id="email"
                  focusBorderColor="#74bd4c"
                  onChange={(e) => setEmail(e.target.value)}
                  isRequired
                />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <Button
                type="submit"
                variant="outline"
                width="100%"
                bg="#74bd4c"
                color="white"
                _hover={{ bg: "transparent", color: "#74bd4c" }}
              >
                Envoyer
              </Button>
            </FormControl>
          </VStack>
        </Box>
        <Divider />
      </Box>
    </>
  );
};
