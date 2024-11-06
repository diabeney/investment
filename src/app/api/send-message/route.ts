import ClientEmail from '@/shared/components/emails/client_email'
import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

type BodyProps = {
    fullName: string;
    email: string;
    message: string
};
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const { email, fullName, message } = (await req.json()) as BodyProps;
    const { data, error } = await resend.emails.send({
        from: "Blackrest Capital Group <hello@tevrozo.com>",
        to: [email],
        subject: "Thank You for Reaching Out to Us!",
        react: ClientEmail({ fullName, email, message }),
        replyTo: "addodiabene69@gmail.com",
    });

    if (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: data?.id }, { status: 201 });
}
