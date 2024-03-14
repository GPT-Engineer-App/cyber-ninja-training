import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, Container, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaLock, FaCode, FaBug, FaBook } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Introduction to Penetration Testing",
    description: "Learn the basics of penetration testing and ethical hacking.",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8fHwxNzEwNDAzNTU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Web Application Security",
    description: "Discover vulnerabilities in web applications and how to exploit them.",
    image: "https://images.unsplash.com/photo-1614064643392-8dd713152ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzZWN1cml0eXxlbnwwfHx8fDE3MTA0MDM1NTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Network Security",
    description: "Understand network security concepts and perform network penetration testing.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MHx8fHwxNzEwNDAzNTU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Box>
      <Box bg="gray.900" py={16} color="white">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Penetration Testing E-Learning Platform
          </Heading>
          <Text fontSize="xl" mb={8}>
            Learn the skills to become a professional penetration tester and secure systems from vulnerabilities.
          </Text>
          <Button colorScheme="blue" size="lg" rightIcon={<FaBook />}>
            Start Learning
          </Button>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Heading as="h2" size="xl" mb={8}>
          Featured Courses
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {courses.map((course) => (
            <GridItem key={course.id}>
              <VStack align="stretch" spacing={4} p={6} borderWidth={1} borderRadius="lg" _hover={{ shadow: "md" }} cursor="pointer" onClick={() => setSelectedCourse(course)}>
                <Image src={course.image} alt={course.title} borderRadius="lg" />
                <Heading as="h3" size="md">
                  {course.title}
                </Heading>
                <Text>{course.description}</Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Why Learn Penetration Testing?
          </Heading>
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
            <GridItem>
              <HStack spacing={4}>
                <Box as={FaLock} size="32px" color="blue.500" />
                <Text>Enhance security of systems and networks</Text>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack spacing={4}>
                <Box as={FaCode} size="32px" color="green.500" />
                <Text>Develop in-demand technical skills</Text>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack spacing={4}>
                <Box as={FaBug} size="32px" color="red.500" />
                <Text>Identify and fix vulnerabilities proactively</Text>
              </HStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Heading as="h2" size="xl" mb={8}>
          About Us
        </Heading>
        <Text fontSize="lg" mb={8}>
          We are a team of experienced penetration testers and cybersecurity professionals passionate about sharing our knowledge and helping others learn the skills to secure systems and networks.
        </Text>
        <Link href="#" color="blue.500" fontWeight="bold">
          Learn More
        </Link>
      </Container>

      {selectedCourse && (
        <Box position="fixed" top={0} left={0} right={0} bottom={0} bg="rgba(0, 0, 0, 0.5)" display="flex" alignItems="center" justifyContent="center" zIndex={9999} onClick={() => setSelectedCourse(null)}>
          <Box bg="white" p={8} borderRadius="lg" maxW="lg" mx="auto">
            <Heading as="h2" size="xl" mb={4}>
              {selectedCourse.title}
            </Heading>
            <Text mb={8}>{selectedCourse.description}</Text>
            <Button colorScheme="blue">Enroll Now</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Index;
