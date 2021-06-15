<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210610115256 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE road_trip RENAME COLUMN author TO author_id');
        $this->addSql('ALTER TABLE road_trip ADD CONSTRAINT FK_626235CAF675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_626235CAF675F31B ON road_trip (author_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE road_trip DROP CONSTRAINT FK_626235CAF675F31B');
        $this->addSql('DROP INDEX IDX_626235CAF675F31B');
        $this->addSql('ALTER TABLE road_trip RENAME COLUMN author_id TO author');
    }
}
