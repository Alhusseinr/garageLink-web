import React from "react";
import { Container, Title, Text, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header
      style={{
        padding: "50px 0",
        textAlign: "center",
        backgroundColor: "#1971c2",
        color: "white",
      }}
    >
      <Container size="md">
        <Title style={{ fontSize: isMobile ? "2rem" : "3rem" }}>
          Welcome to <span style={{ color: "#ffcc00" }}>GarageLink</span>
        </Title>
        <Text size="lg" mt="md" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Your ultimate platform to organize and showcase your car builds,
          parts, and projects. Stay tuned for the launch and be the first to
          experience it!
        </Text>
      </Container>
    </header>
  );
};

export default Header;
