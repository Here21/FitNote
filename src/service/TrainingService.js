import { BaseService } from './BaseService';

class TrainingService extends BaseService {
  add(data) {
    return super.post('/training', data);
  }
  get() {
    return super.get('/training');
  }
  getHistory() {
    return super.get('/training/history');
  }
  getOne(id) {
    return super.get(`/training/${id}`);
  }
  complete() {
    return super.put('/training/complete-all');
  }
  remove(id) {
    return super.delete(`/training/${id}`);
  }
}

export default new TrainingService();
