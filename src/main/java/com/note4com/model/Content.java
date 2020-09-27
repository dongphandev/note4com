package com.note4com.model;

import org.springframework.data.mongodb.core.index.TextIndexed;

public class Content {
	@TextIndexed
	private String key;
	@TextIndexed
	private String note;
	private String ref;
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}

}
