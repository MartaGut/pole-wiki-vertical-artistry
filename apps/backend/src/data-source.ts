import { DataSource } from 'typeorm';
import { PoleFigurine } from './entities/pole-figurine.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [PoleFigurine],
  migrations: ['./src/migrations/**'],
  synchronize: false,
});

export default AppDataSource;
