
let body = document.querySelector('body')
let container = document.querySelector('.container')
let containerP = document.querySelector('.container p')
let containerHead = document.querySelector('.container .head')
let containerHeadP = document.querySelector('.container .head p')
// let allinputs = document.querySelectorAll('input')
// let allinputsFocus = document.querySelectorAll('input:focus')
// let inputCalc = document.querySelector('.calc-price input')
let totalprice = document.getElementById('total-price')
// let buttonCreate = document.querySelector('#create')
// let buttonSearch1 = document.querySelector('#searchTitle')
// let buttonSearch2 = document.querySelector('#searchCategory')
let btnSearch = document.querySelector('.btnSearch')
let tabelmain = document.querySelector('table')
// let tabelTH = document.querySelectorAll(' table tr th')
// let btnAll = document.querySelectorAll('button')


body.style.cssText = 'background-color: #101010; font-family: Tahoma, Arial, sans-serif; height: 100vh;';
container.style.cssText = 'width: 1170px; background-color: #353535; margin: auto; padding: 10px 20px; color: white; text-transform: capitalize; font-size: 20px;';
containerP.style.cssText = 'font-size: 25px; opacity: .7; color: #00ffe766; margin: 10px 0;';
containerHead.style.cssText = 'margin: auto; text-align: center; font-size: 40px; color: #2a9da5;';
containerHeadP.style.cssText = 'font-size: 30px; margin: 20px auto; opacity: .7;';
// allinputs.style.cssText = 'padding: 10px 20px; width: 100%; outline: none; border: none; margin: 4px 0; height: 40px; color: black; background-color: #d3d0d0;'
// allinputsFocus.style.cssText = 'background-color: white;';
// inputCalc.style.setProperty('width','21%','impoetant')
totalprice.style.cssText = 'padding: 4px 6px; background-color: red; width: 13,7%; display: inline-flex; height: 40px;';
// buttonCreate.style.cssText = 'width: 100%; background-color: #2a9da5; padding: 10px 20px; color: white; font-size: 20px; outline: none; border: none; margin: 4px 0; cursor: pointer;';
btnSearch.style.cssText = 'display: flex; justify-content: space-between;';
// buttonSearch1.style.cssText = 'width: 40%; background-color: #2a9da5; padding: 10px 20px; color: white; font-size: 20px; outline: none; border: none; margin: 4px 0; cursor: pointer;'
// buttonSearch2.style.cssText = 'width: 40%; background-color: #2a9da5; padding: 10px 20px; color: white; font-size: 20px; outline: none; border: none; margin: 4px 0; cursor: pointer;'
tabelmain.style.cssText = 'width: 100%; text-align: center; margin-top: 20px';
// tabelTH.style.cssText = 'background-color: #2a9da5; padding: 10px 15px; border-radius: 4px; position: relative; letter-spacing: .5px;';
// btnAll,style.cssText = 'background-color: #2a9da5; padding: 10px 20px; color: white; font-size: 20px; outline: none; border: none; margin: 4px 0; cursor: pointer;'