import { BaseService } from './BaseService';

class ActionService extends BaseService {
  add(data) {
    return super.post('/action', data);
  }
  get() {
    return super.get('/action');
  }
}

export default new ActionService();
