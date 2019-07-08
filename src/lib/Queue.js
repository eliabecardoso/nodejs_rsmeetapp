import Bee from 'bee-queue';
import redisConfig from '../config/redis';

import NotificationSubscription from '../app/jobs/NotificationSubscription';

const jobs = [NotificationSubscription];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        beeq: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].beeq.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { beeq, handle } = this.queues[job.key];

      beeq.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
