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

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: { email: "" },
    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: { email: string }) => {
    console.log("Waitlist Submission:", values.email);
    setSubmitted(true);
  };

  return (
    <Container id="waitlist" size="sm" pt='lg'>
      <Stack mb="xl">
        <Title order={2} mb="md" style={{ textAlign: "center", maxWidth: '100%' }}>
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
        <Title order={2} mb="md" style={{ textAlign: "center", maxWidth: '100%' }}>Key Features</Title>
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
        <Title order={2} mb="md" style={{ textAlign: "center", maxWidth: '100%' }}>
          Join Us!
        </Title>
        <Paper withBorder shadow="md" p="xl" radius="md">
          {!submitted ? (
            <>
              <Text size="md" mb="sm" fw={500} style={{ textAlign: "center" }}>
                Join our waitlist and get exclusive early access!
              </Text>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                  placeholder="Enter your email here"
                  {...form.getInputProps("email")}
                />
                <Button type="submit" fullWidth mt="md">
                  Join the Waitlist
                </Button>
              </form>
            </>
          ) : (
            <Text color="green" size="lg">
              🎉 Thank you for joining the wait! We'll notify you as soon we launch.
            </Text>
          )}
        </Paper>
      </Stack>
    </Container>
  );
};

export default WaitlistForm;
