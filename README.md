# 프로젝트 진행 중(75% 완료)
# 프로젝트 실행 
```
git clone https://github.com/blackgar/december_and_company_refactoring.git
- json server 시작(json server의 _expand 속성을 활용하기 위해 server 파일 일부 수정으로 해당 폴더에서 json server 구동 필요)
cd server
npm install
npm run gen
npm start

- react 프로젝트 시작
yarn install
yarn start

- postman이나 기타 툴을 활용해서 http://localhost:4000/users/signup 으로 회원가입 진행 후 접속
```

# December_And_Company_Refactoring 컴포넌트 설계

이번 프로젝트 리팩토링은 Atomic Pattern을 적용하여 atoms => molcules => organism => template 순으로 컴포넌트를 구성하여 관심사 분리를 통한 재사용성을 향상시키는 것을 목적으로 진행할 계획

> ## 페이지 구성

### 1. 로그인

#### 1) 구현해야할 기능

- 생성되어 있는 관리자 이메일과 비밀번호로 로그인을 진행한다.
  - POST http://localhost:4000/login
- 반환받은 access_token으로 로그인 유무를 체크하고 새로고침을 하더라도 로그인 상태가 유지되도록 구현한다.(localstorage에 access_token 저장 => recoil-persist를 이용해서 atom으로 관리)
- access_token 만료시간은 1시간으로 1시간이 지나 요청을 보냈을 때 jwt expired라는 문구가 반환되면 access_token이 만료되었다는 문구를 표시하고 로그인 화면으로 이동시킨다. 이 때 localStorage(atom)에 저장된 token을 제거한다.
- 허가받지 못한 사용자가 url을 통해 계좌목록이나 기타 페이지로 접근할 시 인가받지 않은 사용자라는 문구를 표시하고 로그인 페이지로 redirect 한다.
  - Router.tsx에서 access_token 유무를 확인하고 문제가 있을 때는 문구와 함께 리다이렉트 하는 로직 작성

#### 2) 생성할 파일

- components/Template/LoginTemplate.tsx => login UI component를 보여줄 파일
- components/atoms/Title/Title.tsx => Login 페이지 상단 제목을 보여줄 파일
- components/atoms/Input/LoginInput.tsx => Login 페이지 input태그와 유효성 검사 부분을 보여줄 파일
- components/atoms/Button/Button.tsx => 전체 페이지에서 사용될 버튼에 대한 UI 컴포넌트 파일

### 2. 계좌 목록

#### 1) 표시해야할 내용

- 고객명(user_name), 브로커명(broker_id), 계좌번호(number), 계좌상태(status), 계좌명(name), 평가금액(assets), 입금금액(payments), 계좌활성화여부(is_active), 계좌개설일(created_at)을 Table로 보여준다.
  - GET http://localhost:4000/accounts
- 브로커명(broker_id)은 brokers.json을 참조해 OO증권 처럼 보이게 해야한다.
  - brokers.json에 있는 값들을 constants.ts 파일에 넣어서 key값을 통해 value를 받아오도록 구현한다.
- 계좌번호(number)은 앞뒤 각 두글자를 제외한 가운데 숫자는 모두 \*로 마스킹한다.
  - utils 폴더에 masking 함수를 추가한다.
- 계좌상태(status)는 accountStatus.json을 참조해 운용중과 같은 이름으로 보여지도록 해야한다.
  - accountStatus.json에 있는 값들을 constants.ts 파일에 넣어 key값을 통해 value를 받아오도록 구현한다.
- 평가금액(assets)과 입금금액(payments)은 123,123,123 처럼 세자리 마다 끊어서 표시해야한다.
  - utils 폴더에 세자리 마다 끊어주는 함수를 추가한다.
- 계좌활성화여부(is_active)는 boolean값을 활성화/비활성화로 표시한다.
- 계좌개설일(created_at)은 yyyy-mm-dd로 표시한다.
  - split, slice 함수 이용
- 평가금액(assets)이 입금금액(payments)에 비해 +인경우 빨간색, -인 경우 파란색, 같은 경우 검정색으로 표시한다.

#### 2) 구현해야할 기능

- 고객명을 누르면 사용자 상세페이지로 이동하도록 한다.
  - GET http://localhost:4000/users/userId
- 계좌번호를 누르면 계좌 상세페이지로 이동하도록 한다.
  - GET http://localhost:4000/accounts/accountId
- 목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 한다.
  - query parameter을 사용해서 해당 조건에 해당되는 값들만 필터링해서 보여줄 수 있도록 한다.
  - GET http://localhost:4000/accounts?\_expand=user&broker_id=brokerId&is_active=isActive&status=status
- 리스트 페이지에서는 검색이 가능해야 한다.
  - 검색어를 query로 넘겨주도록 한다.
  - GET http://localhost:4000/accounts?q=검색어
- 페이지네이션이 가능해야 한다.
  - 버튼에 따라 page 값을 query로 넘겨주도록 한다.
  - GET http://localhost:4000/accounts?\_page=page&\_limit=limit

#### 3) 생성할 파일

- components/atoms/SearchBar/SearchBar.tsx => 검색 기능 구현할 파일
- components/atoms/Filter/FilterLabel.tsx => 필터링 라벨 보여줄 파일
- components/atoms/Filter/FilterSelect.tsx => 필터링 옵션 보여줄 파일
- components/molcules/Filter/Filter.tsx => 필터링 기능 구현할 파일
- components/atoms/Table/TableItem.tsx => 목록 안 내용들을 구현할 파일
- components/molecules/Table/Table.tsx => 목록을 표시해줄 파일
- components/atoms/Pagination/PaginationPage.tsx => 페이지네이션 현재 페이지 표시 구현할 파일
- components/atoms/Pagination/PaginationButton.tsx => 페이지네이션 버튼 구현 파일
- components/molecules/Pagination/Pagination.tsx => 페이지네이션 기능 구현 파일
- components/organism/ListMenu/ListMenu.tsx => 검색+필터 molecules를 보여줄 파일
- components/organism/ListContent/ListContent.tsx => 목록+페이지네이션 molecules를 보여줄 파일
- components/Template/ListTemplate.tsx => 계좌 목록 UI 컴포넌트들을 보여줄 파일

### 3. 계좌 상세

#### 1) 표시해야할 내용

- 고객명(user_name), 브로커명(broker_id), 계좌번호(number), 계좌상태(status), 계좌명(name), 평가금액(assets), 입금금액(payments), 계좌활성화여부(is_active), 계좌개설일(created_at)을 Table로 보여준다.

#### 2) 생성할 파일

- components/atoms/Detail/DetailItem.tsx => 계좌 상세 정보를 보여줄 파일
- components/atoms/Detail/DetailTitle.tsx => 계좌 상세 이름을 보여줄 파일
- components/molecules/Detail/AccountDetailTable.tsx => 계좌 상세 표시할 내용들을 구현할 Table 파일
- components/organism/Detail/AccountDetailOrganism.tsx => Table과 Title을 보여줄 파일
- components/Template/AccountDetail/AccountDetailTemplate.tsx => organism을 보여줄 템플릿 파일

### 4. 사용자(고객) 목록

#### 1) 표시해야할 내용

- 고객명(name), 보유중인 계좌수(account_count), 이메일 주소(email), 주민등록상 성별코드 (gender_origin), 생년월일(birth_date), 휴대폰 번호(phone_number), 최근로그인(last_login), 혜택 수신 동의 여부(allow_marketing_push), 활성화 여부(is_active), 가입일(created_at)을 Table로 보여준다.
  - GET http://localhost:4000/users
- 고객명(name)은 가운데 글자를 마스킹하는데, 두 글자일 경우 성을 제외한 이름을 마스킹하고 4글자 이상인 경우 앞뒤 한글자씩만 제외하고 마스킹 처리한다.
  - utils 폴더에 마스킹 함수 생성
- 보유중인 계좌수(account_count)의 경우 해당 유저가 가지고 있는 계좌 목록 데이터를 받아온 후 그 데이터 길이로 표시해준다.
  - GET http://localhost:4000/accounts?userId=userId
- 생년월일(birth_dat)과 가입일(created_at)의 경우 yyyy-mm-dd로 표시하고 최근 로그인(last_login)의 경우 yyyy-mm-dd-hh-mm-ss형식으로 표시한다.
  - split과 slice 메서드를 활용하고 최근 로그인은 정규식을 활용한다.
- 혜택 수신 동의여부(allow_marketing_push)와 활성화 여부(is_active)의 경우 해당 유저의 usersetting 데이터를 받아와서 boolean 형태인 해당 데이터를 동의/비동의&활성화/비활성화로 정제하여 표시해준다.
  - GET http://localhost:4000/usersetting?uuid=uuid

#### 2) 구현해야할 기능

- 고객명 선택시 고객 상세 페이지로 이동할 수 있어야 한다.
  - GET http://localhost:4000/users/userId
- 계좌 활성화 여부와, 임직원 계좌 여부를 필터링 할 수 있어야 한다.
  - list를 반환하는 컴포넌트에서 사용자 uuid에 맞는 usersetting 데이터를 받아와서 계좌 활성화와 임직원 계좌 여부에 일치하는 값들만 반환하는 로직을 작성한다.
  - GET http://localhost:4000/usersetting?uuid=uuid
- 리스트 페이지에서 검색이 가능해야 한다.
  - API를 활용해서 반환받은 데이터를 데이터를 보여주는 변수에 저장한다.
  - GET http://localhost:4000/users?q=검색어
- 페이지네이션이 되어야 한다.
  - page라는 변수를 두고 페이지 버튼을 누르면 해당 페이지 number을 쿼리값으로 넘겨주어서 데이터를 받아와서 보여줄 수 있도록 구현한다.
  - GET http://localhost:4000/users?\_page=1&\_limit=20
- 임의로 신규 사용자를 추가할 수 있어야 한다.
  - 넘겨주는 formdata 값으로 이메일과 비밀번호는 필수이고 그 외 사용자 정보는 선택적으로 보내주면 된다.
  - 리스트 상단에 유저 추가 버튼을 만들어서 구현한다.
  - POST http://localhost:4000/users
- 잘못 생성한 사용자를 삭제할 수 있어야 합니다.
  - 각 유저 list item 우측에 삭제 버튼을 구현한다.
  - DELETE http://localhost:4000/users/userId
- 개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.
  - 변경할 이름을 formdata로 같이 요청을 보낸다.
  - 각 유저 list item에 고객명 옆에 수정 버튼을 두고 버튼을 누르면 수정할 input창과 함께 수정완료 버튼을 표시한다.
  - PATCH http://localhost:4000/users/userId

#### 3) 생성할 파일

- AccountList와 같은 component를 활용해서 구현하기
- Pages만 다르게 만들고 같은 Template 불러서 구현하기

### 5. 사용자(고객) 상세

#### 1) 표시해야할 내용

- 고객명(name), 보유중인 계좌수(account_count), 이메일 주소(email), 주민등록상 성별코드 (gender_origin), 생년월일(birth_date), 휴대폰 번호(phone_number), 최근로그인(last_login), 혜택 수신 동의 여부(allow_marketing_push), 활성화 여부(is_active), 가입일(created_at)을 Table로 보여준다.
- 고객이 보유하고 있는 계좌에 대한 내용을 Table로 보여준다
  - 고객명(user_name), 브로커명(broker_id), 계좌번호(number), 계좌상태(status), 계좌명(name), 평가금액(assets), 입금금액(payments), 계좌활성화여부(is_active), 계좌개설일(created_at)을 Table로 보여준다.
  - GET http://localhost:4000/accounts?userId=userId

#### 2) 생성할 파일

- Table은 Account와 같은 공통 Component 활용
- components/atoms/UserAccountList/UserAccountListItem.tsx
- components/atoms/UserAccountList/UserAccountListTitle.tsx
- components/molecules/UserAccountList/UserAccountList.tsx
- components/organism/UserAccountTable/UserAccountTable.tsx
- components/template/UserDetail/UserDetailTemplate.tsx

### 6. 공통 컴포넌트

#### 1) 표시해야할 내용

- Header
  - 현재 있는 페이지 이름이 보여야하고 로그인하고 있는 사용자명이 같이 표시되어야 한다.
    - useLocation으로 현재 경로를 파악해 각 경로에 맞는 페이지 이름을 보여주도록 한다.
    - 로그인 한 후 accessToken을 저장할 때 recoil을 통해 같은 atom에 userEmail값을 넣어주어서 같이 보여주도록 한다.
- Sider
  - 페이지 메뉴(대쉬보드, 계좌 목록, 사용자 목록, 로그아웃)이 보이도록 한다.
    - 현재 있는 페이지의 메뉴가 하이라이트 될 수 있도록 한다.
    - 로그아웃 버튼 클릭 시 access_token과 기타 저장하고 있던 List 데이터를 모두 삭제한다.
- Footer
  - Copyright © December and Company Inc. 가 가운데 정렬로 들어가도록 한다.

#### 2) 생성할 파일

- components/atoms/Sider/SiderTitle.tsx
- components/atoms/Sider/SiderMenuListItem.tsx
- components/molecules/Sider/SiderMenuList.tsx
- components/organism/Sider/Sider.tsx
- components/atoms/Header/HeaderTitle.tsx
- components/atoms/Header/HeaderUserInfo.tsx
- components/atoms/Header/HeaderUserImage.tsx
- components/molcules/Header/HeaderUser.tsx
- components/organism/Header/Header.tsx
- components/atoms/Footer/Footer.tsx

### 7. 대시보드(추가기능)

- 전체 사용자와 계좌의 수치를 그래프로 보여줄 수 있도록 구현해보자.
  - apexchart or reactchart이용

### 8. 공통사항

- 로그인 accessToken과 UserList, AccountList 데이터의 경우 recoil로 관리하여 API 요청을 최소화 할 수 있도록 구현
- 공통스타일의 경우 common/constants/styles에 tailwind className을 변수에 담아서 정리하고 불러와서 사용할 수 있게 구현
- 공통으로 사용되는 type의 경우 common/constants/types에 interface를 선언해서 불러와서 사용할 수 있게 구현
- 공통으로 사용되는 함수의 경우 utils 폴더에 함수 구현하기
- pages에는 진짜 UI만 보여주는 폴더와 파일 생성
- craco로 단축 경로 지정
- prettier, eslint 적용
