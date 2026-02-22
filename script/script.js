let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
// console.log(interviewCount);

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
console.log(mainContainer);



function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerHTML = interviewList.length
    rejectedCount.innerHTML = rejectedList.length
}
calculateCount()


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white')
    interviewFilterBtn.classList.remove('bg-blue-500','text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white')


    allFilterBtn.classList.add('text-[#64748B]')
    interviewFilterBtn.classList.add('text-[#64748B]')
    rejectedFilterBtn.classList.add('text-[#64748B]')

    const selected = document.getElementById(id)
    console.log(selected);

    selected.classList.add('bg-blue-500','text-white')
}