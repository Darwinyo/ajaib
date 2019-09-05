var arr= [{
    name: 'Clark Kent',
    alterEgo: 'Superman',
    gender: 'Male',
    powers: ['super human strength', 'flight', 'x-ray vision', 'heat vision']
  }, {
    name: 'Barry Allen',
    alterEgo: 'The Flash',
    gender: 'Male',
    powers: ['super speed', 'phasing', 'time travel', 'dimensional travel']
  }, {
    name: 'Diana Prince',
    alterEgo: 'Wonder Woman',
    gender: 'Female',
    powers: ['super human strength', 'super human reflexes', 'super human agility', 'flight']
  }, {
    name: 'Bruce Banner',
    alterEgo: 'The Hulk',
    gender: 'Male',
    powers: ['super human strength', 'thunder clap', 'super healing factor']
  }, {
    name: 'Wade Wilson',
    alterEgo: 'Deadpool',
    gender: 'Male',
    powers: ['super healing factor', 'super human agility']
  }, {
    name: 'Jean Grey',
    alterEgo: 'Phoenix',
    gender: 'Female',
    powers: ['telepathy', 'telekinesis', 'rearrange matter at will']
  }, {
    name: 'Wanda Maximoff',
    alterEgo: 'Scarlet Witch',
    gender: 'Female',
    powers: ['reality manipulation', 'astral projection', 'psionic']
  }]

function getAlterEgo(){
    let alterEgo=[];

     arr.forEach(x=>alterEgo.push(x.alterEgo));
     console.log(alterEgo);

}
getAlterEgo()

function getPower(){
    let powers=[];

     arr.forEach(x=>powers.push(...x.powers));
     let uniquePowers=[...new Set(powers)];
     console.log(uniquePowers.sort());

}
getPower();

function getByGender(){
    let femaleGender=[];
    let maleGender=[];
    arr.forEach((a)=>{
        if(a.gender==='Male'){
            maleGender.push(a);
        } else{
            femaleGender.push(a);
        }
    })
    let result=[{
        gender: 'Male',
        heroes:[...maleGender]
    }, {
        gender:'Female',
        heroes:[...femaleGender]
    }]
    console.log(JSON.stringify(result));
}
getByGender();

function transformIntoTable(){
  let result=[];
  result.push(["Name","Alter Ego", "Gender"]);
  arr.forEach(x=>result.push([x.name,x.alterEgo,x.gender]));
  console.log(result);
}

transformIntoTable();