import Meetup from '../models/Meetup';

class OrganizingController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: {
        organizer_id: req.userId,
      },
      order: ['date'],
    });

    return res.json(meetups);
  }
}

export default new OrganizingController();
