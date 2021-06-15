<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210610113218 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE road_trip_user_id_seq CASCADE');
        $this->addSql('DROP TABLE road_trip_user');
        $this->addSql('ALTER TABLE road_trip ADD author INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE road_trip_user_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE road_trip_user (id INT NOT NULL, user_id INT NOT NULL, road_trip_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX uniq_a87e48d0a76ed395 ON road_trip_user (user_id)');
        $this->addSql('CREATE UNIQUE INDEX uniq_a87e48d0fbf41406 ON road_trip_user (road_trip_id)');
        $this->addSql('ALTER TABLE road_trip_user ADD CONSTRAINT fk_a87e48d0a76ed395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_user ADD CONSTRAINT fk_a87e48d0fbf41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip DROP author');
    }
}
