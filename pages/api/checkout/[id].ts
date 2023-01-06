import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import * as nodemailer from 'nodemailer';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const session = await stripe.checkout.sessions.retrieve(id as string, { expand: ['payment_intent'] });
    const feed = await prisma.team.findUnique({
        where: { stripeId: id as string },
    });
    if (!feed) {
        //Put the form info in the database and email the user
        const formData = session.metadata ? JSON.parse(session.metadata.formData).formData : "";
        console.log(formData)
        const addFormInfo = await prisma.team.create({
            data: {
                stripeId: id as string,
                teamCaptain: {
                    create: {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        phoneNumber: formData.phoneNumber
                    }
                },
                teammates: {
                    create: formData.teammates
                },
                teamName: formData.team ? formData.team : "",
                referredBy: formData.referredBy
            },
            include: {
                teamCaptain: true,
                teammates: true
            },
        })
        console.log("addFormInfo");
        console.log(addFormInfo);
        //email the user:

        const transporter = nodemailer.createTransport({
            service: 'SendinBlue',
            auth: {
                user: 'ericming24@gmail.com', // The account you signed up with SendinBlue
                pass: process.env.SMTP_PASS,
            },
            secure: false,
        });
        const mailData = {
            from: 'support@leagueplaybasketball.com',
            to: formData.email,
            subject: "League Play Baskeball Signup Confirmation",
            text: `${JSON.stringify(formData)}}`,
            html: `<div>${JSON.stringify(formData)}</div><p>Sent from League Play</p>`,
        };

        transporter.sendMail(mailData, (err: Error | null, info) => {
            if (err) {
                console.log("mail error: ")
                console.log(err)
            } else {
                console.log("mail sent!")
                console.log(info);
            }
        });

    }
    res.status(200).json({ session })
}