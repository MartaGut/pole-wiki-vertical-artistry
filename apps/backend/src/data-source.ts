import { DataSource } from 'typeorm';
import { PoleFigurine } from './entities/pole-figurine.entity.js';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [PoleFigurine],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
export default AppDataSource;
