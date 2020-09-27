package com.note4com.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.note4com.model.Content;
import com.note4com.model.Notes;
import com.note4com.repository.NotesRepository;
import com.note4com.service.batch.BatchInsertData;
import com.note4com.service.manual.NotesService;

@RestController
@RequestMapping("/api")
public class NotesController {

	@Autowired
	NotesRepository noteRepository;

	@Autowired
	NotesService notesService;

	@Autowired
	BatchInsertData batchInsertDataImpl;

	@GetMapping("/batch")
	public void batchUpdate() {
		batchInsertDataImpl.batchInsert();
	}

	@GetMapping("/notes/{username}")
	public ResponseEntity<List<Notes>> getAllNotes(@PathVariable(required = true) String username) {
		if (username == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		try {
			List<Notes> notes = notesService.getTopNotes(username);
			
			System.out.println("+++++Size of notes: "+ notes.size());
			if (notes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(notes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/addnote")
	public ResponseEntity<Notes> createNote(@RequestBody Notes note) {
		try {
			Notes _tutorial = noteRepository.save(note);
			return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/update")
	public ResponseEntity<Notes> addcontent() {
		Notes n = notesService.getTopNotes("dong").get(0);
		n.setTitle("Update");
		Content content = new Content();
		content.setKey("Update Key");
		content.setNote("Update Note");
		n.getContents().add(content);
		try {
			Notes t = noteRepository.save(n);
			System.out.println(t.getId());
			return new ResponseEntity<>(t, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/tutorials/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") String id) {
		try {
			noteRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
