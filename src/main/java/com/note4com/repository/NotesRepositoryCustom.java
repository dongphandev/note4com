package com.note4com.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.note4com.model.Notes;

public interface NotesRepositoryCustom {
	List<Notes> findByKeyword(final String key, String username, Pageable page);
}
