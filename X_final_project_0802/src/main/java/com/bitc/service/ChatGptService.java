package com.bitc.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@PropertySources({
	@PropertySource("classpath:prop/openai.properties")
})
@Service
public class ChatGptService {
	
	@Value("${apikey}")
	private String apiKey;
	private static final String ENDPOINT = "https://api.openai.com/v1/chat/completions"; // GPT-3.5-turbo 모델을 위한 엔드포인트로 변경

	public String generateText(String prompt) {
	    return generateText(prompt, 0.7f, 2500);
	}

	public String generateText(String prompt, float temperature, int maxTokens) {
	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.set("Authorization", "Bearer " + apiKey);

	    Map<String, Object> requestBody = new HashMap<>();
		/*
		 * requestBody.put("model", "gpt-3.5-turbo"); requestBody.put("prompt", prompt);
		 * // "messages" 대신 "prompt"로 변경 requestBody.put("temperature", temperature);
		 * requestBody.put("max_tokens", maxTokens);
		 */

	    requestBody.put("model", "gpt-3.5-turbo");
	    requestBody.put("messages", List.of(
	        Map.of("role", "user", "content", prompt),
	        Map.of("role", "system", "content", "You are a game master.")
	    ));
	    requestBody.put("temperature", temperature);
	    requestBody.put("max_tokens", maxTokens);
	    HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

	    RestTemplate restTemplate = new RestTemplate();
	    ResponseEntity<Map> response = restTemplate.postForEntity(ENDPOINT, requestEntity, Map.class);

	    if (response.getStatusCode().is2xxSuccessful()) {
	        // API 응답을 적절히 처리하여 원하는 결과를 추출하고 반환
	        Map<String, Object> responseBody = response.getBody();
	        // ... 필요한 처리 작업 ...
	        return responseBody.toString();
	    } else {
	        // 오류 처리
	        return "API 요청이 실패하였습니다. 상태 코드: " + response.getStatusCodeValue();
	    }
	}
}