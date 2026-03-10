CREATE DATABASE IF NOT EXISTS bravup;

USE bravup;

CREATE TABLE clubs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  church VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  logo VARCHAR(255)
);

CREATE TABLE units (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  club_id INT NOT NULL,
  counselor_id INT,
  associate_counselor_id INT,
  FOREIGN KEY (club_id) REFERENCES clubs(id)
);

CREATE TABLE members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('System Admin', 'Director', 'Associate Director', 'Secretary', 'Treasurer', 'Chaplain', 'Instructor', 'Unit Counselor', 'Associate Counselor', 'Pathfinder') NOT NULL,
  club_id INT,
  unit_id INT,
  FOREIGN KEY (club_id) REFERENCES clubs(id),
  FOREIGN KEY (unit_id) REFERENCES units(id)
);

ALTER TABLE units ADD FOREIGN KEY (counselor_id) REFERENCES members(id);
ALTER TABLE units ADD FOREIGN KEY (associate_counselor_id) REFERENCES members(id);

CREATE TABLE competitions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  club_id INT NOT NULL,
  start_date DATE,
  end_date DATE,
  active BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (club_id) REFERENCES clubs(id)
);

CREATE TABLE point_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  club_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  points INT NOT NULL,
  type ENUM('positive', 'negative') NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (club_id) REFERENCES clubs(id)
);

CREATE TABLE point_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT,
  unit_id INT,
  competition_id INT,
  points INT NOT NULL,
  reason TEXT,
  created_by INT NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES members(id),
  FOREIGN KEY (unit_id) REFERENCES units(id),
  FOREIGN KEY (competition_id) REFERENCES competitions(id),
  FOREIGN KEY (created_by) REFERENCES members(id)
);