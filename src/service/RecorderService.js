import { BaseService } from './BaseService';

class RecorderService extends BaseService {
  add(data) {
    return super.post('/t_record', data);
  }
  getTrainingRecord(id) {
    return super.get(`/t_record/${id}`);
  }
  remove(id) {
    return super.delete(`/t_record/${id}`);
  }
}

export default new RecorderService();
