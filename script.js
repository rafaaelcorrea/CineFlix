// CONGIG. DO BOTÃO DO 1º CATÁLOGO 

function catal_1() { // abre o primeiro trailler 
 var res = window.document.getElementById('res_01')

 res.innerHTML = ' <iframe width="275" height="250" src="https://www.youtube-nocookie.com/embed/auX_-cfM6Kw?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '

 
}

var bot = window.document.getElementById('botao1')

bot.addEventListener('mouseenter', entrar_bot1) // atribuindo o evento de entar com o mouse  a função desejada
bot.addEventListener('mouseout' , sair_bot1) // atribuindo o evento de sair com o mouse a função desejada 

function  entrar_bot1 () { // muda a cor do botão  "ver trailer" ao parar o mouse em cima dele .

bot.style.background= 'red'
bot.style.color='white'


}

function sair_bot1 ( ) { // muda a cor do botão "ver trailer" ao sair do mouse em cima dele

    bot.style.background = 'white'
    bot.style.color = 'black'

}


// --------------------------

// CONFIG. DO BOTÃO DO 2º CATÁLOGO 

function catal_2() { // abre o segundo  trailler do 2º catálogo 
 
    var res2 = window.document.getElementById('res_02')


res2.innerHTML = '<iframe width="275" height="250" src="https://www.youtube.com/embed/NyU59-mln7o?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '


}

var bot2 = window.document.getElementById ('botao2') 
bot2.addEventListener('mouseenter', entrar_bot2 )
bot2.addEventListener('mouseout' , sair_bot2 )

function entrar_bot2 () {

bot2.style.background ='red'
bot2.style.color = 'white'

}

function sair_bot2 () { 

bot2.style.background = 'white'
bot2.style.color = 'black'

}

function catal_3() {

    var res3 = window.document.getElementById('res_03')

    res3.innerHTML ='<iframe width="275" height="250" src="https://www.youtube.com/embed/DQcn5RWrfX0?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

}

var bot3 = window.document.getElementById('botao3')
bot3.addEventListener('mouseenter' , entrar_bot3 )
bot3.addEventListener('mouseout', sair_bot3 )

function entrar_bot3 () {

bot3.style.background = 'red'
bot3.style.color ='white'

}

function sair_bot3 () {

    bot3.style.background = ' white '
    bot3.style.color = 'black'
}


function proc_film() {

    var procu = window.document.getElementById('proc')
    if (procu == "aguas do sul") {

        
    }

window.alert('Ops! Esse filme não está em cartaz. ')


}