package com.note4com.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.note4com.model.Notes;

public interface NotesRepository extends MongoRepository<Notes, String> {
	List<Notes> findByTitle(String title);

	List<Notes> findByUsername(final String username);

	@Query("{'content.key': ?0}")
	List<Notes> findByCountry(final String key);
}
