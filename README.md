# 기능 명세 체크리스트

## 로또 발매기 기능 명세

1. **구매 금액 입력**

   - 사용자로부터 구입 금액을 입력받음
   - 구입 금액은 1,000원 단위로 입력받아야 함

2. **로또 번호 생성**

   - 1~45 사이의 숫자를 사용해 로또 번호 생성
   - 중복되지 않는 6개의 숫자를 뽑아 하나의 로또 발행

3. **로또 발행**

   - 구입 금액에 맞게 로또 발행
   - 발행된 로또 수량 및 번호를 오름차순으로 출력

4. **당첨 번호 및 보너스 번호 입력**

   - 사용자로부터 당첨 번호 6개를 쉼표로 구분해 입력받음
   - 사용자로부터 보너스 번호 1개를 입력받음

5. **당첨 결과 계산**

   - 각 로또 번호와 당첨 번호를 비교하여 일치 개수 확인
   - 일치 개수에 따라 1등부터 5등까지 당첨 등수 결정

6. **당첨 내역 및 수익률 출력**
   - 당첨 개수를 등수별로 정리하여 출력
   - 수익률을 소수점 둘째 자리에서 반올림하여 출력

## 예외처리 체크리스트

1. **구매 금액 입력 오류**

   - 1000원으로 안 떨어지는 경우 예외처리
   - 숫자가 아닌 금액을 입력했을 경우 예외처리
   - 1000원보다 적은 금액을 입력했을 경우 예외처리
   - 아무 것도 입력하지 않은 경우 예외 처리

2. 로또 및 당첨 번호 입력 오류

   - 번호 범위 오류
     - 입력된 번호가 1~45 범위를 벗어나는 경우
     - 중복된 번호가 입력된 경우
   - 입력 형식 오류
     - 번호 사이를 `,`(콤마) 외의 다른 문자로 구분한 경우
     - 번호 또는 구분 기호 이외에 다른 문자가 포함된 경우
     - 입력된 번호의 개수가 정확하지 않은 경우 (로또 번호는 6개)
     - 번호 사이에 불필요한 공백이 삽입된 경우

3. **보너스 번호 입력 오류**

   - 숫자가 아닌 입력값을 입력한 경우
   - 보너스 번호가 1~45 범위를 벗어날 경우
   - 보너스 번호가 당첨 번호와 중복되는 경우

4. **입력 포맷 오류**

   - 당첨 번호나 보너스 번호가 숫자가 아닌 경우
   - 쉼표나 공백 없이 잘못된 형식으로 입력된 경우

5. **출력 형식 오류**
   - 수익률 계산 시 소수점 둘째 자리에서 반올림이 잘못된 경우
   - 당첨 내역을 출력할 때 잘못된 포맷으로 출력된 경우

각 항목별 예외 상황이 발생하면 `[ERROR]`로 시작하는 메시지를 출력하고 다시 입력을 받도록 합니다.
