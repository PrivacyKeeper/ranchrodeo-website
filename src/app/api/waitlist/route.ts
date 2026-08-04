import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "RanchRodeo.Pro <support@ranchrodeo.pro>",
      to: email,
      subject: "You're on the RanchRodeo.Pro waitlist! 🤠",
      html: `
        <div style="background-color:#14100c;color:#f1e6d4;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#b3402f;font-size:28px;margin:0;">RANCHRODEO.PRO</h1>
            <p style="color:#ac9c86;font-size:14px;margin-top:5px;">The outfit, not the individual.</p>
          </div>
          <h2 style="color:#b3402f;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#e3d8c8;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#b3402f;">RanchRodeo.Pro</strong> — the complete platform for headers, heelers, producers, and coaches.
          </p>
          <p style="color:#e3d8c8;font-size:16px;line-height:1.6;">
            Ranch rodeo producers are almost universally running on paper and a
            spreadsheet, doing points math by hand between rounds while a crowd
            sits waiting. A tablet that converts placings to points instantly and
            pushes live standings is a genuinely wanted product.
          </p>
          <h3 style="color:#b3402f;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#e3d8c8;font-size:15px;line-height:1.8;">
            <li>&#128290; Placings to points the moment the last team runs</li>
            <li>&#128200; Live standings you can put on the arena screen</li>
            <li>&#128203; Card builder: your event set, your scale, your tiebreakers</li>
            <li>&#128101; Team rosters with a different role per event</li>
            <li>&#9989; Working-cowboy card tracking, flagged before entries close</li>
            <li>&#127942; Bonus points for teams with a time or score in every event</li>
            <li>&#128052; Working horse profiles and Top Horse credentials</li>
            <li>&#127974; Ranch profiles — the brand, the county, the outfit's story</li>
            <li>&#127941; Top Hand, Top Horse, Rookie and Hard Luck nominations</li>
            <li>&#128722; The widest marketplace in the portfolio: leather, silver, gear</li>
          </ul>
          <p style="color:#e3d8c8;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Keep swinging. 🤠
          </p>
          <p style="color:#ac9c86;font-size:14px;margin-top:30px;">
            — The RanchRodeo.Pro Team<br/>
            <a href="https://ranchrodeo.pro" style="color:#b3402f;">ranchrodeo.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #4b3b2a;margin:30px 0;" />
          <p style="color:#7b6d5b;font-size:12px;text-align:center;">
            &copy; 2026 Apps 1, LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "RanchRodeo.Pro <support@ranchrodeo.pro>",
      to: "support@ranchrodeo.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
