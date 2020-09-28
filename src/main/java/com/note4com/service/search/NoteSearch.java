package com.note4com.service.search;

import java.util.List;

import com.note4com.model.Notes;

public interface  NoteSearch {
	List<Notes> search(String username, String keyword);
}
