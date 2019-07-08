import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const { limit = 20 } = req.query;

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(limit);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(req.params.id, {
      read: true,
      new: true,
    });

    return res.json(notification);
  }
}

export default new NotificationController();
