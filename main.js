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
let resNeagitive = document.querySelector('.res-negative');
let container;

btn.addEventListener('click', ()=>{
    valInp = inp.value;
    let map = false;
    if(valInp.length <= 0){
        resNeagitive.textContent = "Write name of person you are looking now";
        return '';
    }
    person.forEach((item, index)=>{
        if(valInp === item.name){
            map = true;
            showPerson(item, index);
            resNeagitive.textContent = "";
        }
    })
    if(!map){
        resNeagitive.textContent = `Such person ${valInp} is not excist in DataBase`;
    }
    inp.value = '';
})

const showPerson = (item, index) =>{
    container = document.querySelector('.container');
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
    <button class="btn-del">Delite</button>
    </div>
    `  ) 

    container.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-del')){
            const target = e.target.closest('.person-info')
            target.remove();
        }
    })
}

