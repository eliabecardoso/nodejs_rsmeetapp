import { Op } from 'sequelize';

import SubscriptionMeetup from '../models/SubscriptionMeetup';
import Meetup from '../models/Meetup';

class SubscriptionMeetupController {
  async index(req, res) {
    const subscriptions = await SubscriptionMeetup.findAll({
      where: {
        subscriber_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gte]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetupId);

    if (!meetup) return res.status(400).json({ error: 'Meetup not found' });

    if (meetup.organizer_id === req.userId)
      return res
        .status(401)
        .json({ error: "Can't subscribe to you own meetups" });

    if (meetup.past)
      return res.status(400).json({ error: 'Meetup has been ended' });

    const checkHasSub = await SubscriptionMeetup.findOne({
      where: {
        meetup_id: meetup.id,
        subscriber_id: req.userId,
      },
    });

    if (checkHasSub)
      return res
        .status(400)
        .json({ error: 'You already subscribed for this Meetup' });

    const checkSubDate = await SubscriptionMeetup.findOne({
      where: {
        subscriber_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          required: true,
          where: { date: meetup.date },
        },
      ],
    });

    if (checkSubDate)
      return res.status(400).json({
        error: 'You already subscribed for another Meetup this same Time',
      });

    const subscriptionMeetup = await SubscriptionMeetup.create({
      meetup_id: req.params.meetupId,
      subscriber_id: req.userId,
    });

    return res.json(subscriptionMeetup);
  }
}

export default new SubscriptionMeetupController();
