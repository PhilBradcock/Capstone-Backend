drop table fakestore.users;

CREATE TABLE fakestore.users (
  `UserName` varchar(255) NOT NULL,
  `PassWord` varchar(255) NOT NULL,
  `FName` varchar(255) NOT NULL,
  `LName` varchar(255) NOT NULL,
  `UserAdmin` boolean,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

select * from fakestore.users