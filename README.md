# ❄️ winterest

## 🖥 1. 시연 영상
- https://youtu.be/MXZBQh0XabY

## 🔖 2. 프로젝트 소개
- 소요시간: 2주
- 참여 인원: Front: 2명 / Back: 2명
### 2.1. 목표
- 이미지 업로드 기반의 소셜네트워크 서비스를 모티브로 만든 웹사이트

### 2.2. 담당 구현사항
- 이미지 클릭 후의 detail 페이지, 이미지 업로드 페이지 구현
- 이미지 업로드 기능 및 업로드할 이미지 미리보기 구현
- 이미지 상세페이지 동적기능(팔로우, 댓글+대댓글, 좋아요 기능, 이미지 저장 등) 구현
- 유저 정보에 따라 다른 수정페이지 Modal로 화면 구현
- 태그 수정 및 생성기능(enter 키와 마우스 클릭을 통해 추가/삭제) 구현

### 2.3. 기술 스택
- react
- axios
- styled-component

## 📎 3. 초기세팅

### 3.1. .env 세팅
REACT_APP_EC2_SERVER="" <br/>
REACT_APP_LOCAL_SERVER=""

### 3.2. 공통 convention branch 형식
- fe/feature/{}
- be/feature/{}
- 
## 💡 4. 개발후기

### 4.1. 얻게된 점
- styled-component의 사용법
- axios의 전반적인 이해도 및 data fetching 사용법
- formData 를 이용한 이미지파일 전송 방법
- react library를 사용하여 이미지 다운로드 기능 사용법

### 4.2. 아쉬운 점
- modal 화면을 반응형으로 만들어보지 못한점
- 디테일한 요소들 고급진 느낌을 살리지 못한점
