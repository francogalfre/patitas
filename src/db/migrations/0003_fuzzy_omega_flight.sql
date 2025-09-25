CREATE TABLE "pets" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"species" text NOT NULL,
	"breed" text NOT NULL,
	"age" integer NOT NULL,
	"gender" text NOT NULL,
	"description" text NOT NULL,
	"location" text,
	"status" text DEFAULT 'disponible',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pets" ADD CONSTRAINT "pets_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;