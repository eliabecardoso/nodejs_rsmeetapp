import { Model } from 'sequelize';

class SubscriptionMeetup extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Meetup, { foreignKey: 'meetup_id' });
    this.belongsTo(models.User, {
      foreignKey: 'subscriber_id',
      as: 'subscriber',
    });
  }
}

export default SubscriptionMeetup;
