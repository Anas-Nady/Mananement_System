

let containerMain = document.createElement('div');
let head = document.createElement('div');
let tagMain = document.createElement('h3')
let pMain = document.createElement('p')
let inputs = document.createElement('div')
let mainForm = document.createElement('form')
let inputTitlePro = document.createElement('input')
let calcPro = document.createElement('div')
let inputPrice = document.createElement('input')
let inputAds = document.createElement('input')
let inputPre = document.createElement('input')
let inputDiscount = document.createElement('input')
let finalPrice = document.createElement('span')
let totalContent = document.createTextNode('Totel :')
let inputProcount = document.createElement('input')
let inputCategory = document.createElement('input')
let createBtn = document.createElement('button')
let btnContent = document.createTextNode('Create')
let outputs = document.createElement('div')
let Allsearch = document.createElement('div')
let inputSearch = document.createElement('input')
let allBtnSearch = document.createElement('div')
let btnSearchTitle = document.createElement('button')
let btnSearchcategory = document.createElement('button')
let btntitlecontent = document.createTextNode('Search By Title')
let btncategorycontent = document.createTextNode('Search By Category')
let deleteAllPro = document.createElement('div')
let table = document.createElement('table')
let tableTr = document.createElement('tr')
let tableTh = document.createElement('th')
let tableTbody = document.createElement('tbody')
let thcontent = ['id','title','price','taxes','ads','discount','total','category','update','delete']



// Add element To body
document.body.appendChild(containerMain)    
// Add Element To Main  Container 
containerMain.className = 'container';
containerMain.appendChild(head)
containerMain.appendChild(inputs)
containerMain.appendChild(outputs)

// create Text Content
let h3Content = document.createTextNode('Cruds')
let pContent = document.createTextNode('Product Mananement System')


// Add Text Content
tagMain.appendChild(h3Content)
pMain.appendChild(pContent)

// Add element To Head
head.className = 'head'
head.appendChild(tagMain)
head.appendChild(pMain)

console.log(containerMain);

// Add Element To inputs 
inputs.className = 'inputs';
inputs.appendChild(mainForm)


// Add Attributs To inputs 
inputTitlePro.setAttribute('id','title')
inputTitlePro.setAttribute('type','text')
inputTitlePro.setAttribute('placeholder','Title Product')
inputTitlePro.setAttribute('maxlength','30')


inputPrice.setAttribute('id','price')
inputPrice.setAttribute('type','number')
inputPrice.setAttribute('placeholder','Price')
inputPrice.setAttribute('maxlength','3')
inputPrice.setAttribute('onkeyup','getTotla()')


inputAds.setAttribute('id','ads')
inputAds.setAttribute('type','number')
inputAds.setAttribute('placeholder','ads')
inputAds.setAttribute('maxlength','2')
inputAds.setAttribute('onkeyup','getTotla()')


inputPre.setAttribute('id','pre')
inputPre.setAttribute('type','number')
inputPre.setAttribute('placeholder','pre')
inputPre.setAttribute('maxlength','2')
inputPre.setAttribute('onkeyup','getTotla()')


inputDiscount.setAttribute('id','discount')
inputDiscount.setAttribute('type','number')
inputDiscount.setAttribute('placeholder','discount')
inputDiscount.setAttribute('maxlength','2')
inputDiscount.setAttribute('onkeyup','getTotla()')


finalPrice.setAttribute('id','total-price')
finalPrice.appendChild(totalContent)


calcPro.className = 'calc-price';
calcPro.appendChild(inputPrice)
calcPro.appendChild(inputAds)
calcPro.appendChild(inputPre)
calcPro.appendChild(inputDiscount)
calcPro.appendChild(finalPrice)


inputProcount.setAttribute('id','count')
inputProcount.setAttribute('type','number')
inputProcount.setAttribute('placeholder','Product Count')

inputCategory.setAttribute('id','category')
inputCategory.setAttribute('type','text')
inputCategory.setAttribute('placeholder','Category')


createBtn.appendChild(btnContent)
createBtn.setAttribute('id','create')


// Add element To form
mainForm.appendChild(inputTitlePro)
mainForm.appendChild(calcPro)
mainForm.appendChild(inputProcount)
mainForm.appendChild(inputCategory)
mainForm.appendChild(createBtn)
mainForm.appendChild(createBtn)

// outputs
outputs.className = 'outputs'
outputs.appendChild(Allsearch)
outputs.appendChild(deleteAllPro)
outputs.appendChild(table)

// inside outputs 
Allsearch.className = 'search-content';
Allsearch.appendChild(inputSearch)
Allsearch.appendChild(allBtnSearch)

inputSearch.setAttribute('id','search')
inputSearch.setAttribute('type','text')
inputSearch.setAttribute('placeholder','Search')

// 
allBtnSearch.className = 'btnSearch';
allBtnSearch.appendChild(btnSearchTitle)
allBtnSearch.appendChild(btnSearchcategory)

btnSearchTitle.setAttribute('id','searchTitle')
btnSearchTitle.appendChild(btntitlecontent)


btnSearchcategory.setAttribute('id','searchCategory')
btnSearchcategory.appendChild(btncategorycontent)

deleteAllPro.setAttribute('id','deleteAllPro')


// Table 

table.appendChild(tableTr)



tableTbody.setAttribute('id','tbody')

function element(th) {
    let tableTh = document.createElement('th')
    let thContent = document.createTextNode(th)
    tableTh.appendChild(thContent)
    tableTr.appendChild(tableTh)
}

for (let i = 0; i < thcontent.length; i++) {
    element(thcontent[i])
}
