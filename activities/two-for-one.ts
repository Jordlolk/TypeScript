/* In english when we have to make an 
  offer to buy one thing and receive another for free. 
  I say two-for-one, but in this case we have a special case. 
  i´ve to create a function that says "one for you, one for me."
  but if I know the name of the person i migth to say "one for Alice, one for me"
  if(isBlack == 0 && howManyZero === 2){
      return `${colors.indexOf(color[0])} kiloohms`
    }else{
      return code*zeros+' ohms'
    }
*/
function twoForOne(personName: string) {
  let personExists = typeof personName != "string" ? "you" : personName;
  console.log(`One for ${personExists}, one for me.`);
  console.log('${10**colors.indexOf(color[2])}'.slice(1));
  
  
}
twoForOne("Alice");
twoForOne(undefined);
