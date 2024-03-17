import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = { message: string; email: string };

const ContactFormEmail = ({ message, email }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              You received the following message from the contact form:
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The senders email is : {email}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;
