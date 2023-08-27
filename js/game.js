const systemText = document.querySelector("#systemText");
const gameBox = document.querySelector("#gameBox");
const gameBtn = document.querySelector("#gameBtn");
const subGameBox = document.querySelector("#subGameBox");
const systemZoomText = document.querySelector("#systemZoomText");
const systemZoomTextBox = document.querySelector("#systemZoomTextBox");

// 소문자 정규식 텍스트마다 색을 다르게 넣어주기 위함
const lowercaseTest = /^[a-z]+$/;
let idx = 0;
// scene을 구분하는것 ex : 'scene'+scene = scene1; default = 1
let scene = 1; 
// option 구분할 변수
let selNum = 0;
// action중 ALL -> 다보고 넘어가기 위한 변수들
let optionCount = 0;
let sceneOptionCount = 0;
let subGameCount = 0;
// enter로 특정함수를 실행할수있게할 변수
let sys_isEnter = true;
let isSys = true;
let isAction = false;
// 
let endCheck1 = false;
let endCheck2 = false;
let endCheck3 = false;

// introText 타이핑 작업 후 createOptions 함수
function displayText(sceneObject) {
	clean();
	const textArray = sceneObject.introText;
	isSys = true;

	if (sceneObject.hasOwnProperty('options') && idx >= textArray.length) {
		// 타이핑이 끝난 후 선택지 생성
		idx = 0;
		isSys = false;
		createOptions(sceneObject);
		return;
	}

	let line = textArray[idx];
	let isCheck = false;
	const paragraph = document.createElement("p");
	
	// text에서 캐릭터이름 분리 후 따로 타이핑하기 위한 if문
	if(lineCheck(line)){
		let prefix = "레베카:";
		if(line.startsWith("카렌"))	{
			prefix = "카렌:";
		} 
		let nick = line.substring(0,prefix.length-1);
		document.querySelector("#char_Nick").innerHTML = nick;
		isCheck = true;
		line = line.substring(prefix.length);
	}else{
		systemText.appendChild(paragraph); 
	}
	
	let i = 0;
	function typing2() {
		if (i < line.length) {
			sys_isEnter = false;
			const char = line.charAt(i);
			
			if(isCheck){
				systemZoomTextBox.textContent += char;
			}else{
				paragraph.textContent += char;
			}

			i++;
			scrollToBottom(systemText);
			setTimeout(typing2, 10); // 한 글자 출력 간격을 50ms로 설정 (조절 가능)
		} else {
			sys_isEnter = true;
			idx++;
		}
	}

	typing2(); // 타이핑 효과 함수 호출
}


function createOptions(sceneObject) {
	document.querySelector("#char_Nick").innerHTML = "";
	// option , action , sound
	const option = sceneObject.options;
	const action = sceneObject.action;
	const sound = sceneObject.sound;

	if (!option || option.length === 0) {
		// 옵션이 없는 경우, 선택지를 생성하지 않음
		return;
	}

	const optionButtonWrapper = document.createElement("div");
	optionButtonWrapper.id = "btnDiv";
	gameBtn.appendChild(optionButtonWrapper);
	
	sys_isEnter = false;
	
	if (action == "SELECT") {
		option.forEach((optionObj, index) => {
			const optionButton = document.createElement("button");
			optionButton.textContent = optionObj.buttonText;
			// 옵션 버튼들 클릭했을때 이벤트
			optionButton.onclick = (e) => {
				const btns = document.querySelectorAll("button");
				document.querySelector("#btnDiv").remove();
				selNum = index;
				createAction(sceneObject);
			};
			scrollToBottom(systemText);
			optionButtonWrapper.appendChild(optionButton);
		});
	}
	if (action == "ALL") {
		sceneOptionCount = option.length;
		option.forEach((optionObj, index) => {
			const optionButton = document.createElement("button");
			optionButton.textContent = optionObj.buttonText;

			optionButton.onclick = (e) => {
				const btns = document.querySelectorAll("button");
				e.target.remove();
				document.querySelector("#btnDiv").style.display = "none";
				selNum = index;
				createAction(sceneObject);
			}
			scrollToBottom(systemText);
			optionButtonWrapper.appendChild(optionButton);
		});
	}
	if (action == 'GAME') {
		option.forEach((optionObj, index) => {
			const optionButton = document.createElement("button");
			optionButton.textContent = optionObj.buttonText;
			// 옵션 버튼들 클릭했을때 이벤트
			optionButton.onclick = (e) => {
				const btns = document.querySelectorAll("button");
				document.querySelector("#btnDiv").remove();
				selNum = index;
				createAction(sceneObject);
			};
			scrollToBottom(systemText);
			optionButtonWrapper.appendChild(optionButton);
		});
	}
	if (action == 'ALLGAME') {
		option.forEach((optionObj,index) => {
			const optionButton = document.createElement("button");
			optionButton.textContent = optionObj.buttonText;

			optionButton.onclick = (e) => {
				const btns = document.querySelectorAll("button");
				e.target.remove();
				document.querySelector("#btnDiv").style.display = "none";
				selNum = index;
				createAction(sceneObject);
			};
			scrollToBottom(systemText);
			optionButtonWrapper.appendChild(optionButton);
		})
	}
}

function createAction(sceneObject) {
	clean();
	isAction = true;
	const textArray = sceneObject.options[selNum].actionText;
	const action = sceneObject.action;
	const sound = sceneObject.sound;
	const col = sceneObject.options[selNum].color;

	let gameType = "";
	if(action == 'GAME' || action == 'ALLGAME'){
		gameType = sceneObject.options[selNum].subGame.gameType;
	}
	sys_isEnter = false;

	if(action != '' && idx >= textArray.length){
		if (sound !== '') {
			playSound(sound);
		}
		isAction = false;
		isSys = true;
		idx = 0;
		selNum = 0;
		switch(action){
			case 'SELECT' : 	
				scene++;
				const sceneObject = window["scene" + scene];
				displayText(sceneObject);
				break;

			case 'ALL' :
				optionCount++;
				if (optionCount == sceneOptionCount) {
					scene++;
					const sceneObject = window["scene" + scene];
					optionCount = 0;
					document.querySelector("#btnDiv").remove();
					displayText(sceneObject);
				} else {
					isAction = true;
					isSys = false;
					const btns = document.querySelector("#btnDiv");
					btns.style.display = "block";
					scrollToBottom(systemText);
					gameBtn.appendChild(btns);
				}
				break;
			
			case 'GAME' :
				createGame(gameType);
				break;

			case 'ALLGAME' :
				subGameCount++;
				createGame(gameType);
				break;
		}
	} else {
		let line = textArray[idx];
		let isCheck = false;
		const paragraph = document.createElement("p");
		paragraph.style.color = col;

		if(lineCheck(line)){
			let prefix = "레베카:";
			if(line.startsWith("카렌"))	{
				prefix = "카렌:";
			} 
			let nick = line.substring(0,prefix.length-1);
			document.querySelector("#char_Nick").innerHTML = nick;
			isCheck = true;
			line = line.substring(prefix.length);
		}else{
			systemText.appendChild(paragraph); 
		}
		
		let i = 0;
		function typing3() {
			if (i < line.length) {
				sys_isEnter = false;
				const char = line.charAt(i);
				
				if(isCheck){
					systemZoomTextBox.textContent += char;
				}else{
					paragraph.textContent += char;
				}

				i++;
				scrollToBottom(systemText);
				setTimeout(typing3, 10); // 한 글자 출력 간격을 50ms로 설정 (조절 가능)
			} else {
				sys_isEnter = true;
				idx++;
			}
		}

		typing3();
	}


};

function playSound(sound) {
	const link = '/resources/sound/' + sound + '.mp3';
	const audio = new Audio(link);
	audio.play();
}

function createGame(subGame) {
	const sub_game = document.createElement("div");
	sub_game.setAttribute("id","sub_game");
	
	const link = '/resources/subGame/' + subGame + '.jsp';
	var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sub_game.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
    
	gameBox.style.display = "none";
	subGameBox.style.display = "block";
	subGameBox.appendChild(sub_game);
}

function findEnding() {
	subGameBox.style.display = "none";
	document.querySelector("#sub_game").remove();
	gameBox.style.display = "block";
	if (subGameCount == 3) {
		scene++;
		const sceneObject = window["scene"+scene];
		displayText(sceneObject);
	} else {
		sys_isEnter = true;
		isAction = true;
		isSys = false;
		document.querySelector("#btnDiv").style.display = "block";
	}
}

function lineCheck(line) {
	if(line.startsWith("마이크") || line.startsWith("레베카") || line.startsWith("카렌") || 
	   line.startsWith("알렉스") || line.startsWith("에밀리")){
		changeImage(line);
		return true;
	}
	return false;
}

function changeImage(line){
	const profile = document.querySelector("#char_Image");
	profile.style.backgroundSize = "cover";

	if (line.startsWith("마이크")) {
        profile.style.backgroundImage = "url('/resources/img/mike.png')";
    } else if (line.startsWith("레베카")) {
        profile.style.backgroundImage = "url('/resources/img/rebecca.png')";
    } else if (line.startsWith("알렉스")) {
        profile.style.backgroundImage = "url('/resources/img/alex.png')";
    } else if (line.startsWith("카렌")) {
        profile.style.backgroundImage = "url('/resources/img/caren.png')";
    } else if (line.startsWith("에밀리")) {
        profile.style.backgroundImage = "url('/resources/img/emily.png')";
    }
}