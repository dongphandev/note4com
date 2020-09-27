package com.note4com.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.note4com.model.Notes;

public class NotesRepositoryImpl implements NotesRepositoryCustom {
	
	private final MongoTemplate mongoTemplate;
	 
	@Autowired
	public NotesRepositoryImpl(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}
	@Override
	public List<Notes> findByKeyword(String key, String username, Pageable page) {
		
		return null;
	}

}
