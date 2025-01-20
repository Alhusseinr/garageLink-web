import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Text,
  Title,
  Paper,
  List,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck } from "@tabler/icons-react";
import { db } from "../firebseConfig";
import { collection, addDoc } from "firebase/firestore";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      setError("");

    try {
      await addDoc(collection(db, "waitlist"), { email });
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error adding email to wait list: ", error);
      setError("An error occurred. Please try again later.");
      setSubmitted(false);
      setEmail("");
    }
  };

  return (
    <Container id="waitlist" size="sm" pt="lg">
      <Stack mb="xl">
        <Title
          order={2}
          mb="md"
          style={{ textAlign: "center", maxWidth: "100%" }}
        >
          What is GarageLink?
        </Title>
        <Text size="lg">
          GarageLink is the ultimate platform for car enthusiasts to showcase
          their passion. Whether you're building your dream ride, tracking your
          modifications, or organizing your collection of parts, GarageLink has
          you covered. Be the first to experience a new way to manage your
          garage online.
        </Text>
      </Stack>

      <Stack mb="xl">
        <Title
          order={2}
          mb="md"
          style={{ textAlign: "center", maxWidth: "100%" }}
        >
          Key Features
        </Title>
        <List
          spacing="md"
          size="lg"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text size="md">
              <b>🏎 Add Your Cars:</b> Keep track of your entire vehicle
              collection in one place.
            </Text>
          </List.Item>
          <List.Item>
            <Text size="md">
              <b>🛠 Track Your Builds:</b> Document every mod, upgrade, and
              detail of your projects.
            </Text>
          </List.Item>
          <List.Item>
            <Text size="md">
              <b>🏁 Organize Your Parts:</b> Store part details, costs, and
              installation history.
            </Text>
          </List.Item>
          <List.Item>
            <Text size="md">
              <b>📸 Showcase Your Rides:</b> Share your passion with a
              like-minded community.
            </Text>
          </List.Item>
          <List.Item>
            <Text size="md">
              <b>📅 Plan Future Upgrades:</b> Never forget what's next for your
              ride.
            </Text>
          </List.Item>
        </List>
      </Stack>

      <Stack>
        <Title
          order={2}
          mb="md"
          style={{ textAlign: "center", maxWidth: "100%" }}
        >
          Join Us!
        </Title>
        <Paper withBorder shadow="md" p="xl" radius="md">
          {!submitted ? (
            <>
              <Text size="md" mb="sm" fw={500} style={{ textAlign: "center" }}>
                Join our waitlist and get exclusive early access!
              </Text>
              <form onSubmit={handleSubmit}>
                <TextInput
                  type="email"
                  placeholder="Enter your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" fullWidth mt="md">
                  Join the Waitlist
                </Button>
              </form>
            </>
          ) : (
            <Text color="green" size="lg">
              🎉 Thank you for joining the wait! We'll notify you as soon we
              launch.
            </Text>
          )}
        </Paper>
      </Stack>
    </Container>
  );
};

export default WaitlistForm;
