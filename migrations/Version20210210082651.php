<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210210082651 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE activity_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE category_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE city_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE company_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE contact_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE forum_thread_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE forum_thread_answer_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE image_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE person_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE road_trip_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE road_trip_activity_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE road_trip_city_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE activity (id INT NOT NULL, city_id INT NOT NULL, company_id INT NOT NULL, name VARCHAR(255) NOT NULL, description TEXT NOT NULL, reservation_url TEXT DEFAULT NULL, address TEXT NOT NULL, phone VARCHAR(20) DEFAULT NULL, longitude DOUBLE PRECISION NOT NULL, latitude DOUBLE PRECISION NOT NULL, menu TEXT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AC74095A8BAC62AF ON activity (city_id)');
        $this->addSql('CREATE INDEX IDX_AC74095A979B1AD6 ON activity (company_id)');
        $this->addSql('CREATE TABLE category (id INT NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE category_activity (category_id INT NOT NULL, activity_id INT NOT NULL, PRIMARY KEY(category_id, activity_id))');
        $this->addSql('CREATE INDEX IDX_1B0E8D2112469DE2 ON category_activity (category_id)');
        $this->addSql('CREATE INDEX IDX_1B0E8D2181C06096 ON category_activity (activity_id)');
        $this->addSql('CREATE TABLE city (id INT NOT NULL, name VARCHAR(255) NOT NULL, region VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, region_code INT NOT NULL, city_code INT NOT NULL, longitude DOUBLE PRECISION NOT NULL, latitude DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE company (id INT NOT NULL, account_id INT NOT NULL, name VARCHAR(255) NOT NULL, siret VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, site_url TEXT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4FBF094F9B6B5FBA ON company (account_id)');
        $this->addSql('CREATE TABLE contact (id INT NOT NULL, company_id INT DEFAULT NULL, subject VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, message TEXT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_4C62E638979B1AD6 ON contact (company_id)');
        $this->addSql('CREATE TABLE forum_thread (id INT NOT NULL, author_id INT NOT NULL, road_trip_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, description TEXT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_298F7F52F675F31B ON forum_thread (author_id)');
        $this->addSql('CREATE INDEX IDX_298F7F52FBF41406 ON forum_thread (road_trip_id)');
        $this->addSql('CREATE TABLE forum_thread_answer (id INT NOT NULL, author_id INT NOT NULL, forum_thread_id INT NOT NULL, content TEXT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_835C2DDBF675F31B ON forum_thread_answer (author_id)');
        $this->addSql('CREATE INDEX IDX_835C2DDBDCD9C44F ON forum_thread_answer (forum_thread_id)');
        $this->addSql('CREATE TABLE image (id INT NOT NULL, activity_id INT NOT NULL, image VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_C53D045F81C06096 ON image (activity_id)');
        $this->addSql('CREATE TABLE person (id INT NOT NULL, account_id INT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_34DCD1769B6B5FBA ON person (account_id)');
        $this->addSql('CREATE TABLE road_trip (id INT NOT NULL, author_id INT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_626235CAF675F31B ON road_trip (author_id)');
        $this->addSql('CREATE TABLE road_trip_activity (id INT NOT NULL, activity_id INT NOT NULL, road_trip_city_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3B656B6881C06096 ON road_trip_activity (activity_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3B656B684817D8A4 ON road_trip_activity (road_trip_city_id)');
        $this->addSql('CREATE TABLE road_trip_city (id INT NOT NULL, city_id INT NOT NULL, previous_city_id INT DEFAULT NULL, road_trip_id INT NOT NULL, position INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_8B69CAD8BAC62AF ON road_trip_city (city_id)');
        $this->addSql('CREATE INDEX IDX_8B69CADBA37087C ON road_trip_city (previous_city_id)');
        $this->addSql('CREATE INDEX IDX_8B69CADFBF41406 ON road_trip_city (road_trip_id)');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, is_verified BOOLEAN NOT NULL, address VARCHAR(255) DEFAULT NULL, phone VARCHAR(30) DEFAULT NULL, enabled BOOLEAN DEFAULT \'false\' NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095A8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095A979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE category_activity ADD CONSTRAINT FK_1B0E8D2112469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE category_activity ADD CONSTRAINT FK_1B0E8D2181C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE company ADD CONSTRAINT FK_4FBF094F9B6B5FBA FOREIGN KEY (account_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE forum_thread ADD CONSTRAINT FK_298F7F52F675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE forum_thread ADD CONSTRAINT FK_298F7F52FBF41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE forum_thread_answer ADD CONSTRAINT FK_835C2DDBF675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE forum_thread_answer ADD CONSTRAINT FK_835C2DDBDCD9C44F FOREIGN KEY (forum_thread_id) REFERENCES forum_thread (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE person ADD CONSTRAINT FK_34DCD1769B6B5FBA FOREIGN KEY (account_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip ADD CONSTRAINT FK_626235CAF675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT FK_3B656B6881C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT FK_3B656B684817D8A4 FOREIGN KEY (road_trip_city_id) REFERENCES road_trip_city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT FK_8B69CAD8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT FK_8B69CADBA37087C FOREIGN KEY (previous_city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT FK_8B69CADFBF41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE category_activity DROP CONSTRAINT FK_1B0E8D2181C06096');
        $this->addSql('ALTER TABLE image DROP CONSTRAINT FK_C53D045F81C06096');
        $this->addSql('ALTER TABLE road_trip_activity DROP CONSTRAINT FK_3B656B6881C06096');
        $this->addSql('ALTER TABLE category_activity DROP CONSTRAINT FK_1B0E8D2112469DE2');
        $this->addSql('ALTER TABLE activity DROP CONSTRAINT FK_AC74095A8BAC62AF');
        $this->addSql('ALTER TABLE road_trip_city DROP CONSTRAINT FK_8B69CAD8BAC62AF');
        $this->addSql('ALTER TABLE road_trip_city DROP CONSTRAINT FK_8B69CADBA37087C');
        $this->addSql('ALTER TABLE activity DROP CONSTRAINT FK_AC74095A979B1AD6');
        $this->addSql('ALTER TABLE contact DROP CONSTRAINT FK_4C62E638979B1AD6');
        $this->addSql('ALTER TABLE forum_thread_answer DROP CONSTRAINT FK_835C2DDBDCD9C44F');
        $this->addSql('ALTER TABLE forum_thread DROP CONSTRAINT FK_298F7F52FBF41406');
        $this->addSql('ALTER TABLE road_trip_city DROP CONSTRAINT FK_8B69CADFBF41406');
        $this->addSql('ALTER TABLE road_trip_activity DROP CONSTRAINT FK_3B656B684817D8A4');
        $this->addSql('ALTER TABLE company DROP CONSTRAINT FK_4FBF094F9B6B5FBA');
        $this->addSql('ALTER TABLE forum_thread DROP CONSTRAINT FK_298F7F52F675F31B');
        $this->addSql('ALTER TABLE forum_thread_answer DROP CONSTRAINT FK_835C2DDBF675F31B');
        $this->addSql('ALTER TABLE person DROP CONSTRAINT FK_34DCD1769B6B5FBA');
        $this->addSql('ALTER TABLE road_trip DROP CONSTRAINT FK_626235CAF675F31B');
        $this->addSql('DROP SEQUENCE activity_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE category_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE city_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE company_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE contact_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE forum_thread_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE forum_thread_answer_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE image_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE person_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE road_trip_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE road_trip_activity_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE road_trip_city_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('DROP TABLE activity');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE category_activity');
        $this->addSql('DROP TABLE city');
        $this->addSql('DROP TABLE company');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE forum_thread');
        $this->addSql('DROP TABLE forum_thread_answer');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE person');
        $this->addSql('DROP TABLE road_trip');
        $this->addSql('DROP TABLE road_trip_activity');
        $this->addSql('DROP TABLE road_trip_city');
        $this->addSql('DROP TABLE "user"');
    }
}
