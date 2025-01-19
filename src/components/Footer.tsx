import React from 'react';
import { Container, Text, Group, ActionIcon } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', backgroundColor: '#f8f9fa', marginTop: '50px' }}>
      <Container size="md" style={{ textAlign: 'center' }}>
        <Text size="sm" color="dimmed">
          Be the first to know when we launch. Follow us on social media!
        </Text>

        {/* <Group align="center" mt="md" justify='center'>
          <ActionIcon size="lg" component="a" href="https://facebook.com" target="_blank">
            <IconBrandFacebook size={24} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://twitter.com" target="_blank">
            <IconBrandTwitter size={24} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://instagram.com" target="_blank">
            <IconBrandInstagram size={24} />
          </ActionIcon>
        </Group> */}

        <Text size="xs" mt="md" color="dimmed">
          © {new Date().getFullYear()} GarageLink LLC. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;