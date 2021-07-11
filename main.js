let person = [
    Alex = {
        name: 'Alex',
        city: 'Donetsk',
        army: 'Donetsk rebel army',
        age: 35,
        born: 1985,
    },
    Pavel = {
        name: 'Pavel',
        city: 'Donetsk',
        army: 'USA Marine Corps',
        age: 31,
        born: 1982,
    },
    Oleg = {
        name: 'Oleg',
        city: 'Donetsk',
        army: 'Donetsk rebel army',
        age: 18,
        born: 2002,
    }
]
let valInp = '';
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    valInp = inp.value;
    let map = false;
    person.forEach((item, index)=>{
        if(valInp === item.name){
            map = true;
            showPerson(item, index);
        }
    })
    if(!map){
        console.log('Such person in not excist in DataBase');
    }
    inp.value = '';
})

const showPerson = (item, index) =>{
    const container = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.insertAdjacentHTML('afterbegin', `
    <div class="person-info"${index}> 
    <li class="name">Name: ${item.name}</li>
    <li class="city">City: ${item.city}</li>
    <li class="army">Army: ${item.army}</li>
    <li class="age">Age: ${item.age}</li>
    <li class="born">Born in: ${item.born}</li>
    </div>
    `  ) 
}