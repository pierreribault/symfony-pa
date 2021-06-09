<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210609161438 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE road_trip_activity DROP CONSTRAINT fk_3b656b684817d8a4');
        $this->addSql('DROP SEQUENCE road_trip_activity_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE road_trip_city_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE road_trip_user_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE road_trip_user (id INT NOT NULL, user_id INT NOT NULL, road_trip_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_A87E48D0A76ED395 ON road_trip_user (user_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_A87E48D0FBF41406 ON road_trip_user (road_trip_id)');
        $this->addSql('ALTER TABLE road_trip_user ADD CONSTRAINT FK_A87E48D0A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_user ADD CONSTRAINT FK_A87E48D0FBF41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE road_trip_city');
        $this->addSql('ALTER TABLE road_trip DROP CONSTRAINT fk_626235caf675f31b');
        $this->addSql('DROP INDEX idx_626235caf675f31b');
        $this->addSql('ALTER TABLE road_trip ADD ulid UUID NOT NULL');
        $this->addSql('ALTER TABLE road_trip ADD departure VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE road_trip ADD arrival VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE road_trip DROP author_id');
        $this->addSql('COMMENT ON COLUMN road_trip.ulid IS \'(DC2Type:ulid)\'');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_626235CAC288C859 ON road_trip (ulid)');
        $this->addSql('ALTER TABLE road_trip_activity DROP CONSTRAINT FK_3B656B6881C06096');
        $this->addSql('DROP INDEX uniq_3b656b684817d8a4');
        $this->addSql('DROP INDEX uniq_3b656b6881c06096');
        $this->addSql('ALTER TABLE road_trip_activity ADD road_trip_id INT NOT NULL');
        $this->addSql('ALTER TABLE road_trip_activity DROP id');
        $this->addSql('ALTER TABLE road_trip_activity DROP road_trip_city_id');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT FK_3B656B68FBF41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT FK_3B656B6881C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_3B656B68FBF41406 ON road_trip_activity (road_trip_id)');
        $this->addSql('CREATE INDEX IDX_3B656B6881C06096 ON road_trip_activity (activity_id)');
        $this->addSql('ALTER TABLE road_trip_activity ADD PRIMARY KEY (road_trip_id, activity_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE road_trip_user_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE road_trip_activity_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE road_trip_city_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE road_trip_city (id INT NOT NULL, city_id INT NOT NULL, previous_city_id INT DEFAULT NULL, road_trip_id INT NOT NULL, "position" INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX idx_8b69cadfbf41406 ON road_trip_city (road_trip_id)');
        $this->addSql('CREATE INDEX idx_8b69cadba37087c ON road_trip_city (previous_city_id)');
        $this->addSql('CREATE INDEX idx_8b69cad8bac62af ON road_trip_city (city_id)');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT fk_8b69cad8bac62af FOREIGN KEY (city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT fk_8b69cadba37087c FOREIGN KEY (previous_city_id) REFERENCES city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_city ADD CONSTRAINT fk_8b69cadfbf41406 FOREIGN KEY (road_trip_id) REFERENCES road_trip (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE road_trip_user');
        $this->addSql('DROP INDEX UNIQ_626235CAC288C859');
        $this->addSql('ALTER TABLE road_trip ADD author_id INT NOT NULL');
        $this->addSql('ALTER TABLE road_trip DROP ulid');
        $this->addSql('ALTER TABLE road_trip DROP departure');
        $this->addSql('ALTER TABLE road_trip DROP arrival');
        $this->addSql('ALTER TABLE road_trip ADD CONSTRAINT fk_626235caf675f31b FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_626235caf675f31b ON road_trip (author_id)');
        $this->addSql('ALTER TABLE road_trip_activity DROP CONSTRAINT FK_3B656B68FBF41406');
        $this->addSql('ALTER TABLE road_trip_activity DROP CONSTRAINT fk_3b656b6881c06096');
        $this->addSql('DROP INDEX IDX_3B656B68FBF41406');
        $this->addSql('DROP INDEX IDX_3B656B6881C06096');
        $this->addSql('DROP INDEX road_trip_activity_pkey');
        $this->addSql('ALTER TABLE road_trip_activity ADD road_trip_city_id INT NOT NULL');
        $this->addSql('ALTER TABLE road_trip_activity RENAME COLUMN road_trip_id TO id');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT fk_3b656b684817d8a4 FOREIGN KEY (road_trip_city_id) REFERENCES road_trip_city (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE road_trip_activity ADD CONSTRAINT fk_3b656b6881c06096 FOREIGN KEY (activity_id) REFERENCES activity (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX uniq_3b656b684817d8a4 ON road_trip_activity (road_trip_city_id)');
        $this->addSql('CREATE UNIQUE INDEX uniq_3b656b6881c06096 ON road_trip_activity (activity_id)');
        $this->addSql('ALTER TABLE road_trip_activity ADD PRIMARY KEY (id)');
    }
}
