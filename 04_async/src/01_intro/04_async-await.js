

function increase(number){
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const result = number +10;
      if(result > 50){
        const e = new Error("number too big");
        return reject(e);
      }
      resolve(result);
    },1000
    )
  }); return promise;
}

/* 
  await의 2가지 기능
  1. await 가 달린 함수의 결과인 promise 에 담긴 결과 (promise 내부의 resolve에 담길 결과)를 반환한다.
  2. await 가 달린 비동기 처리들은 동기식으로 동작하게 한다.
*/

async function run(){
    try{
      let result = await increase(0);
      console.log(result);

      result = await increase(0);
      console.log(result);
      
      result = await increase(0);
      console.log(result);

      result = await increase(0);
      console.log(result);

      result = await increase(0);
      console.log(result);
      
      result = await increase(0);
      console.log(result);
      return result;
    }catch(e){
      console.log(e,"가 발생함");
    }
}

const value = async () => {
  const runValue = await run();
  console.log("value : " + runValue);

};
const result = value();
console.log(result);

/* // db연결
const connection = dbConnection();

//db 조회
const findUser = connection.findUser(1);

// 방문 기록에 등록함
const atd = connection.atd(findUser);           // async 등으로 기다리지 않으면 이벤트루프에 두고 다른거 먼저 실행해서 언디파인드발생 */