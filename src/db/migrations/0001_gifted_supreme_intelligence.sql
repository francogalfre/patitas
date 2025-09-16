ALTER TABLE "user" ADD COLUMN "biography" text DEFAULT 'Sin biografia por el momento' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "avatar_url" text DEFAULT 'https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMS5wbmciLCJpYXQiOjE3NTgwNTExNTEsImV4cCI6MTc4OTU4NzE1MX0.-oz7aFy0C9vGttAcyWPEl300af19t1vYh8jj94j6SI4';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "location" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "is_shelter" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "image";