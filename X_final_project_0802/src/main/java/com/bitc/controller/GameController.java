package com.bitc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitc.service.ChatGptService;
import com.bitc.vo.ChatRequest;

@Controller
@RequestMapping("/game/*")
public class GameController {
	
	@Autowired
	private final ChatGptService gpt;
	
	@Autowired
	public GameController(ChatGptService chatGptService) {
	    this.gpt = chatGptService;
	}
	 
	@GetMapping("chat")
	public String generateChatText(String prompt) {
		ChatRequest req = new ChatRequest(prompt);
        String text = gpt.generateText(prompt,req.getTemperature(),req.getMaxTokens());
        System.out.println(text);
        return text;
	}
	
	@PostMapping("start")
	public String startPage() {
		return "start";
	}
	
	@GetMapping("startGame")
	public String startGame() {
		return "game";
	}
}
