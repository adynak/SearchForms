-- Schema: formsbuilder

-- DROP SCHEMA formsbuilder;

CREATE SCHEMA formsbuilder
  AUTHORIZATION postgres;

-- Sequence: formsbuilder.members_id_seq

-- DROP SEQUENCE formsbuilder.members_id_seq;

CREATE SEQUENCE formsbuilder.members_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE formsbuilder.members_id_seq
  OWNER TO postgres;

-- Table: formsbuilder.members

-- DROP TABLE formsbuilder.members;

CREATE TABLE formsbuilder.members
(
  id integer NOT NULL DEFAULT nextval('formsbuilder.members_id_seq'::regclass),
  name_first text,
  name_last text,
  name_business text,
  occupation text, 
  email text,
  phone_main text,
  phone_secondary text,
  member_since date DEFAULT now(),
  active boolean DEFAULT true,
  comments text,
  onlineid text,
  password text,
  pword_type integer,
  member_type integer, 
  CONSTRAINT members_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE formsbuilder.members
  OWNER TO postgres;
COMMENT ON COLUMN formsbuilder.members.occupation IS 'looking for president, CFO, CEO, lead dishwasher, head honcho';
COMMENT ON COLUMN formsbuilder.members.pword_type IS 'is  the password is permanent (1)  or temporary (0)?';
COMMENT ON COLUMN formsbuilder.members.member_type IS 'regularUser = 0; admin = 1';


SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = formsbuilder, pg_catalog;

INSERT INTO members (name_first, name_last, name_business, occupation, email, phone_main, phone_secondary, member_since, active, comments, onlineid, password, pword_type, member_type) VALUES ('guest', NULL, NULL, NULL, 'guest', NULL, NULL, '2017-01-23', true, NULL, 'guest', 'guest', 1, 0);
