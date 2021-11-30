-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE TABLE producers(
producer_id SERIAL,
producer_name VARCHAR (50) NOT NULL,
movie_created_id INTEGER,
PRIMARY KEY (producer_id),
FOREIGN KEY (movie_created_id) REFERENCES movies (movie_id)
);

INSERT INTO producers (producer_name, movie_created_id) VALUES
    ('Jerry Weintraub',(SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven')),
    ('Lawrence Bender',(SELECT movie_id FROM movies WHERE movie_title = 'Good Will Hunting'));
	
SELECT movies.movie_title, producers.producer_name, movies.movie_story
FROM movies
INNER JOIN producers
ON producers.movie_created_id = movies.movie_id;
