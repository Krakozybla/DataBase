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
        born: 2002,
    }
]
let valInp = '';
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
let resNeagitive = document.querySelector('.res-negative');
let container;

inp.addEventListener('keyup', ()=>{
    const regExp = new RegExp("^[A-zА-яЁё]+$"); 
    const val = inp.value.trim();
    if(!regExp.test(val)){
        resNeagitive.textContent = 'You can write only words, numbers are prohibited value!!!'
        btn.setAttribute("disabled", "disabled");
        if(btn.hasAttribute("disabled")){
            btn.classList.add('disabled');
            btn.textContent = 'Disabled';
        }
        return ''
    }else if(inp.value === ''){
        resNeagitive.textContent = ''
        btn.removeAttribute("disabled", "disabled");
        if(!btn.hasAttribute("disabled")){
            btn.classList.remove('disabled');
            btn.textContent = 'Send Request';
        }
    }else{
        resNeagitive.textContent = ''
        btn.removeAttribute("disabled", "disabled");
        if(!btn.hasAttribute("disabled")){
            btn.classList.remove('disabled');
            btn.textContent = 'Send Request';
        }
    }
})
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
        container.innerHTML = '';
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
    ${item.age ? 
        `<li class="age">Age: ${item.age}</li>`
        :
        
        'Not definet'
    }
    <li class="born">Born in: ${item.born}</li>
    <button class="btn-del">Delite</button>
    </div>
    `  ) 

    container.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-del')){
            const target = e.target.closest('.person-info')
            let animate = container.animate([
                {"transform":"translateY(1000px)"},
            ], 1000)
            animate.addEventListener('finish', ()=>{
                target.remove();
            })
        }
    })
}

