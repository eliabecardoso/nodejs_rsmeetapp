import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        type: Sequelize.INTEGER,
        // typeFile: {
        //   type: Sequelize.VIRTUAL,
        //   get() {
        //     switch (this.type) {
        //       case 1:
        //         return 'User Avatar';
        //       case 2:
        //         return 'Meetup Image';
        //       case 3:
        //         return 'Meetup Attach';
        //       default:
        //         return 'Other';
        //     }
        //   },
        // },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
