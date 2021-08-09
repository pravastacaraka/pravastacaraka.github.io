import { ThemeToggle } from "@app-components/Button";
import { MENU_LINKS } from "@app-config/app.config";
import { Avatar, Container, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

function HeaderLink({ name, href, isActive }) {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        px={4}
        color="gray.500"
        _hover={{ color: "gray.600" }}
        aria-current={isActive ? "page" : undefined}
        _activeLink={{
          color: useColorModeValue("gray.900", "gray.100"),
        }}
      >
        {name}
      </Text>
    </Link>
  );
}

function Header() {
  const { pathname } = useRouter();
  let isActive = false;

  return (
    <Container
      as="nav"
      d={{ base: "none", md: "block" }}
      my={{ base: 6, md: 8 }}
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter="saturate(180%) blur(20px)"
      transition="background-color 0.2s ease-in-out"
      opacity={60}
    >
      <HStack justify="space-between" w="full" py={8}>
        <Link href="/" passHref>
          <Avatar name="Pravasta Caraka" size="sm" cursor="pointer" />
        </Link>
        <HStack>
          {MENU_LINKS.map(({ title, path }) => {
            if (path !== "/") {
              const [, group] = path.split("/");
              isActive = pathname.includes(group);
            } else {
              if (path === pathname) isActive = true;
            }
            return <HeaderLink href={path} name={title} isActive={isActive} key={title} />;
          })}
        </HStack>
        <ThemeToggle />
      </HStack>
    </Container>
  );
}

export default Header;
