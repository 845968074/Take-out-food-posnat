let mainCommand=require("../command/maincommand-class");
let command1=require("../command/GoToZiptoBarcodepage-class");
let command2=require("../command/GoToBrcodeToZipcodepage-class");
let command3=require("../command/Exit-class");
let mapping={
  "1":new command1(),
  "2":new command2(),
   "3":new command3(),
  "main":new mainCommand()
};
function executeCommand(command, input) {
  if (command.execute) {
    return command.execute(input);
  } else {
    return command(input);
  }
}
class route
{
  constructor() {
    this.mapping={
      "1":new command1(),
      "2":new command2(),
      "3":new command3(),
      "main":new mainCommand()}
  }
  execute(input) {
    let response;
    let command =this.mapping[input];
    let result = "";
    if (command) {
      response =command.execute();
      result += response._text;
    } else if (this.mapping["*"]) {
     //response = this.mapping["*"](input);
      response=executeCommand(this.mapping["*"],input);
      //console.log(response);
      result += response._text;
    } else {
      return "no command";

    }
    if(response._restet){
      this.mapping={
        "1":new command1(),
        "2":new command2(),
        "3":new command3(),
        "main":new mainCommand()};
      result+=this.mapping["main"].execute()._text;
    }
    if (response._newmapping) {
     this.mapping=response._newmapping;
    }
    if (response._next) {
      let newResponse;
      do {
        newResponse = response._next.execute();
        result += "\n";
        result += newResponse._text;
      } while (newResponse.next);
    }
    return result;
  }
}
route.reset=function () {
this.mapping
};
module.exports=route;

/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce()
  {
    return `My name is Tom. I am 21 years old.`;
  }
}
class Student extends Person
{
 constructor(name,age)
 {
   super(name,age);
 }
 introduce()
 {
   person=new Person().introduce();
   return person+`I am a Student. I am at Class 2.`;
 }
}
class Worker extends Person
{
  constructor()
  {
    super();
  }
  introduce(name,age)
  {
    return new Person().introduce()+`I am a Worker. I have a job.`;
  }
}
let person=new Person();
let student=new Student();
let worker=new Worker();
//console.log(person.introduce());
console.log(student.introduce());
console.log(worker.introduce());

*/

