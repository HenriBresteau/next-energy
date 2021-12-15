import {
  Container,
  Flex,
  Heading,
  Text,
  IconButton,
  Stack,
  Box,
  Menu,
  Link,
  Icon,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Divider,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import styles from "./navbar.module.scss";
import Image from "next/image";
import NextLink from "next/link";
import NextLogo from "../../public/images/logo/LOGO-GENERIQUE.svg";
import NemuroVert from "../../public/images/logo/numero-vert.svg";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container as="nav" className={styles.nav} maxW="container.xl">
      <Flex
        bg={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        flexDirection="column"
        maxW="container.xl"
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: "auto", md: "full" }}
          justifyContent="space-between"
          flexGrow={1}
        >
          <Box mr={5} pt={2}>
            <NextLink href="/">
              <a>
                <Image src={NextLogo} alt="logo next" width={300} height={64} />
              </a>
            </NextLink>
          </Box>
          <Box mr={5} pt={2}>
            <NextLink href="tel:0805037555">
              <a>
                <Image
                  src={NemuroVert}
                  alt="numero vert"
                  width={300}
                  height={64}
                />
              </a>
            </NextLink>
          </Box>
        </Flex>
        <Divider />
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "100%" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 4 }}
          spacing={{ md: 6 }}
        >
          {navItems.map((navItem) => (
            <Box key={navItem.label}>
              {navItem.children ? (
                <Popover trigger={"hover"} placement="bottom-start">
                  <NextLink href={navItem.href} passHref>
                    <PopoverTrigger>
                      <Link
                        p={2}
                        color="next"
                        _hover={{
                          textDecoration: "none",
                          color: "#8dc449",
                        }}
                      >
                        {navItem.label}
                      </Link>
                    </PopoverTrigger>
                  </NextLink>
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                </Popover>
              ) : (
                <NextLink href={navItem.href} passHref>
                  <Link
                    color="next"
                    p={2}
                    _hover={{
                      textDecoration: "none",
                      color: "#8dc449",
                    }}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              )}
            </Box>
          ))}
        </Stack>

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
};
export default Navbar;
const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color="next"
                _hover={{
                  textDecoration: "none",
                  color: "gray.800",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg="white"
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: "#1AB10750" }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "gray.800" }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"gray.800"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};
const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} bg="whitesmoke">
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();
//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex py={2} as={Box} justify={"space-between"} align={"center"}>
//         <MenuList>
//           <NextLink href={href} passHref>
//             <MenuItem>{label}</MenuItem>
//           </NextLink>
//         </MenuList>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>
//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <NextLink key={child.label} py={2} href={child.href} passHref>
//                 {child.label}
//               </NextLink>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex py={2} justify={"space-between"} align={"center"}>
        <NextLink
          href={href}
          passHref
          fontWeight={600}
          color={("next")}
        >
          {label}
        </NextLink>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <NextLink key={child.label} href={child.href} passHref>
                <Link py={2}>{child.label}</Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const navItems = [
  { label: "CEE", href: "/CEE" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Calorifugeage",
        href: "/solution/calorifugeage",
      },
      {
        label: "Points Singuliers",
        href: "/solution/points-singuliers",
      },
    ],
  },
  {
    label: "Vous êtes ? ",
    href: "/vous-etes",
    children: [
      {
        label: "Collectivité",
        href: "/vous-etes/collectivite",
      },
      {
        label: "Entreprise",
        href: "/vous-etes/entreprise",
      },
      {
        label: "Industrie",
        href: "/vous-etes/industrie",
      },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Références", href: "/references" },
  { label: "Contact", href: "/contact" },
];
