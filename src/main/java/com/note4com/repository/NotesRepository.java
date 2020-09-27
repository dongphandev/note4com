package com.note4com.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.note4com.model.Notes;

public interface NotesRepository extends MongoRepository<Notes, String> {
	
	Page<Notes> findByUsername(final String username, Pageable page);
}
