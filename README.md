# Weekly Review

이름: 심지섭
학번: 22301015

---

## Deployment

- **Vercel 배포 URL**: https://2026oss-assign2-3.vercel.app/

---

## Key Learning

이번 주에 배운 핵심 내용 3가지

1. form 안에 input과 button를 통해 event가 발생했을 때, 이를 JS에서 어떻게 event를 처리해야 하는지에 대해 배웠습니다.
2. 동적 요소를 생성한 후 DOM에 추가하는 방법을 배웠습니다.
3. JS Array에 데이터를 추가하고 삭제하는 방법을 배웠습니다.

---

## CRUD Service

### 서비스 주제

- 도서관리 Form 서비스

### 사용하는 데이터 Field

- id : 항목 고유 번호
- title : 도서명
- author : 저자 이름
- price : 도서 가격
- category : 도서 카테고리 (소설/시/잡지)

### CRUD 구현 방법

**Create**
1. 사용자가 id, 도서명, 작가, 카테고리, 가격을 입력하고 추가 버튼 클릭
2. addEventListener("click")가 클릭을 감지하고, e.preventDefault()로 폼의 기본 동작(새로고침)을 막음
3. 입력값 검증: id는 빈 값과 isNaN, 도서명과 작가는 trim() 후 빈 값, 가격은 빈 값과 isNaN과 음수를 검사하고, 실패하면 alert 후 해당 입력창에 focus()
4. books 배열을 반복문으로 돌며 같은 id가 이미 있는지 검사하고, 중복이면 중단
5. books.push({ id, title, author, price, category })로 새 객체를 JS Array에 저장
6. 입력창을 비우고 render()로 목록을 다시 그림

**Read**
1. 페이지 로드 시 render()를 호출해 books 배열의 초기 데이터를 화면에 표시
2. render()는 innerHTML = ""로 기존 목록을 비운 뒤, forEach로 배열을 순회
3. 항목마다 createElement("tr")로 행을 만들고, 템플릿 리터럴로 td(id, 도서명, 작가, 카테고리, 가격, 수정/삭제 버튼)를 채워 appendChild로 .book-list에 추가
4. Create, Update, Delete 후에 항상 render()가 호출되어 최신 상태를 보여줌

**Update**
1. 사용자가 행의 수정 버튼을 클릭하면, .book-list에 걸린 클릭 리스너가 className === "editbtn"인지 확인
2. 해당 행(tr)의 값을 읽어 입력 폼에 채우고, editingId에 대상 id를 저장한 뒤 추가 버튼의 글자를 "저장"으로 변경
3. 사용자가 값을 고치고 저장 버튼을 클릭하면, Create와 같은 검증을 수행하고, id 중복 검사에서는 수정 중인 본인의 id(editingId)는 제외
4. 반복문으로 editingId와 일치하는 객체를 찾아 모든 필드를 새 값으로 덮어씀
5. editingId = null로 초기화하고 버튼을 "추가"로 되돌린 뒤, 입력창을 비우고 render()

**Delete**
1. 사용자가 삭제 버튼을 클릭하면, 이벤트 위임 리스너가 className === "delbtn"인지 확인
2. 클릭된 버튼의 부모의 부모(tr)에서 첫 번째 td의 id를 읽음
3. confirm("삭제하겠습니까?")로 사용자 확인을 받고, 취소하면 중단
4. 반복문으로 id가 일치하는 객체를 찾아 books.splice(i, 1)로 배열에서 제거
5. 삭제한 항목이 수정 중이던 항목이면 수정 모드를 해제(editingId = null, 버튼 "추가"로 복귀)하고 폼을 비움
6. render()로 목록을 다시 그림

---

## JavaScript

이번 과제에서 사용한 주요 JavaScript 기능

- `document.querySelector()` : CSS 선택자로 DOM 요소 조회
- `document.createElement()` : 요소를 동적으로 생성
- `innerHTML` : 내용 비우기/채우기
- `appendChild()` : 생성한 동적 요소를 DOM에 추가
- `parentElement` : 부모 태그를 선택
- `focus()` : validation에서 문제가 된 입력창으로 cursor 이동
- `addEventListener()` : event 감지
- `e.preventDefault()` : form의 기본 동작 막음
- `forEach(), for문` : Array 순회
- `splice()` : 배열에서 항목 제거
- `push()` : 배열에 새 객체 추가
- `trim()` : 공백만 입력된 경우 걸러줌
- `confirm()` : 삭제 확인
- `Array` : 여러 데이터를 저장하는 저장소
- `render()` : 배열을 읽어 화면에 보여줌

---

## AI / Search Usage

- **사용한 AI 또는 검색 도구** : Claude

- **어떤 문제를 해결하기 위해 사용했는지**
1. html에서 JS Array를 어떤 html 요소로 화면에 보여줄지 AI의 도움을 받음
2. JS Array 객체들을 어떻게 tr.innerHTML에 넣어줘야 할지 AI의 도움을 받음
3. validation에 어떠한 함수/기능이 필요한지 AI의 도움을 받음
4. 삭제 버튼을 눌렀을 때 JS Array에서 어떻게 객체를 삭제하는지 AI의 도움을 받음

- **실제 코드에 어떻게 적용했는지**
1. html에서 table 태그를 통해 JS Array가 forEach()로 순회되면서 데이터가 화면에 보이도록 함
2. ${객체 속성}를 통해 tr.innerHTML에 넣어주게 됨
3. isNaN(), Number()로 숫자 입력값을 validation하게 됨
4. for문으로 Array를 순회하면서 삭제하고자 하는 객체의 id와 같다면 books.splice(i,1)로 삭제하게 됨

- **새롭게 이해한 내용** : input.value와 textContent는 숫자를 입력해도 문자열로 읽히므로, Number()와 isNaN()으로 변환 후 검증해야 한다는 것을 알게 됨

---

## Problem & Solution

### 문제 1

- **문제 상황**: 수정할 때 id를 바꾸지 않고 저장해도 "이미 존재하는 id입니다"(validation) 경고가 떠서 저장되지 않음
- **해결 방법**: 저장의 검사 조건에 idNum !== editingId를 추가해 수정 중인 id는 비교에서 제외함

### 문제 2

- **문제 상황**: 삭제 버튼을 눌러도 배열에서 제거되지 않는 상황 발생
- **해결 방법**: 행에서 읽은 tr.children[0].textContent는 문자열인데 books[i].id는 숫자라서 비교 전에 String(books[i].id)로 타입을 맞춤

---

## Reflection

- **새롭게 알게 된 점**: table에서 button마다 eventlistener를 하는 것이 아니라, render()가 행을 계속 새로 만들어도 부모(.book-list) 하나에서 e.target으로 수정/삭제 버튼을 구분해 처리할 수 있다는 것을 알게 됨
- **궁금한 점**: 현재는 books 배열이 메모리에만 저장되어 새로고침하면 데이터가 초기 상태로 돌아가는데, DB를 연동하면 데이터를 수정한 후 새로고침해도 그대로 유지되는지 궁금함
