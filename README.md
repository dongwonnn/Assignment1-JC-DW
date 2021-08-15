### 리팩토링 과정 

#### [🎯 노션 링크](https://teal-fireplant-241.notion.site/Assignment-1-9208c851ef3f4fc5adfd38330bf9a73e)

### 데모 페이지 링크

#### [🚀 페이지 링크](https://pob-coconut.github.io/Assignment1-JC-DW/)

---

### 설치 및 실행방법

` yarn ` 패키지 설치
`yarn start ` 프로젝트 로컬 실행

---

### 과제 구현 목록

#### 1. Init

- [x] CRA 생성
- [x] 폴더 구조 설계
- [x] 더미데이터 생성
- [x] 모듈 세팅

#### 2. styling

- [x] CommentList 컴포넌트 스타일링
- [x] CommentLists 컴포넌트 스타일링

#### 3. 전역상태 관리

- [x] Dummy Data 대신 전역 변수 사용
- [x] Redux-saga를 이용한 비동기 네트워크 통신

#### 4. Infinity Scroll

- [x] 페이지별 API 받아오기
- [x] scroll event를 통해 무한스크롤 구현
- [x] throttle 이용한 이벤트 제어 

---

### 폴더구조
```html
📦src  
┣ 📂components -- 컴포넌트 단위의 React 파일  

┣ 📂pages -- 페이지 단위의 React 파일   
┃  
┣ 📂reducers -- 상태를 변화시키는 로직   
┃  
┣ 📂route -- 상태를 변화시키는 로직
┃ 
┣ 📂sagas -- 네트워크 비동기 처리   
┃  
┣ 📂store -- 전역 state 선언   
┃  
┣ 📂utils
┃ 
┣ 📜App.js  
┗ 📜index.js  
```
