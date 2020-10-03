package com.note4com.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.note4com.model.Notes;
import com.note4com.service.dto.UserDto;

@RestController
@RequestMapping("/api")
public class UserController {

	@PostMapping(value = "/login")
	public ResponseEntity<List<Notes>> login(@RequestBody UserDto user) {

		try {
			if (user.getUsername().equalsIgnoreCase("user_en") || user.getUsername().equalsIgnoreCase("user_vn")) {
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping(value = "/registration")
	public ResponseEntity<List<Notes>> registration(@RequestBody UserDto user) {

		try {
			if (user.getUsername().equalsIgnoreCase("user_en") || user.getUsername().equalsIgnoreCase("user_vn")) {
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
