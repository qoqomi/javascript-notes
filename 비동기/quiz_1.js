/** 🟡 지연 실행 함수(delay)를 작성하라 
 *  - promise를 이용
 */
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/** 사용예시 */
const timeout = async () => {
  console.log("1");
  await delay(1000);
  console.log("2");
};

/**
 * 🟡 Promise 체이닝을 async/await로 변환하시오.
 */
```
fetch("/api/user")
  .then((response) => response.json())
  .then((user) => fetch(`/api/posts/${user.id}`))
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));
```

const fetching_1 = async () => {
  try {
    const response1 = await fetch('/api/user')
    const user = await response1.json()
    const response2 = await fetch(`/api/posts/${user.id}`)
    const posts = await response2.json()
    console.log(posts)

   } catch (error) {
    console.error(error)
  }
}



fetching_1()



const fetching_2 = async () => {
  try {
    const user = await fetch('/api/user').then((res)=>res.json())
    const posts = await fetch(`/api/posts/${user.id}`).then((res)=>res.json())
    console.log(posts)
   } catch (error) {
    console.error(error)
  }
}



/**
 * 🟡 재시도 로직이 포함된 비동기 함수를 작성하시오.
 * - 실패 시 자동으로 재시도하는 fetch 함수
 * - 최대 재시도 횟수와 지연 시간 설정 가능
 */

// 실패 시 자동으로 재시도하는 fetch 함수
// 최대 재시도 횟수와 지연 시간 설정 가능

const retryFetch = async (url, maxRetries = 3, delay = 1000) => {
  for(let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch(error) {
      console.log(`시도 ${i + 1}/${maxRetries} 실패:`, error.message)
      
      if(i === maxRetries - 1) {
        throw new Error(`${maxRetries}번 시도 후 최종 실패: ${error.message}`)
      }
      
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
}

// 사용 예시
try {
  const data = await retryFetch('/api/user', 3, 2000)
  console.log('성공:', data)
} catch(error) {
  console.error('최종 실패:', error.message)
}
