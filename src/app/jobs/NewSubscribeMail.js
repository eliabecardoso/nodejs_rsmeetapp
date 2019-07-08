import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Mail from '../../lib/Mail';

class NewSubscribeMail {
  get key() {
    return 'NewSubscribeMail';
  }

  async handle({ data }) {
    const { organizer, meetup, subscriber } = data;

    await Mail.sendMail({
      to: `${organizer.name} <${organizer.email}>`,
      subject: 'Novo Inscrito',
      template: 'newSubscription',
      context: {
        organizer: organizer.name,
        meetup: meetup.title,
        name: subscriber.name,
        email: subscriber.email,
        date: format(
          parseISO(meetup.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new NewSubscribeMail();
