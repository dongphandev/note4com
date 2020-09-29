package com.note4com.service.search;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.note4com.model.Notes;
import com.note4com.repository.NotesRepository;
import com.note4com.service.dto.NotesSearchDto;

public class NoteSearchImpl implements NoteSearch {
	@Autowired
	NotesRepository noteRepository;
	@Override
	public List<Notes> search(NotesSearchDto notesSearchDto) {
		// TODO Auto-generated method stub
		List<Notes> result =  noteRepository.findAll();
		if(result == null) {
			result = new ArrayList<>();
		}
		return result;
	}

}
