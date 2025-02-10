import { DataSource } from 'typeorm';
import { PoleFigurine } from './entities/pole-figurine.entity';
import { User } from './entities/user.entity';

const AppDataSource = new DataSource({
  migrationsRun: false,
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [PoleFigurine, User],
  migrations: ['./src/migrations/**.ts'],
  synchronize: false,
});

export default AppDataSource;
