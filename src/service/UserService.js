import { BaseService } from './BaseService';

class UserService extends BaseService {
  login(data) {
    return super.post('/user/login', data);
  }
}

export default new UserService();
