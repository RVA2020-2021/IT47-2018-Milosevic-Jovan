-- TEST DATA

INSERT INTO "nationality"("id", "name", "abbreviation")
VALUES (-100, 'TEST_NAME', 'TEST');
INSERT INTO "league"("id", "name", "label")
VALUES (-100, 'TEST_NAME', 'TEST_LABEL');
INSERT INTO "team"("id", "name", "founding_date", "place", "league")
VALUES (-100, 'TEST_NAME', to_date('08.09.2021.', 'dd.mm.yyyy.'), 'TEST_PLACE', -100);
INSERT INTO "player"("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team")
VALUES (-100, 'TEST_FIRST_NAME', 'TEST_LAST_NAME', '0000', to_date('08.09.2021.', 'dd.mm.yyyy.'), -100, -100);

-- LEAGUE

INSERT INTO "league" ("id", "name", "label") VALUES (1, 'Premier League', 'PREM');
INSERT INTO "league" ("id", "name", "label") VALUES (2, 'UEFA Champions League', 'UEFA_CHAMP');
INSERT INTO "league" ("id", "name", "label") VALUES (3, 'Bundesliga', 'BUNDES');
INSERT INTO "league" ("id", "name", "label") VALUES (4, 'LaLiga', 'LALIGA');
INSERT INTO "league" ("id", "name", "label") VALUES (5, 'UEFA Europa League', 'UEFA_EUROPA');
INSERT INTO "league" ("id", "name", "label") VALUES (6, 'World Cup', 'WORLD');
INSERT INTO "league" ("id", "name", "label") VALUES (7, 'Serie A', 'SERIE_A');
INSERT INTO "league" ("id", "name", "label") VALUES (8, 'Ligue 1', 'LIGUE_1');
INSERT INTO "league" ("id", "name", "label") VALUES (9, 'Primeira Liga', 'PRIMIERA');
INSERT INTO "league" ("id", "name", "label") VALUES (10, 'Serbian SuperLiga', 'SRB_SUPERLIGA');

-- NATIONALITY

INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (1, 'Serbian', 'RS');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (2, 'Spanish', 'ES');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (3, 'English', 'GB');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (4, 'German', 'DE');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (5, 'Italian', 'IT');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (6, 'Portuguese', 'PT');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (7, 'Russian', 'RU');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (8, 'Denmark', 'DE');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (9, 'French', 'FR');
INSERT INTO "nationality" ("id", "name", "abbreviation") VALUES (10, 'Argentine', 'AR');

-- TEAM

INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (1, 'Bayern München', '1946-01-01', 'München', 3);
INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (2, 'Manchester City', '1880-01-01', 'Manchester', 1);
INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (3, 'Inter Milan', '1909-01-01', 'Milan', 7);
INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (4, 'Chelsea FC', '1905-03-10', 'Western London', 1);
INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (5, 'Paris Saint-Germain', '1970-08-12', 'Paris', 8);
INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (6, 'Barcelona', '1899-11-29', 'Barcelona', 4);
INSERT INTO "team" ("id", "name", "founding_date", "place", "league") VALUES (7, 'Ajax Amsterdam', '1900-03-18', 'Amsterdam', 5);

-- PLAYER

INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (1, 'Cristiano', 'Ronaldo', 'CR_#7', '1985-02-05', 6, 2);
INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (3, 'Christian', 'Eriksen', 'CE_#24', '1992-02-14', 8, 3);
INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (4, 'Thomas', 'Müller', 'TM_#25', '1989-09-13', 4, 1);
INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (5, 'Eric', 'Garcia', 'ER_#24', '2001-01-09', 2, 6);
INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (6, 'Gerard', 'Piqué', 'GP_#3', '1987-02-02', 2, 6);
INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (2, 'Lionel', 'Messi', 'LM_#30', '1987-06-24', 10, 5);
INSERT INTO "player" ("id", "first_name", "last_name", "registration_number", "date_of_birth", "nationality", "team") VALUES (7, 'Edouard', 'Mendy', 'EM_#16', '1992-03-01', 9, 4);