---
title: "Introduction to Data Modeling"
date: "2019-05-02"
# attachments:
#   - "../images/.many-to-many.png"
---

---
###Definitions
- ***Constraints*** - A constraint can be thought of as a unique primary key but for multple columns
- ***Data Normalization*** - Requires a primary key in every table

---

##Relationships

- ###One to one 
  - *Example: a government database where every person has a social security number*
- ###One to many - 
  - **The most common relationship**
  - Requires a foreign key on the many table
      - Foreign keys should be not nullable. Foreign must be the same type as the primary key on the one table. Typically an integer.
      - ***Examples***
          - A cohort has many students 
              - *Each cohort has an integer primary key therefore the students table requires an integer cohortId* 
          - A track has many cohorts
              - *Each track has an integer primary key therefore the cohorts table requires an integer trackId*
- ###Many to many
  - **Many to many relationships require a third table**
      - *Example - A student can defer to a different cohort*
          - A third table called StudentCohorts or CohortStudents is **required**
          - The third table is like a one to many table in both directions
          - This third table will contain the following columns
              - *A primary key of id (not required)*
              - *A foreign key of cohortId*
              - *A foreign key of studentId*
  
            ![Many to many relationship](https://i.ibb.co/wSySNzK/many-to-many.png "Many to many relationship")

---

###Guided Demo
1. Run `npx knex init` to create a knexfile.js
2. Modify knexfile.js
```
    module.exports = {
        development: {
            client: 'sqlite3',
            useNullasDefault: true,
            connection: { 
                filename: '/data/nameOfYourDatabase.db3' 
            },
            migrations: { 
                directory: './data/migrations' 
            },
            seeds: { 
                directory: './data/seeds'
            }
        }
    };
```
3.  Run `npx knex migrate: make name_of_your_table`
4.  Modify new yyyymmmdd...js migrations file in /migrations
    - *Note: yyyymmdd is the current year, month and date*
    - *E.g. 20190501timestamp_tableName.js*
  
```
exports.up = function (knex, Promise) {
    // the tables most be created in the right order,
    // tables with FK are created after the referenced table is created
    return knex.schema
        .createTable('tracks', tbl => {
            // Creates an auto-incrementing primary key
            tbl.increments();

            // Creates a unique not null string called name
            tbl
                .string('name', 128)
                .notNullable()
                .unique();
        })
        .createTable('cohorts', tbl => {
            // the tracks table must be created before this table is created
            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
                .unique();

            tbl
                // Creates a foreign key called track ID
                .integer('track_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tracks')
                // Prevents deleting an existing cohort that belongs to a track
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('students', tbl => {
            tbl.increments();

            tbl.string('name', 128).notNullable();
        })
        .createTable('cohort_students', tbl => {
            // the students and cohorts tables must be created before this table is created
            tbl.increments();

            tbl
                .integer('cohort_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cohorts')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl
                .integer('student_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('students')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        });
};

exports.down = function (knex, Promise) {
    // tables with FK must be removed before the referenced table is removed
    return knex.schema
        .dropTableIfExists('cohort_students')
        .dropTableIfExists('students')
        .dropTableIfExists('cohorts')
        .dropTableIfExists('tracks');
};

```