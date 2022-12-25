import {
  AspectRatio,
  Box,
  chakra,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  SkeletonText,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@app-providers/chakra-ui";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <LinkBox
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      bgColor="whiteAlpha.50"
      overflow="hidden"
      role="group"
      rounded="md"
      transform="auto-gpu"
      transitionDuration="slow"
      transitionProperty="transform"
      transitionTimingFunction="cubic-bezier(.175,.885,.32,1.275)"
    >
      <AspectRatio ratio={16 / 9} _groupHover={{ filter: "blur(2px)" }}>
        <Image
          alt="Preview of the project"
          placeholder="blur"
          quality={100}
          style={{ objectFit: "cover" }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...project.image}
        />
      </AspectRatio>

      <Stack
        _groupHover={{ opacity: 1 }}
        align="center"
        bgColor="blackAlpha.700"
        inset={0}
        justify="center"
        opacity={0}
        pos="absolute"
        px={8}
        py={4}
        transitionDuration="normal"
        transitionProperty="opacity"
        transitionTimingFunction="cubic-bezier(.39,.575,.565,1)"
      >
        <Heading size="md" color="white">
          {project.name}
        </Heading>
        <Text color="white" fontSize={["xs", "sm"]} noOfLines={2} textAlign="center">
          {project.desc}
        </Text>
        <LinkOverlay
          href={project.demo_url}
          color="yellow.200"
          fontSize={["xs", "sm"]}
          noOfLines={1}
          pb={4}
          isExternal
        >
          {project.demo_url?.replace(/https?:\/\//, "")}
        </LinkOverlay>
        <Wrap justify="center">
          {project.stack.map((st) => (
            <WrapItem key={st}>
              <Tag size="sm" variant="subtle">
                {st}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </LinkBox>
  );
}

function KnowledgeCard({ data, label, isError, isLoading }) {
  return (
    <Box>
      <Heading mb={4} size="md" letterSpacing="tighter" fontWeight="600">
        {label}
      </Heading>

      <Box color={useColorModeValue("gray.600", "gray.400")}>
        {isError || isLoading ? (
          <SkeletonText noOfLines={5} skeletonHeight="16px" speed={1.2} />
        ) : (
          <Wrap fontSize="sm" spacing={1}>
            {data?.map((item) => (
              <WrapItem key={item.id}>
                <HStack w={{ base: "110px", md: "120px" }}>
                  <chakra.svg
                    boxSize={4}
                    fill="currentcolor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{`${item.fields.name}`}</title>
                    <path d={item.fields.icon} />
                  </chakra.svg>
                  <Text noOfLines={1}>{item.fields.name}</Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>
    </Box>
  );
}

export { KnowledgeCard, ProjectCard };
