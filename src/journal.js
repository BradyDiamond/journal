export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  const wordArray = this.body.split(" ");
  let count = 0;
  for (let i = 0; i < wordArray.length; i++) {
    count++
  }
  return count;
}
Entry.prototype.vowelCount = function() {
  const body = this.body.toLowerCase();
  const letterArray = body.split("");
  let count = 0;
    for (let i = 0; i < letterArray.length; i++) {
    if(letterArray[i] === "a" || letterArray[i] === "e" || letterArray[i] === "i"|| letterArray[i] === "o" || letterArray[i] === "u"){
      count ++;
    }
  }
  return count;
}
Entry.prototype.consonantCount = function() {
  const body = this.body.toLowerCase();
  const letterArray = body.split("");
  let count = 0;
    for (let i = 0; i < letterArray.length; i++) {
    if(letterArray[i] !== "a" || letterArray[i] !== "e" || letterArray[i] !== "i"|| letterArray[i] !== "o" || letterArray[i] !== "u"){
      count ++;
    }
  }
  return count;
}

Entry.prototype.getTeaser = function() {
  const sentence = this.body.split(".");
  console.log(sentence);
  const wordArray = sentence[0].split(" ");
  let count = 0;
  const teaserSentence = []
  for (let i = 0; i < wordArray.length; i++) {
    if(count < 8){
      teaserSentence.push(wordArray[i])
    }else {
      break;
    }
    count ++;
  }
  return teaserSentence.join(" ");
}
