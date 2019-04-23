import { BaseService } from './BaseService';

class PartService extends BaseService {
  add(data) {
    return super.post('/part', data);
  }
  get() {
    return super.get('/part');
  }
}

export default new PartService();
