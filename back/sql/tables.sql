CREATE TYPE gender_type AS ENUM ('Man','Woman','Other');
CREATE TYPE travel_status AS ENUM ('in work','validated','plan paid','all paid');
CREATE TYPE user_type AS ENUM ('visitor','guide');

CREATE TABLE app_user(
   Id SERIAL,
   username VARCHAR(50) NOT NULL,
   name VARCHAR(50),
   lastname VARCHAR(50),
   mail VARCHAR(50) NOT NULL,
   age DECIMAL(15,2),
   hashed_password VARCHAR(100) NOT NULL,
   gender gender_type, 
   identity_checked BOOLEAN,
   PRIMARY KEY(Id),
   UNIQUE(username),
   UNIQUE(mail)
);

CREATE TABLE visitor(
   Id INT,
   PRIMARY KEY(Id),
   FOREIGN KEY(Id) REFERENCES app_user(Id)
);

CREATE TABLE guide(
   Id INT,
   price_day_pan DECIMAL(15,2),
   price_hour_remote VARCHAR(50),
   price_hour_full DECIMAL(15,2),
   location TEXT,
   iban VARCHAR(34) NOT NULL,
   car BOOLEAN,
   PRIMARY KEY(Id),
   FOREIGN KEY(Id) REFERENCES app_user(Id)
);

CREATE TABLE exchange(
   Id_guide INT,
   Id_visitor INT,
   PRIMARY KEY(Id_guide, Id_visitor),
   FOREIGN KEY(Id_guide) REFERENCES guide(Id),
   FOREIGN KEY(Id_visitor) REFERENCES visitor(Id)
);

CREATE TABLE Thems(
   Id_Thems SERIAL,
   Name VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_Thems),
   UNIQUE(Name)
);

CREATE TABLE avaliabilities(
   Id_guide INT,
   Id_avaliabilities SERIAL,
   remote BOOLEAN,
   full_in_person BOOLEAN,
   start_date DATE,
   end_date DATE,
   PRIMARY KEY(Id_guide, Id_avaliabilities),
   FOREIGN KEY(Id_guide) REFERENCES guide(Id)
);

CREATE TABLE travel(
   Id_guide INT,
   Id_visitor INT,
   Id_travel SERIAL,
   start_date DATE,
   end_date DATE,
   price_plan NUMERIC(15, 2),
   price_service NUMERIC(15, 2),
   price_extra NUMERIC(15, 2),
   nb_childs DECIMAL(3,0),
   status travel_status,
   nb_adults DECIMAL(3,0),
   animals BOOLEAN,
   disability BOOLEAN,
   location TEXT NOT NULL,
   PRIMARY KEY(Id_guide, Id_visitor, Id_travel),
   FOREIGN KEY(Id_guide, Id_visitor) REFERENCES exchange(Id_guide, Id_visitor)
);

CREATE TABLE chat(
   Id_guide INT,
   Id_visitor INT,
   started DATE,
   PRIMARY KEY(Id_guide, Id_visitor),
   FOREIGN KEY(Id_guide, Id_visitor) REFERENCES exchange(Id_guide, Id_visitor)
);

CREATE TABLE activity(
   Id_guide INT,
   Id_visitor INT,
   Id_travel INT,
   Id_activity SERIAL,
   name VARCHAR(50) NOT NULL,
   type BOOLEAN,
   start_time TIMESTAMP NOT NULL,
   end_time TIMESTAMP NOT NULL,
   description VARCHAR(50),
   location TEXT,
   PRIMARY KEY(Id_guide, Id_visitor, Id_travel, Id_activity),
   FOREIGN KEY(Id_guide, Id_visitor, Id_travel) REFERENCES travel(Id_guide, Id_visitor, Id_travel)
);

CREATE TABLE message(
   Id_guide INT,
   Id_visitor INT,
   Id_message SERIAL,
   content TEXT,
   date_time TIMESTAMP,
   PRIMARY KEY(Id_guide, Id_visitor, Id_message),
   FOREIGN KEY(Id_guide, Id_visitor) REFERENCES chat(Id_guide, Id_visitor)
);

CREATE TABLE evaluation(
   Id_guide INT,
   Id_visitor INT,
   Id_travel INT,
   from_who user_type,
   global_note DECIMAL(2,1) NOT NULL,
   security DECIMAL(2,1),
   fun DECIMAL(2,1),
   amability DECIMAL(2,1),
   value_for_money DECIMAL(2,1),
   comment TEXT,
   PRIMARY KEY(Id_guide, Id_visitor, Id_travel, from_who),
   FOREIGN KEY(Id_guide, Id_visitor, Id_travel) REFERENCES travel(Id_guide, Id_visitor, Id_travel)
);

CREATE TABLE visitor_thems(
   Id INT,
   Id_Thems INT,
   PRIMARY KEY(Id, Id_Thems),
   FOREIGN KEY(Id) REFERENCES visitor(Id),
   FOREIGN KEY(Id_Thems) REFERENCES Thems(Id_Thems)
);

CREATE TABLE guide_thems(
   Id INT,
   Id_Thems INT,
   PRIMARY KEY(Id, Id_Thems),
   FOREIGN KEY(Id) REFERENCES guide(Id),
   FOREIGN KEY(Id_Thems) REFERENCES Thems(Id_Thems)
);
