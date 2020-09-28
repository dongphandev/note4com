package com.note4com.service.manual;

import java.util.List;

import com.note4com.model.Notes;

public interface NotesService {
	
	List<Notes> getTopNotes(String username);
	
	String createNote(Notes note);
	
	void updateNote(Notes note);
}
