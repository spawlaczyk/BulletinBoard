import moment from 'moment'

const initialState = {
  posts: [
    {
      id: '1',
      author: 'the.admin@example.com',
      created: moment().format('07/06/2022'),
      updated: moment().format('07/06/2022'),
      status: 'published',
      title: 'Welcome to our bulletin board!',
      text: 'Email me to register and get an account!',
      photo: '../images/photos/test.jpg',
      price: null,
      phone: '123456789',
      location: 'Poznań'
    },
    {
      id: '2',
      author: 'user123@example.com',
      created: moment().format('13/06/2022'),
      updated: moment().format('28/06/2022'),
      status: 'published',
      title: 'Room for rent',
      text: 'I have a spare room for rent. Low price!',
      photo: '../images/photos/test.jpg',
      price: null,
      phone: '987654321',
      location: 'Warszawa'
    }
  ],
  users: [
    {
      id: '1',
      login: 'the.admin@example.com',
      password: 'admin',
      userAdmin: true,
      avatar: null,
      phone: '123456789',
    },
    {
      id: '2',
      login: 'user123@example.com',
      password: '123',
      userAdmin: false,
      avatar: null,
      phone: '987654321',
    }
  ]
};

export default initialState;