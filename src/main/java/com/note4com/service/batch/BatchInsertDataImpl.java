package com.note4com.service.batch;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.note4com.model.Content;
import com.note4com.model.Notes;
import com.note4com.repository.NotesRepository;

@Service
public class BatchInsertDataImpl implements BatchInsertData {
	@Autowired
	NotesRepository noteRepository;

	public void readFile(String path, String category, String username) {
		InputStream stream = null;
		BufferedReader br = null;
		try {
			stream = BatchInsertDataImpl.class.getResourceAsStream(path);
			br = new BufferedReader(new InputStreamReader(stream, "UTF-8"));
			String line;
			List<String> items = new ArrayList<>();
			while ((line = br.readLine()) != null) {
				line = line.trim();
				if (line.length() == 0) {
					break;
				}
				if ("-".equalsIgnoreCase(line)) {
					Notes notes = new Notes();
					notes.setTitle(items.get(0).trim());
					for (int i = 1; i < items.size(); i++) {
						String[] contentItem = items.get(i).split("=");
						Content content = new Content();
						content.setKey(contentItem[0]);
						content.setNote(contentItem[1]);
						notes.getContents().add(content);
					}
					notes.setCategory(category);
					notes.setUsername(username);
					this.noteRepository.save(notes);
					items.clear();
				} else {
					items.add(line);
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (stream != null) {
				try {
					stream.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}

	}

	@Override
	public void batchInsert() {
		// TODO Auto-generated method stub
		noteRepository.deleteAll();
		readFile("/data/Language_EN.txt", "Language", "user_en");
	}
}
