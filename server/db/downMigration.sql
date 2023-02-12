DROP TABLE if exists users CASCADE;
DROP TABLE if exists skills CASCADE;
DROP TABLE if exists contacts CASCADE;
DROP TABLE if exists contact_application CASCADE;
Alter table applications drop constraint applications_user_id_fkey;

DROP TABLE if exists applications CASCADE;
Alter table applications_contacts drop constraint applications_contacts_contacts_contact_id_fkey;
DROP TABLE if exists applications_contacts CASCADE;
