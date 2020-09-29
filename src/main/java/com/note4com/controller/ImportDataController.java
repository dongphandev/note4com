package com.note4com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.note4com.service.batch.BatchInsertData;

@Controller
public class ImportDataController {
	@Autowired
	BatchInsertData batchInsertDataImpl;
	

	@GetMapping("/batch")
	public void batchUpdate() {
		batchInsertDataImpl.batchInsert();
	}
}
