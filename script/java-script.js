
let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');



const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white');
    interviewFilterBtn.classList.remove('bg-blue-500','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white');

    allFilterBtn.classList.add('text-[#64748B]');
    interviewFilterBtn.classList.add('text-[#64748B]');
    rejectedFilterBtn.classList.add('text-[#64748B]');

    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-500','text-white');

    if(id==='interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id==='all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id==='rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click',function(event){

    if(event.target.closest('button')?.classList.contains('delete-btn')){
        const card = event.target.closest('.card');
        const plantName = card.querySelector('.plantName').innerText;
        card.remove();
        interviewList = interviewList.filter(x=>x.plantName!==plantName);
        rejectedList = rejectedList.filter(x=>x.plantName!==plantName);
        calculateCount();
        if(!filterSection.classList.contains('hidden')){
            renderInterview();
            renderRejected();
        }
        return;
    }



    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.closest('.card');
        const plantName = parentNode.querySelector('.plantName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const types = parentNode.querySelector('.types').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.applied').innerText = 'Interview';
        const cardInfo = {plantName, position, types, applied:'Interview', description};
        if(!interviewList.find(x=>x.plantName===plantName)) interviewList.push(cardInfo);
        rejectedList = rejectedList.filter(x=>x.plantName!==plantName);
        calculateCount();
        toggleStyle('interview-filter-btn');
        return;
    }

    if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.closest('.card');
        const plantName = parentNode.querySelector('.plantName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const types = parentNode.querySelector('.types').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.applied').innerText = 'Rejected';
        const cardInfo = {plantName, position, types, applied:'Rejected', description};
        if(!rejectedList.find(x=>x.plantName===plantName)) rejectedList.push(cardInfo);
        interviewList = interviewList.filter(x=>x.plantName!==plantName);
        calculateCount();
        toggleStyle('rejected-filter-btn');
        return;
    }

});

function renderInterview(){
    filterSection.innerHTML='';
    if(interviewList.length===0){
        filterSection.innerHTML=`
         <div class="text-center text-gray-500 py-10">
            <img class="mx-auto mb-4 w-32" src="./assets/jobs.png" />
            <p class="text-2xl mb-1.5 text-blue-950 font-bold">No jobs available</p>
            <p>Check back soon for new job opportunities</p>
        </div>
        `;
        return;
    }

    for(let interview of interviewList){
        let div=document.createElement('div');
        div.className='card bg-base-200 gap-y-2 p-4 flex justify-between mb-4';
        div.innerHTML=`
        <div class="gap-y-2 space-y-6 flex-1">
            <div class="flex justify-between">
                <div class="space-y-1.5">
                    <h2 class="plantName font-bold text-blue-950 text-2xl">${interview.plantName}</h2>
                    <p class="position text-[#64748B]">${interview.position}</p>
                </div>
            </div>
            <div>
                <p class="types text-[#64748B]">${interview.types}</p>
            </div>
            <div class="space-y-1.5">
                <p class="applied w-[100px] h-8 content-center pl-1.5 font-semibold bg-blue-100 rounded-sm">${interview.applied}</p>
                <p class="description">${interview.description}</p>
            </div>
            <div>
                <button class="interview-btn btn btn-outline btn-secondary">interview</button>
                <button class="rejected-btn btn btn-outline btn-accent">Rejected</button>
            </div>
        </div>`;
        filterSection.appendChild(div);
    }
}

function renderRejected(){
    filterSection.innerHTML='';
    if(rejectedList.length===0){
        filterSection.innerHTML=`<div class="text-center text-gray-500 py-10">
            <img class="mx-auto mb-4 w-32" src="./assets/jobs.png" />
            <p class="text-2xl mb-1.5 text-blue-950 font-bold">No jobs available</p>
            <p>Check back soon for new job opportunities</p>
        </div>`;
        return;
    }
    for(let rejected of rejectedList){
        let div=document.createElement('div');
        div.className='card bg-base-200 gap-y-2 p-4 flex justify-between mb-4';
        div.innerHTML=`
        <div class="gap-y-2 space-y-6 flex-1">
            <div class="flex justify-between">
                <div class="space-y-1.5">
                    <h2 class="plantName font-bold text-blue-950 text-2xl">${rejected.plantName}</h2>
                    <p class="position text-[#64748B]">${rejected.position}</p>
                </div>
            </div>
            <div>
                <p class="types text-[#64748B]">${rejected.types}</p>
            </div>
            <div class="space-y-1.5">
                <p class="applied w-[100px] h-8 content-center pl-1.5 font-semibold bg-blue-100 rounded-sm">${rejected.applied}</p>
                <p class="description">${rejected.description}</p>
            </div>
            <div>
                <button class="interview-btn btn btn-outline btn-secondary">interview</button>
                <button class="rejected-btn btn btn-outline btn-accent">Rejected</button>
            </div>
        </div>`;
        filterSection.appendChild(div);
    }
}