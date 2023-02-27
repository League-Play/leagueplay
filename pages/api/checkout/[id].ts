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
        const tournament_id = session.metadata ? JSON.parse(session.metadata.formData).tournament_id : "";
        const addFormInfo = await prisma.team.create({
            data: {
                stripeId: id as string,
                teamCaptain: {
                    create: {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        phoneNumber: formData.phoneNumber,
                    }
                },
                teammates: {
                    create: formData.teammates
                },
                teamName: formData.team ? formData.team : "",
                referredBy: formData.referredBy,
                full: formData.fullTeam,
                tournament_id: String(tournament_id)
            },
            include: {
                teamCaptain: true,
                teammates: true
            },
        })
        console.log("addFormInfo");
        console.log(addFormInfo);
        //email the user: https://www.denniscampos.com/set-up-nodemailer-with-nextjs-and-typescript/

        const transporter = nodemailer.createTransport({
            service: 'SendinBlue',
            auth: {
                user: 'ericming24@gmail.com',
                pass: process.env.SMTP_PASS,
            },
            secure: false,
        });
        let rosterFilled = false
        let teamRoster = `${formData.firstName} ${formData.lastName}`
        for (let teammate of formData.teammates) {
            rosterFilled = true;
            teamRoster = teamRoster.concat(`, ${teammate.firstName} ${teammate.lastName}`)
        }
        let date = "";
        let location = "";
        let time = "";
        let time2 = "";

        if (tournament_id == "1" || tournament_id == 1) {
            date = "February 25th, 2023";
            location = "Major R. Owens Center, 1561 Bedford Ave, Brooklyn 11225"
            time = "5:30-8:00 PM"
            time2 = "5:30pm"
        } else if (tournament_id == "2" || tournament_id == 2) {
            date = "March 4th, 2023";
            location = "Major R. Owens Center, 1561 Bedford Ave, Brooklyn 11225"
            time = "9:00-11:30 PM"
            time2 = "9:00pm"
        } else if (tournament_id == "3" || tournament_id == 3) {
            date = "February 25th, 2023";
            location = "the Campus Recreation Center, 750 Ferst Drive Atlanta, GA 30332"
            time = "12:00-3:00 PM"
            time2 = "12:00pm"
        } else if (tournament_id == "4" || tournament_id == 4) {
            date = "March 11th, 2023";
            location = "Major R. Owens Center, 1561 Bedford Ave, Brooklyn 11225"
            time = "9:00-11:30 PM"
            time2 = "9:00pm"
        }

        const text = `${formData.firstName} ${formData.lastName},\n
        This is a confirmation email for the League Play Basketball Tournament on ${date}. The event will be at ${location} from ${time}. Please arrive 15 minutes early, so we can start at ${time2}. If you arrive late, we may have to start without you, and you will forfeit in the first round. Your team name is ${formData.team}${rosterFilled ? ` and your current team roster is ${teamRoster}` : ""}. You were referred by ${formData.referredBy.length > 0 ? formData.referredBy : "no one"}. Thanks for signing up and good luck!
        \n
        Best,
        League Play Inc. 
        `

        const mailData = {
            from: 'support@leagueplaybasketball.com',
            to: formData.email,
            bcc: ['ericming24@gmail.com', 'dkhait1@gmail.com'],
            subject: "League Play Basketball Signup Confirmation",
            text: text,
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