package com.bitc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitc.service.ChatGptService;
import com.bitc.vo.ChatRequest;

@Controller
@RequestMapping("/ai/*")
public class AIController {
	
	@Autowired
	private final ChatGptService gpt;
	
	@Autowired
	public AIController(ChatGptService chatGptService) {
	    this.gpt = chatGptService;
	}
	 
	@PostMapping("/chat")
	public String generateChatText(@RequestBody ChatRequest chatRequest) {
		System.out.println("여긴왔니 ?");
        String prompt = chatRequest.getPrompt();
        float temperature = chatRequest.getTemperature();
        int maxTokens = chatRequest.getMaxTokens();	
        String text = gpt.generateText(prompt, temperature, maxTokens);
        System.out.println(text);
        return gpt.generateText(prompt, temperature, maxTokens);
	}
}
