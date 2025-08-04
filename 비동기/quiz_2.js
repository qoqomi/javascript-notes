/**
 * 🟡 * 추첨 버튼을 누르면 50% 당첨 확률로 1초 후에 추첨 결과가 전달되는 promise 예제
 * 조건
 * - 함수가 실행되면 "1초 후에 당첨 결과가 발표됩니다." console로 출력
 * - 추첨이 성공이면 "당첨되었습니다.", 실패하면 "꽝! 다음 기회에"를 출력한다.
 */

```
// NOTE
//  함수로 사용하지 않으면 페이지 로드 시 즉시 실행되어 결과가 고정됨

const random = new Promise((resolve, reject) => {
    const isRandom = Math.random() < 0.5;
    if (isRandom) {
      resolve("당첨되었습니다⭐️");
    } else {
      reject("꽝!");
    }
  });
```;

const random = () =>
  new Promise((resolve, reject) => {
    const isRandom = Math.random() < 0.5;
    if (isRandom) {
      resolve("당첨되었습니다⭐️");
    } else {
      reject("꽝!");
    }
  });

random()
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
