import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { Transaction } from "./entity/Transaction";
import { PhotoMetadata } from "./entity/PhotoMetadata";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "p@ssword123",
  database: "typeorm",
  synchronize: true,
  logging: false,
  entities: [User, Photo, Transaction, PhotoMetadata],
  migrations: [],
  subscribers: [],
});
