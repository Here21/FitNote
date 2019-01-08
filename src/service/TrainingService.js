import { BaseService } from './BaseService';

class TrainingService extends BaseService {
  add(data) {
    return super.post('/training', data);
  }
  get() {
    return super.get('/training');
  }
  getOne(id) {
    return super.get(`/training/${id}`);
  }
  complete() {
    return super.put('/training/complete-all');
  }
}

export default new TrainingService();
