package com.bitc.vo;

import lombok.Data;

@Data
public class ChatRequest {
	
	private String prompt; 		 		// GPT에게 보낼 명령
	private float temperature = 0.7f;   // 인공지능 수치
	private int maxTokens = 2500;		// 답변을 얼마까지받을것인지정하는것
	public ChatRequest(String prompt) {
		this.prompt = prompt;
	}
	
	
}
