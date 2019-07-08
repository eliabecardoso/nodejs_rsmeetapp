export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'TeamBot EHSC - Meetapper <noreply@meetapper.com>',
  },
};

/* --Providers--
  Amazon SES,
  Mailgun,
  Sparkpost,
  Mandril (Mailchimp),

  Mailtrap.io(for dev env)
*/
