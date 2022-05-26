import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([      
      {
        username: 'Arman',
        email: 'arman.lukac1@gmail.com',
        password: '123456789'        
      },
      {
        username: 'TESTUSER',
        email: 'test@gmail.com',
        password: '123456789'      
      },
    ])
  }
  }
}
