import { Message, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Message[]> {
  // Fetch data from your API here.
  return [
    {
      id: 117,
      global_id_3p:
        "<CAJAkNg2UnP-e_1pQcMD6FVL68EFyXpNPYWdbBM2tkdCWQaDsMg@mail.gmail.com>",
      id_3p: "190ffb4d95f5ed94",
      sent_by: "Gmail Team <mail-noreply@google.com>",
      integration_id: 49,
      subject: "Tips for using your new inbox and adding a green dot",
      body_text:
        "Tips for using your new inbox\r\n[image: Gmail]\r\n\r\nWelcome to your inbox\r\n[image: Search]\r\nFind emails fast\r\nWith the power of Google Search in your inbox, you can archive\r\n<https://support.google.com/mail/answer/6576?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\nall your email and find it\r\n<https://support.google.com/mail/answer/6593?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\nlater in a flash. Your inbox stays tidy, and you never need to worry about\r\nwhat to keep.\r\n[image: Personalize]\r\nPersonalize Attrove Mail\r\nCustomize inbox backgrounds, email signatures, and other options in Attrove\r\nMail settings\r\n<https://support.google.com/mail/answer/6562?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>.\r\nReview and adjust your privacy and security settings at My Account\r\n<https://myaccount.google.com/>.\r\n[image: Organize]\r\nOrganize your email\r\nYou can organize email with labels\r\n<https://support.google.com/mail/answer/118708?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>,\r\nwhich are like folders, but you can add more than one label to a message.\r\nYou can also use filters\r\n<https://support.google.com/mail/answer/6579?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\nto automatically sort and categorize messages as they come in.\r\n[image: Social]\r\nChat and meet directly from your inbox\r\nMessage with contacts in Google Chat\r\n<https://support.google.com/chat/answer/9341104?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\nand start video meetings with up to 100 people in Google Meet\r\n<https://support.google.com/mail/answer/9822902?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\nall without leaving Gmail.\r\n\r\nGet training and tips\r\nFind Gmail guides, tips, cheat sheets, help switching from Microsoft®\r\nOutlook®, and more at the Google Workspace Learning Center\r\n<https://support.google.com/a/users/answer/9259748?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\n.\r\nVisit the Learning Center\r\n<https://support.google.com/a/users/answer/9259748?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome>\r\n\r\nHappy emailing,\r\nThe Gmail Team\r\n[image: Google Cloud]\r\n\r\n© 2024 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043\r\n\r\n*You’re receiving this mandatory email service announcement to update you\r\nabout important changes to your Google Cloud product or account.*\r\n",
      body_html:
        '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html;charset=UTF-8"/><title>Tips for using your new inbox</title></head><body style="direction:ltr;text-align:left;background-color:#f8f9fa; margin:20px 0;"><br/><div style="margin:2%;"><div style="width:100%;margin:0 auto 0 auto;"><table style="vertical-align:middle;width:580px;margin:0 auto 0 auto;border:1px; border-color:black;"><tr><td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x" alt="Gmail" style="float:left;max-height:40px;margin:0 20px 10px 20px;"/></td></tr></table></div><div style="font-family:Roboto,\'Open sans\',Arial,sans-serif;color:#444; background-color:#fff;max-width:600px;margin:10px auto 0 auto;"><table style="background:#fff;width:100%;border-collapse:collapse;border-color:#e8eaed; border-spacing:0;border-style:solid;border-width:1px;display:table; position:relative;"><tr><td style="padding:5px 20px 0 20px;"><div style="width:90%;padding-left:15px;"><p><span style="font-family:\'Google sans\',Arial,sans-serif;font-weight:700;line-height:32px; font-size:24px;">Welcome to your inbox</span></p></div><div style="float:left;clear:both;padding:10px 5px 10px 10px;"><img src="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic1-2x.png" srcset="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic1-1x.png 1x, https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic1-2x.png 2x" alt="Search" style="display:block;width:112px;height:auto;"/></div><div style="float:left;vertical-align:middle;padding:10px;max-width:398px;"><table style="vertical-align:middle;"><tr><td style="font-family:Roboto,\'Open sans\',Arial,sans-serif;"><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif; font-size:16px;font-weight:700;line-height:20px;">Find emails fast</span><br/><span style="color:#3c4043;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px; font-weight:400;line-height:24px;">With the power of Google Search in your inbox, you can <a href="https://support.google.com/mail/answer/6576?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">archive</a> all your email and <a href="https://support.google.com/mail/answer/6593?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">find it</a> later in a flash. Your inbox stays tidy, and you never need to worry about what to keep.</span></td></tr></table></div><div style="float:left;clear:both;padding:10px 5px 10px 10px;"><img src="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic2-2x.png" srcset="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic2-1x.png 1x, https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic2-2x.png 2x" alt="Personalize" style="display:block;width:112px;height:auto;"/></div><div style="float:left;vertical-align:middle;padding:10px;max-width:398px;"><table style="vertical-align:middle;"><tr><td style="font-family:Roboto,\'Open sans\',Arial,sans-serif;"><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif; font-size:16px;font-weight:700;line-height:20px;">Personalize Attrove Mail</span><br/><span style="color:#3c4043;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px; font-weight:400;line-height:24px;">Customize inbox backgrounds, email signatures, and other options in <a href="https://support.google.com/mail/answer/6562?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">Attrove Mail settings</a>. Review and adjust your privacy and security settings at <a href="https://myaccount.google.com/" style="text-decoration:none;color:#15c;">My Account</a>.</span></td></tr></table></div><div style="float:left;clear:both;padding:10px 5px 10px 10px;"><img src="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic3-2x.png" srcset="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic3-1x.png 1x, https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic3-2x.png 2x" alt="Organize" style="display:block;width:112px;height:auto;"/></div><div style="float:left;vertical-align:middle;padding:10px;max-width:398px;"><table style="vertical-align:middle;"><tr><td style="font-family:Roboto,\'Open sans\',Arial,sans-serif;"><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif; font-size:16px;font-weight:700;line-height:20px;">Organize your email</span><br/><span style="color:#3c4043;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px; font-weight:400;line-height:24px;">You can organize email with <a href="https://support.google.com/mail/answer/118708?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">labels</a>, which are like folders, but you can add more than one label to a message. You can also use <a href="https://support.google.com/mail/answer/6579?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">filters</a> to automatically sort and categorize messages as they come in.</span></td></tr></table></div><div style="float:left;clear:both;padding:10px 5px 10px 10px;"><img src="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic4-2x.png" srcset="https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic4-1x.png 1x, https://ssl.gstatic.com/accounts/services/mail/msa/gmail-welcome-graphic4-2x.png 2x" alt="Social" style="display:block;width:112px;height:auto;"/></div><div style="float:left;vertical-align:middle;padding:10px;max-width:398px;"><table style="vertical-align:middle;"><tr><td style="font-family:Roboto,\'Open sans\',Arial,sans-serif;"><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif; font-size:16px;font-weight:700;line-height:20px;">Chat and meet directly from your inbox</span><br/><span style="color:#3c4043;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px; font-weight:400;line-height:24px;">Message with contacts in <a href="https://support.google.com/chat/answer/9341104?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">Google Chat</a> and start video meetings with up to 100 people in <a href="https://support.google.com/mail/answer/9822902?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">Google Meet</a> all without leaving Gmail.</span></td></tr></table></div></td></tr><tr><td style="padding:0 20px 0 20px;"><div style="margin:0 20px 20px 15px;"><table style="width:100%;border-collapse:collapse;border:0;"><tr><td style="font-family:Roboto,\'Open sans\',Arial,sans-serif;"><br/><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif;font-size:16px; font-weight:700;line-height:24px;">Get training and tips</span><br/><span style="color:#3c4043;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px; font-weight:400;line-height:24px;">Find Gmail guides, tips, cheat sheets, help switching from Microsoft<sup>®</sup> Outlook<sup>®</sup>, and more at the <a href="https://support.google.com/a/users/answer/9259748?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="text-decoration:none;color:#15c;">Google&nbsp;Workspace Learning Center</a>.</span></td></tr><tr><td><table style="margin:20px 0 0 0;border:none;border-collapse:collapse;border-radius:3px; border-spacing:0;display:inline-block;line-height:0;max-width:100%;padding:0; transition:box-shadow .2s ease-out;vertical-align:top;width:auto;"><tr style="padding:0;vertical-align:top;"><td style="-moz-hyphens:none;-webkit-hyphens:none;margin:0;border-collapse:collapse!important; line-height:inherit;margin:0;padding:0;vertical-align:top;"><table style="border-collapse:collapse;border-spacing:0;padding:0; vertical-align:top;width:100%;"><tr style="padding:0;vertical-align:top;"><td style="-moz-hyphens:none;-webkit-hyphens:none;margin:0;background:#2979ff; border:none;border-collapse:collapse!important;border-radius:3px; line-height:inherit;margin:0;padding:0;vertical-align:top; word-wrap:keep-all;"><a href="https://support.google.com/a/users/answer/9259748?hl=en&utm_source=gmailwelcomeemail&utm_medium=email&utm_campaign=gmailwelcome" style="margin:0;border:0 solid #2979ff;border-radius:3px;color:#fff; display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif; font-size:14px;font-weight:500;line-height:24px;margin:0; padding:8px 16px 8px 16px;text-decoration:none;">Visit the Learning Center</a></td></tr></table></td></tr></table></td></tr><tr><td style="font-family:Roboto,\'Open sans\',Arial,sans-serif; vertical-align:bottom;"><br/><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif;font-size:14px; font-weight:700;line-height:24px;">Happy emailing,</span><br/><span style="color:#3c4043;font-family:\'Google Sans\',Helvetica,Arial,sans-serif;font-size:14px; font-weight:700;line-height:24px;">The Gmail Team</span></td></tr></table></div></td></tr></table></div><div style="text-align:left;"><table style="vertical-align:middle;width:580px;margin:0 auto 0 auto;"><tr><td><img src="https://storage.googleapis.com/support-kms-prod/Yd1rPlunjtOKzNDXcw3eFmVCjI828xhBZqQy" alt="Google Cloud" style="float:left;width:140px;height:auto;margin:24px 20px 0 20px;"/></td></tr><tr><td style="margin-top:12px;"><p style="line-height:20px;color:#6c737f;font-size:12px;font-weight:400; margin:12px 20px 12px 20px;font-family:Roboto,Arial,Helvetica,sans-serif; text-align:left;">© 2024 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043</p><p style="line-height:20px;color:#6c737f;font-size:12px;font-weight:400; margin:12px 20px 12px 20px;font-family:Roboto,Arial,Helvetica,sans-serif; text-align:left;"><em>You’re receiving this mandatory email service announcement to update you about important changes to your Google Cloud product or account.</em></p></td></tr></table></div></div></body></html>\r\n',
      meta_data: {
        label_ids: ["UNREAD"],
      },
      received_at: "2024-07-29T18:16:00+00:00",
      created_at: "2024-08-08T23:23:43.434+00:00",
      report_id: 16,
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
