/* 
    promise 는 콜백 지옥과 같은 코드가 형성되지 않게(비동기 통신간에 순서를 정하기 쉽게) 하는 방안으로
    es6에서 도입되었다.
    (현재 시점에서 es6가 지원되는 브라우저에서 작업하고 있다.)
*/

// 내부적으로 비동기 처리를 하고 promise를 반환하는 함수

const increase = (number) => {

  /*   const asyncFunc = (resolve, reject)=>{
      setTimeout(()=>{
        const result = number+10;
        return result;
      },1000);
    }
  
  
    asyncFunc(resolve, reject); */


  /* 
      promise 객체 생성 이유
      1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하게 resolve 및 reject를 제공한다.
      2. promise 객체가 제공하는 메소드를 사용하기 위함(콜백 지옥 상황을 해소해 주기 때문(가독성이 좋음, 메소드 체이닝 방식 제공))
  */

  // 체이닝
  //   fetch 가 성공적으로 끝나면 then 실행
  // const api = fetch().then(r=>r.json()).then(jValue => jValue).catch(e => console.log(e));


  /*   const testFun = async () =>{
  
      const api = await fetch().then(r=>r.json);   // 자바스크립트는 싱글스레드로 기다리지 않기 때문에 작업이 끝날때까지 멈추는 키워드 - await
      const jsonValue = api.json();
    }
   */



  // 프로미스 내부에서는 다 기다려줌. 외부에서 그냥 꺼내쓸 수 없음.                        
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}
/* 
    increase 함수 호출 후에는 promise 가 반환된다.
    이 promise 는 resolve 함수에 던져진 인수를 기억하고 있다.
    이 promise 를 통해 then 함수를 호출하고 던져지는 콜백 함수의 인수로 기억했던
    resolve 함수의 인수를 넣어준다.
*/
console.log(increase(0));

increase(0)
  .then(number=>{
  console.log(number);
  return increase(number);
}).then(number => {
    console.log(number);
    return increase(number);
}).then(number => {
  console.log(number);
  return increase(number);
}).catch(e=>console.log(e, "가 발생했네"))
.finally(()=>{
  console.log("finally 실행")
});