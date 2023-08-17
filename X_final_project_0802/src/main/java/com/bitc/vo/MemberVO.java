package com.bitc.vo;

import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter @Setter
@ToString
public class MemberVO {
	
	private String id;
	private String pw;
	private String name;
	private String nickname;
	private int age;
	private Date regDate;
	
}
