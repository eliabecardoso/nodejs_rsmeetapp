import Notification from '../schemas/Notification';
import User from '../models/User';
import SubscriptionMeetup from '../models/SubscriptionMeetup';

class NotificationSubscription {
  get key() {
    return 'NotificationSubscription';
  }

  async handle({ data }) {
    const { meetupId, content } = data;

    const allSubscribers = await SubscriptionMeetup.findAll({
      where: {
        meetup_id: meetupId,
      },
      include: [{ model: User, as: 'subscriber', required: true }],
    }).map(sub => {
      return {
        user: sub.subscriber_id,
        content,
      };
    });

    await Notification.insertMany(allSubscribers);
  }
}

export default new NotificationSubscription();
