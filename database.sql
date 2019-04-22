
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );


CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  "full_name" varchar,
  "email" varchar UNIQUE
);

CREATE TABLE "route" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "distance" int,
  "min_days" int,
  "max_days" int,
  "difficulty" varchar,
  "description" varchar,
  "image_url" varchar
);

CREATE TABLE "trip_plan" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int REFERENCES "user",
  "trip_date" date,
  "number_days" int NOT NULL,
  "group_size" int NOT NULL,
  "difficulty" int NOT NULL,
  "route_id" int REFERENCES "route",
  "notes" varchar,
  "completed" boolean
);

CREATE TABLE "equipment" (
  "code" SERIAL PRIMARY KEY,
  "name" varchar,
  "type" varchar
);

CREATE TABLE "packlist" (
  "id" SERIAL PRIMARY KEY,
  "equipment_code" int REFERENCES "equipment",
  "status" varchar,
  "trip_plan_id" int REFERENCES "trip_plan"
);

CREATE TABLE "meal" (
  "code" SERIAL PRIMARY KEY,
  "name" varchar,
  "type" varchar
);

CREATE TABLE "meal_plan" (
  "id" SERIAL PRIMARY KEY,
  "day" int,
  "meal_type" varchar,
  "meal_code" int REFERENCES "meal",
  "quantity_people" int,
  "trip_plan_id" int REFERENCES "trip_plan"
);


-- ROUTE DATA --
INSERT INTO "route" ("name", "distance", "min_days", "max_days", "difficulty", "description", "image_url")
VALUES ('Brule Lake Loop', 41, 4, 7, 4, 'Begin at our dock paddle through Poplar, Lizz, Caribou, Horseshoe, Gaskin to Winchell. From Winchell paddle to Brule through Wanihigan, Grassy and Mulligan Lakes. Then return to Winchell through the Cones and Cliff Lakes. Cliff lake lives up to its name and truly is surrounded by cliffs. From Winchell, return to our dock through Omega, Henson, Pillsbury, and Allen to Horseshoe, caribou, Lizz, and Poplar. With the exception of Winchell and Brule, most of the lakes along this route are small. Portages are fairly easy and well traveled with the exception of a couple longer ones out of Wanihigan Lake.', 'https://images.unsplash.com/photo-1550594427-417e0a74911f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'),

		('Rose Lake Border Route', 23, 3, 5, 3, 'Beginning at Gunflint Lake, follow the legendary Voyageur Highway along the U.S.-Canadian Border through Little Gunflint, North, South, Rat, Rose, Duncan to West Bearskin Lakes, moving camp as you go. On this route you paddle through some of the Boundary Waters clearest lakes. Plan to spend at least one day sightseeing at the famed Rose Lake Stairway Portage and Falls. Since most of the lakes are large on this route, wind could force you to hold-up at a campsite. No problem though! This delay would give you chance to do a little hiking on the Border Route Hiking Trail.', 'https://images.unsplash.com/photo-1537922028346-65f0347ae965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'),
		
		('Rose Lake Base Camp', 12, 2, 4, 2, 'Put in at West Bearskin Lake and travel through Duncan Lake to Rose Lake along the U.S.-Canadian Border. Base camp at either Duncan or Rose. Plan on spending at least one day at the famed Stairway portage and Rose Lake Falls. Nice bathing under the falls and Rose is a great lake for swimming. Rose Lake is considered by many to be one of the most beautiful lakes in the BWCA. Return through Duncan or loop back through Daniels Lake along old railroad grade portage. Watch for large beaver pond that regularly floods the trail, making passage difficult. Return to West Bearskin. Trip can be extended by portaging from Rose over the long portage to Rove Lake then paddle through Rove, Watap, Mountain and Clearwater Lakes, ending at the Clearwater public landing.', 'https://images.unsplash.com/photo-1537922028346-65f0347ae965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'),
		
		('Alder and Crystal Lakes', 9, 2, 4, 1, 'Start at East Bearskin lake then base camp on Alder or Canoes. Take a side trip hiking over the challenging Canoe to Pine Lake Portage to view Johnson Falls. You might want to try taking a dip in the pool below the falls. Return route to East Bearskin or Flour Lake. If you are on the Bike-Canoe Combo, you spend a night at the Flour Lake Campground and the next morning pedal the rough Clearwater Trail or as an alternative, bike the gravel Clearwater Road back to Poplar Creek Guesthouse B&B.', 'https://images.unsplash.com/photo-1510857817970-2a7060a55c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'),
		
		('Ham Lake to Poplar', 53, 5, 8, 3, 'You begin at Ham Lake through Cross Bay Lake. Cross Bay has lots of lily pads and is a favorite of moose. From Cross Bay, canoe to Rib and George Lakes then on to Long Island with its scores of islands, fine campsites and outstanding lake trout fishing. Long Island is a good place to spend a night or two. Canoe from Long Island to Poplar via either of two routes. The first route is through a series of small lakes with long-rugged portages into Banadad, the Rushes, Skipper, and ending at our place on Poplar Lake. This route is very remote and worth the extra effort. The other route you canoe from Long Island is through Muskeg, Kiskadinna, Omega, Hanson, Pillsbury, Allen and into Horseshoe, Caribou Lizz and back to our dock on Poplar Lake. This alternative offers shorter, more traveled portages. The lakes in both routes tend to be small and narrow. With either route, you are going to see a lot of the BWCA.', 'https://images.unsplash.com/photo-1539966353556-ea42146f672a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=663&q=80'),
		
		('Johnson Falls Loop', 28, 3, 5, 2, 'Start at East Bearskin through Alder and Canoe Lake then over the challenging Canoe-Pine Lakes Portage to Pine Lake. Plan to spend at least a day on Pine to view Johnson Falls and taking in the lakes great fishing. You might want to try taking a dip in the pool below the falls. Return route through Caribou, Deer Lakes and finish at Flour Lake. If you are on the Bike-Canoe Combo you spend your last night on the trail at the Flour Lake Campground. The next morning, pedal the rough Clearwater Trail or as alternative, bike the gravel Clearwater Road back to Poplar Creek Guesthouse B&B.', 'https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80');


-- MEAL DATA --
INSERT INTO "meal" ("name", "type")
VALUES ('Instant Oatmeal', 'Breakfast'),
		('Pancake Mix', 'Breakfast'),
		('Breakfast Bars', 'Breakfast'),
		('Granola', 'Breakfast'),
		('Breakfast Skillet', 'Breakfast'),
		('Breakfast Hash', 'Breakfast');
		
INSERT INTO "meal" ("name", "type")
VALUES ('Dried Fruit', 'Snacks'),
		('Fresh Fruit', 'Snacks'),
		('Fig Bars', 'Snacks'),
		('Jerky', 'Snacks'),
		('Trail Mix', 'Snacks'),
		('Veggies', 'Snacks');

INSERT INTO "meal" ("name", "type")
VALUES ('Jerky & Cheese', 'Lunch'),
		('Beef Sticks & Cheese', 'Lunch'),
		('Energy Bar', 'Lunch'),
		('Trail Mix', 'Lunch'),
		('Tortillas, PB & J', 'Lunch');

INSERT INTO "meal" ("name", "type")
VALUES ('Chili Mac', 'Dinner'),
		('Pad Thai', 'Dinner'),
		('Beef Stroganoff', 'Dinner'),
		('Chicken Fajita Bowl', 'Dinner'),
		('Chicken & Dumplings', 'Dinner'),
		('Lasagna', 'Dinner');

INSERT INTO "meal" ("name", "type")
VALUES ('Instant Tea', 'Beverage'),
		('Coffee', 'Beverage'),
		('Powdered Milk', 'Beverage'),
		('Powdered Juice', 'Beverage'),
		('Hot Cocoa', 'Beverage');

		

-- EQUIPMENT DATA --
INSERT INTO "equipment" ("name", "type")
VALUES ('Tent', 'shared'),
		('Tarp', 'shared'),
		('Sleeping Bag', 'shared'),
		('Sleeping Pad', 'shared'),
		('Portage Packs', 'shared'),
		
		('Camp Stove', 'shared'),
		('Fuel', 'shared'),
		('Coffee Pot', 'shared'),
		('Fry Pan', 'shared'),
		('Pot with Lid', 'shared'),
		('Hot Pad', 'shared'),
		
		('Plates', 'shared'),
		('Bowls', 'shared'),
		('Serving Spoon', 'shared'),
		('Spatula', 'shared'),
		('Measuring Cup', 'shared'),
		('Utensils', 'shared'),
		('Hot Drinks Mug', 'shared'),
		
		('Folding water bucket', 'shared'),
		('Dish Soap', 'shared'),
		('Dish Cloth', 'shared'),
		('Food Pack or Bear Barrel', 'shared'),
		('System for Hanging Food', 'shared'),
		
		('Saw', 'shared'),
		('Towel', 'shared'),
		('Garbage Bags', 'shared'),
		('Ziplocs', 'shared'),
		('Duct Tape', 'shared'),
		('Matches & Lighters', 'shared'),
		('Firestarters', 'shared'),
		
		('Toilet Paper', 'shared'),
		('Hand Sanitizer', 'shared');

INSERT INTO "equipment" ("name", "type")
VALUES ('Full Change of Clothes', 'personal'),
		('Wet Shoes', 'personal'),
		('Dry Shoes', 'personal'),
		('Raincoat', 'personal'),
		('Hat', 'personal'),
		('Dry Bag', 'personal'),
		
		('Sunscreen', 'personal'),
		('Bug Spray', 'personal'),
		('Lip Balm', 'personal'),
		('Toiletries (unscented)', 'personal'),
		('Toothpaste', 'personal'),
		('Toothbrush', 'personal'),
		('Towel (microfiber)', 'personal'),
		
		('Water Bottle', 'personal'),
		('Sunglasses', 'personal'),
		
		('Multi-Tool', 'shared'),
		('Knife', 'shared'),
		('Map', 'shared'),
		('Compass', 'shared'),
		('First Aid Kit', 'shared'),
		('Water Filter', 'shared'),
		('Extra Rope', 'personal');
