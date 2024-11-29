import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Column,
    Row,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

type RequestReport = {
    email: string;
    fullName: string;
    message: string;
};

export const ClientEmail = (demo: RequestReport) => (
    <Html>
        <Head />
        <Preview>Your request has been sent through successfully.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box} className="">
                    <Img
                        src={`https://ik.imagekit.io/i7gyrkpch/logo_dark.png?updatedAt=1732914626416`}
                        width="150"
                        height="50"
                        alt="Stripe"
                    />
                    <Hr style={hr} />
                    <Text style={paragraph}>Hi {demo.fullName},</Text>
                    <Text style={paragraph}>
                        Thank you for contacting us at Blackrest Capital Group. We
                        appreciate your interest in our services and the opportunity to
                        assist you with your investment needs. Our team has received your
                        message and will review it promptly. We strive to respond within 24
                        hours, so you can expect to hear from us soon. In the meantime, if
                        you have any additional questions or would like to provide further
                        details, please feel free to reply directly to this email.
                    </Text>
                    <Text style={paragraph}>
                        Here’s a brief overview of your request:
                    </Text>
                    <Section className="p-4 rounded-lg bg-gray-50">
                        <Row>
                            <Column>
                                <Text>Fullname</Text>
                            </Column>
                            <Column align="right">
                                <Text>{demo.fullName}</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text>Email</Text>
                            </Column>
                            <Column align="right">
                                <Text>{demo.email}</Text>
                            </Column>
                        </Row>
                        <Section>
                            <Text>Message</Text>
                            <Text>{demo.message}</Text>
                        </Section>
                    </Section>
                    <Text style={paragraph}>
                        Thank you once again for reaching out. We look forward to assisting
                        you on your investment journey.
                    </Text>
                    <Text style={paragraph}>Best regards,</Text>
                    <Text style={paragraph}>The BlackCrest Team</Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

ClientEmail.PreviewProps = {
    fullName: "Richmond Tevrozo",
    email: "hello@gmail.com",
    message:
        "Our team has received your message and will review it promptly. We strive to respond within 24 hours, so you can expect to hear from us soon.",
    charityNumber: 1234567890,
    role: "Software Engineer",
    phone: "01234 567890",
};

export default ClientEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    width: "100%",
    paddingBottom: "16px",
    marginBottom: "64px",
};

const box = {
    padding: "0 16px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const paragraph = {
    color: "#000",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
};



