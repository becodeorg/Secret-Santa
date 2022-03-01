CREATE DATABASE secretsanta

CREATE TABLE attendees(
    "id" BIGSERIAL NOT NULL PRIMARY KEY,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "hasDraw" BOOLEAN,
    "hasBeenDraw" BOOLEAN,
    "receiver" VARCHAR(255)
);

INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Eric', 'Salla', 'eric@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Abel', 'Magolu', 'abel@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Sophia', 'Cupaiolo', 'sophia@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Tom', 'Crohin', 'tom@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Diogo', 'Heinen', 'diogo.heinen@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Kelian', 'Christophe', 'kelian.christophe@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Mejrima', 'Suljkanovic', 'mejrima@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Miriam', 'Azzouz', 'miriam@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Frédéric', 'De Cooman', 'f.decooman@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Lauriane', 'Verspecht', 'hr@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Mickael', 'Vancraenenbroeck', 'mickael.vancraenenbroeck@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Tessie', 'OSullivan', 'tessie.osullivan@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Maxim', 'Berge', 'maxim.berge@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Mathilde', 'Paulus', 'mathilde.paulus@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Déborah', 'Bohy', 'intern@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Michel', 'Plainchamp', 'michel.plainchamp@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Pierre', 'Warnier', 'pierre.warnier@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Youssef', 'El Yahyaoui', 'youssef@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Dante', 'Solis', 'dante.solis@becode.org', false, '', false);
INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ('Thomas', 'Depas', 'thomas.depas@becode.org', false, '', false);