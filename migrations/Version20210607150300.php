<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210607150300 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP type');
        $this->addSql('ALTER TABLE category DROP url');
        $this->addSql('ALTER TABLE city DROP region');
        $this->addSql('ALTER TABLE city DROP region_code');
        $this->addSql('ALTER TABLE city DROP city_code');
        $this->addSql('ALTER TABLE city DROP longitude');
        $this->addSql('ALTER TABLE city DROP latitude');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE city ADD region VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE city ADD region_code INT NOT NULL');
        $this->addSql('ALTER TABLE city ADD city_code INT NOT NULL');
        $this->addSql('ALTER TABLE city ADD longitude DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE city ADD latitude DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE category ADD type VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE category ADD url VARCHAR(255) NOT NULL');
    }
}
