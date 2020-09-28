package com.note4com.service.core;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.note4com.model.Notes;
import com.note4com.repository.NotesRepository;

@Service
public class NotesServiceImpl implements NotesService {

	@Autowired
	NotesRepository noteRepository;

	public List<Notes> getTopNotes(String username) {
		List<Notes> notes = new ArrayList<Notes>();
		Pageable request = PageRequest.of(0, 10);
		noteRepository.findByUsername(username, request).forEach(notes::add);
		return notes;
	}

	public String createNote(Notes note) {
		Notes re = noteRepository.insert(note);
		return re.getId();
	}

	@Override
	public void updateNote(Notes note) {
		noteRepository.save(note);
	}

}
