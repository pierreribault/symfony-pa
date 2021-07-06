<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210706095145 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE "like_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE like_answer_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE road_trip_city_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE "like" (id INT NOT NULL, author_id INT NOT NULL, thread_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AC6340B3F675F31B ON "like" (author_id)');
        $this->addSql('CREATE INDEX IDX_AC6340B3E2904019 ON "like" (thread_id)');
        $this->addSql('CREATE TABLE like_answer (id INT NOT NULL, author_id INT NOT NULL, thread_answer_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_E40459D7F675F31B ON like_answer (author_id)');
        $this->addSql('CREATE INDEX IDX_E40459D7255967BB ON like_answer (thread_answer_id)');
        $this->addSql('CREATE TABLE road_trip_activity (road_trip_id INT NOT NULL, activity_id INT NOT NULL, PRIMARY KEY(road_trip_id, activity_id))');
        $this->addSql('CREATE INDEX IDX_3B656B68FBF41406 ON road_trip_activity (road_trip_id)');
        $this->addSql('CREATE INDEX IDX_3B656B6881C06096 ON road_trip_activity (activity_id)');
        $this->addSql('CREATE TABLE road_trip_city (id INT NOT NULL, city_id INT NOT NULL, previous_city_id INT DEFAULT NULL, road_trip_id INT NOT NULL, position INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_8B69CAD8BAC62AF ON road_trip_city (city_id)');
        $this->addSql('CREATE INDEX IDX_8B69CADBA37087C ON road_trip_city (previous_city_id)');
        $this->addSql('CREATE INDEX IDX_8B69CADFBF41406 ON road_trip_city (road_trip_id)');
        $this->addSql('ALTER TABLE "like" ADD CONSTRAINT FK_AC6340B3F675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "like" ADD CONSTRAINT FK_AC6340B3E2904019 FOREIGN KEY (thread_id) REFERENCES forum_thread (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE like_answer ADD CONSTRAINT FK_E40459D7F675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE like_answer ADD CONSTRAINT FK_E40459D7255967BB FOREIGN KEY (thread_answer_id) REFERENCES forum_thread_answer (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT FK_3B656B68FBF41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT FK_3B656B6881C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT FK_8B69CAD8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT FK_8B69CADBA37087C FOREIGN KEY (previous_city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT FK_8B69CADFBF41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE forum_thread_answer ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE "like_id_seq" CASCADE');
        $this->addSql('DROP SEQUENCE like_answer_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE road_trip_city_id_seq CASCADE');
        $this->addSql('DROP TABLE "like"');
        $this->addSql('DROP TABLE like_answer');
        $this->addSql('DROP TABLE road_trip_activity');
        $this->addSql('DROP TABLE road_trip_city');
        $this->addSql('ALTER TABLE forum_thread_answer DROP updated_at');
    }
}
