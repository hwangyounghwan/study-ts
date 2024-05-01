// 예시로 함수를 하나 만들어 본다
// 아래의 경우에서는 사실 직접 함수를 호출하지 않는한 알기 어렵다
// 자바스크립트는 이렇게 하여 동적 타이핑만을 지원한다
// const returnFlip = (x) => {
//     return x.flip()
// }
// 대안으로 정적 타이핑을 지원하여 코드가 실행되기 전에 코드의 예상 작업을 예측하는것!
var message = "hello";
// This expression is not callable.
// Type 'String' has no call signatures
// 아래의 함수는 위의 에러메시지를 표시한다 이와같이 함수를 실행하기 전에 미리 에러를 알려준다
// message()
// 비예외 실패
// JS의 경우 호출할수 없는 객체에 대해 접근을 하려하는경우 undefined를 반환한다
var user = {
    name: "Daniel",
    age: 26
};
// console.log(user.location) => js의 경우에는 undefined가 반환되지만
// Property 'location' does not exist on type '{ name: string; age: number; }'.ts(2339)
// ts의 경우 위의 에러메시지를 표시하게 된다
// console.log(user.location)
// 이런 방식으로 또다른 오류도 많이 잡아낼수 있다
message.toLocaleLowerCase();
// message.toLocalLowerCase(); => 오타의 경우로 JS에서는 잘 잡아내지 못한다
// 오류가 있는 내보내기 (여기서 일단 내보내기는 tsc를 사용한다)
var greet = function (person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
};
greet("Maddison", new Date());
