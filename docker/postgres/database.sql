-- Adminer 4.8.1 PostgreSQL 12.1 (Debian 12.1-1.pgdg100+1) dump

\connect "postgres";

-- DROP TABLE IF EXISTS "secret-santa";
-- DROP SEQUENCE IF EXISTS "secret-santa_id_seq";
CREATE SEQUENCE "secret-santa_id_seq" INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 CACHE 20;

CREATE TABLE "public"."secret-santa" (
    "id" bigint DEFAULT nextval('"secret-santa_id_seq"') NOT NULL,
    "firstname" character varying(255) NOT NULL,
    "lastname" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    "hasDraw" boolean,
    "hasBeenDraw" boolean,
    "receiver" character varying(255),
    CONSTRAINT "secret-santa_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "secret-santa" ("id", "firstname", "lastname", "email", "hasDraw", "hasBeenDraw", "receiver") VALUES
(1,	'Eric',	'Salla',	'eric@becode.org',	'0',	'0',	''),
(2,	'Abel',	'Magolu',	'abel@becode.org',	'0',	'0',	''),
(3,	'Sophia',	'Cupaiolo',	'sophia@becode.org',	'0',	'0',	''),
(4,	'Tom',	'Crohin',	'tom@becode.org',	'0',	'0',	''),
(5,	'Diogo',	'Heinen',	'diogo.heinen@becode.org',	'0',	'0',	''),
(6,	'Kelian',	'Christophe',	'kelian.christophe@becode.org',	'0',	'0',	''),
(7,	'Mejrima',	'Suljkanovic',	'mejrima@becode.org',	'0',	'0',	''),
(8,	'Miriam',	'Azzouz',	'miriam@becode.org',	'0',	'0',	''),
(9,	'Frédéric',	'De Cooman',	'f.decooman@becode.org',	'0',	'0',	''),
(10,	'Lauriane',	'Verspecht',	'hr@becode.org',	'0',	'0',	''),
(11,	'Mickael',	'Vancraenenbroeck',	'mickael.vancraenenbroeck@becode.org',	'0',	'0',	''),
(12,	'Tessie',	'OSullivan',	'tessie.osullivan@becode.org',	'0',	'0',	''),
(13,	'Maxim',	'Berge',	'maxim.berge@becode.org',	'0',	'0',	''),
(14,	'Mathilde',	'Paulus',	'mathilde.paulus@becode.org',	'0',	'0',	''),
(15,	'Déborah',	'Bohy',	'intern@becode.org',	'0',	'0',	''),
(16,	'Michel',	'Plainchamp',	'michel.plainchamp@becode.org',	'0',	'0',	''),
(17,	'Pierre',	'Warnier',	'pierre.warnier@becode.org',	'0',	'0',	''),
(18,	'Youssef',	'El Yahyaoui',	'youssef@becode.org',	'0',	'0',	''),
(19,	'Dante',	'Solis',	'dante.solis@becode.org',	'0',	'0',	''),
(20,	'Thomas',	'Depas',	'thomas.depas@becode.org',	'0',	'0',	'');

-- 2022-03-01 14:01:45.77507+00
