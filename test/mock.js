import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

mock.onGet('/').reply(200, {
  message: 'Hello World',
});
