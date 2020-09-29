package com.note4com.service.search;

import java.util.List;

import com.note4com.model.Notes;
import com.note4com.service.dto.NotesSearchDto;

public interface  NoteSearch {
	List<Notes> search(NotesSearchDto notesSearchDto);
}
