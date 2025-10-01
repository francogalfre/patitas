CREATE TYPE "public"."pet_age" AS ENUM('cachorro', 'joven', 'adulto', 'senior');--> statement-breakpoint
CREATE TYPE "public"."pet_gender" AS ENUM('macho', 'hembra');--> statement-breakpoint
CREATE TYPE "public"."pet_size" AS ENUM('pequeño', 'mediano', 'grande');--> statement-breakpoint
CREATE TYPE "public"."pet_species" AS ENUM('perro', 'gato', 'conejo', 'ave', 'otro');--> statement-breakpoint
CREATE TABLE "pets" (
	"id" text PRIMARY KEY NOT NULL,
	"owner_id" text NOT NULL,
	"name" text NOT NULL,
	"species" "pet_species" NOT NULL,
	"gender" "pet_gender" NOT NULL,
	"age" "pet_age" NOT NULL,
	"size" "pet_size" NOT NULL,
	"description" text NOT NULL,
	"good_with_kids" boolean DEFAULT false NOT NULL,
	"good_with_dogs" boolean DEFAULT false NOT NULL,
	"good_with_cats" boolean DEFAULT false NOT NULL,
	"is_vaccinated" boolean DEFAULT false NOT NULL,
	"is_sterilized" boolean DEFAULT false NOT NULL,
	"special_care" text,
	"photos" text[] NOT NULL,
	"contact_name" text NOT NULL,
	"contact_phone" text NOT NULL,
	"contact_email" text NOT NULL,
	"location_city" text NOT NULL,
	"is_adopted" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"biography" text DEFAULT 'Sin biografia por el momento' NOT NULL,
	"avatar_url" text DEFAULT 'https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMS5wbmciLCJpYXQiOjE3NTgwNTExNTEsImV4cCI6MTc4OTU4NzE1MX0.-oz7aFy0C9vGttAcyWPEl300af19t1vYh8jj94j6SI4' NOT NULL,
	"location" text,
	"is_shelter" boolean DEFAULT false NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pets" ADD CONSTRAINT "pets_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;