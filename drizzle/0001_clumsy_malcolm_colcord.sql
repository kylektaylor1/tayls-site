ALTER TABLE `contact` RENAME COLUMN "text" TO "name";--> statement-breakpoint
ALTER TABLE `contact` ADD `email` text;--> statement-breakpoint
ALTER TABLE `contact` ADD `message` text;