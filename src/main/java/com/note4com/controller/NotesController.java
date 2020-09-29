package com.note4com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.note4com.model.Content;
import com.note4com.model.Notes;
import com.note4com.repository.NotesRepository;
import com.note4com.service.batch.BatchInsertData;
import com.note4com.service.core.NotesService;
import com.note4com.service.dto.NotesSearchDto;
import com.note4com.service.search.NoteSearch;

@RestController
@RequestMapping("/api")
public class NotesController {

	@Autowired
	NotesService notesService;

	@Autowired
	NoteSearch noteSearch;

	@PostMapping("/notes/search")
	public ResponseEntity<List<Notes>> getAllNotes(@RequestBody NotesSearchDto nodeSearch) {
		if (nodeSearch == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		try {
			List<Notes> notes = noteSearch.search(nodeSearch);
			if (notes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(notes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/notes/{username}")
	public ResponseEntity<List<Notes>> getAllNotes(@PathVariable(required = true) String username) {
		if (username == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		try {
			List<Notes> notes = notesService.getTopNotes(username);
			if (notes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(notes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/notes")
	public ResponseEntity<String> createNote(@RequestBody Notes note) {
		try {
			String id = notesService.createNote(note);
			return new ResponseEntity<>(id, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/notes")
	public ResponseEntity<String> updateNote(@RequestBody Notes notes) {

		try {
			notesService.updateNote(notes);
			return new ResponseEntity<>(notes.getId(), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
