

const delayCount = (count = 0, add = 0) => {

  if (count) {
    return count = count + add
  }
}

delayCount(1)



const testTyping = () => {
  let temp = [];
  let text = "안녕하세요."
  let split = text.split("") // 한글자씩 배열에 들어간다. ["안", "녕", "하"..]

  // console.log(split)
  //한글자씩 타이핑 되도록 배열에서 한글자씩 뽑아내는 작업

  if (split.length) {

    for (let word of split) {
      console.log(word)

      // if (text.length) {
      //   temp = [...temp, text]
      //   text
      // }
    }

  }


}
console.log(testTyping())