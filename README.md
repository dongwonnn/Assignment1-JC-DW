### 데모 페이지 링크

#### [🚀 페이지 링크](https://pob-coconut.github.io/Assignment1-JC-DW/)

---

### 설치 및 실행방법

`npm install || yarn ` 패키지 설치
`npm run start || yarn start ` 프로젝트 로컬 실행

---

### 과제 구현 목록

#### 1. Init

- [x] CRA 생성
- [x] 폴더 구조 설계
- [x] 더미데이터 생성
- [x] 모듈 세팅

#### 2. styling

- [x] CommentList 컴포넌트 스타일링
- [x] Comment 컴포넌트 스타일링

#### 3. 전역상태 관리

- [x] Dummy Data 대신 전역 변수 사용
- [x] Redux-saga를 이용한 비동기 네트워크 통신

#### 4. Infinity Scroll

- [x] 페이지별 API 받아오기
- [x] intersection-observer를 통해 무한스크롤 구현
- [x] +option | scroll event를 통해 무한스크롤 구현

---

### 폴더구조

📦src
┣ 📂components -- 컴포넌트 단위의 React 파일
┃ ┣ 📜Comment.js
┃ ┗ 📜CommentList.js
┃
┣ 📂lib -- 모듈화된 함수
┃ ┣ 📂api
┃ ┃ ┣ 📜client.js
┃ ┃ ┗ 📜data.js
┃ ┣ 📂hooks
┃ ┗ 📂styles
┃ &nbsp; &nbsp; &nbsp;┗ 📜GlobalStyles.js
┃
┣ 📂pages -- 페이지 단위의 React 파일
┃ ┗ 📜CommentPage.js
┃
┣ 📂reducers -- 상태를 변화시키는 로직
┃ ┣ 📜comment.js
┃ ┗ 📜index.js
┃
┣ 📂sagas -- 네트워크 비동기 처리  
 ┃ ┣ 📜comment.js
┃ ┗ 📜index.js
┃
┣ 📂store -- 전역 state 선언
┃ ┗ 📜index.js
┃
┣ 📜App.js
┗ 📜index.js
