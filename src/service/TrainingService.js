import { BaseService } from './BaseService';
import Notify from '../utils/Notify';

class TrainingService extends BaseService {
  add(data) {
    super
      .post('/training', data)
      .then(res => {
        Notify.success(res.message);
      })
      .catch(err => {
        Notify.error(err);
      });
  }
  get() {
    return super.get('/training');
  }
  getOne(id) {
    return super.get(`/training/${id}`);
  }
}

export default new TrainingService();
