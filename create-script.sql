DROP TABLE IF EXISTS nationality CASCADE;
DROP TABLE IF EXISTS player CASCADE;
DROP TABLE IF EXISTS team CASCADE;
DROP TABLE IF EXISTS league CASCADE;

DROP SEQUENCE IF EXISTS nationality_seq;
DROP SEQUENCE IF EXISTS player_seq;
DROP SEQUENCE IF EXISTS team_seq;
DROP SEQUENCE IF EXISTS league_seq;

CREATE TABLE nationality(
	id integer not null,
	name varchar(100),
	abbreviation varchar(50)
);

CREATE TABLE player(
	id integer not null,
	first_name varchar(50),
	last_name varchar(50),
	registration_number varchar(50),
	date_of_birth date,
	nationality integer not null,
	team integer not null
);

CREATE TABLE team(
	id integer not null,
	name varchar(100),
	founding_date date,
	place varchar(100),
	league integer not null
);

CREATE TABLE league(
	id integer not null,
	name varchar(100),
	label varchar(50)
);

ALTER TABLE nationality ADD CONSTRAINT pk_nationality PRIMARY KEY(id);
ALTER TABLE player ADD CONSTRAINT pk_player PRIMARY KEY(id);
ALTER TABLE team ADD CONSTRAINT pk_team PRIMARY KEY(id);
ALTER TABLE league ADD CONSTRAINT pk_league PRIMARY KEY(id);

ALTER TABLE player ADD CONSTRAINT fk_player_nationality FOREIGN KEY(nationality) REFERENCES nationality(id);
ALTER TABLE player ADD CONSTRAINT fk_player_team FOREIGN KEY (team) REFERENCES team(id);
ALTER TABLE team ADD CONSTRAINT fk_team_league FOREIGN KEY (league) REFERENCES league(id);

CREATE INDEX idxpk_nationality ON nationality(id);
CREATE INDEX idxpk_player ON player(id);
CREATE INDEX idxpk_team ON team(id);
CREATE INDEX idxpk_league ON league(id);

CREATE INDEX idxfk_player_nationality ON player(nationality);
CREATE INDEX idxfx_player_team ON player(team);
CREATE INDEX idxfx_team_league ON team(league);

CREATE SEQUENCE nationality_seq increment 1;
CREATE SEQUENCE player_seq increment 1;
CREATE SEQUENCE team_seq increment 1;
CREATE SEQUENCE league_seq increment 1;
