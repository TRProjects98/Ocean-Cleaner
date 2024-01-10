// Ocean Cleaner Game //

var divAjuda = document.getElementById("divAjuda");
var main2 = document.getElementById('main_history');
var main3 = document.getElementById('main_regras');
var inicio = document.getElementById('title');
var logo = document.getElementById('logo');
var startjogar = document.getElementById('jogar');
var regras = document.getElementById('regras');
var narrativa = document.getElementById('narrativa');
var caixabutton = document.getElementById('caixabutton');
var play = document.getElementById('playgame');
var divJogar = document.getElementById('main');
var divHist = document.getElementById('main_history');
var divRegras = document.getElementById('divRegras');
var som = document.getElementById('som');
var soundboleano;
var bgmove = document.getElementById('bgmove');
var voltar = document.getElementById('voltar');
var barraprogresso = document.getElementById('barraprogresso');
var barra = document.getElementById('barra');
var vidas = document.getElementById('vidas');
var tempofundo;
var timer_barra;
var tamanho_barra = 0;
var jogo= true;
var micro = 0;

var w = window.innerWidth;
var h = window.innerHeight;
var limite = true;
var num_obj, num_plas;
var pos_obj, pos_top, pos_plas;

var conta_vida=3;
var tiravida = true;

var parar_jogo = false;

var audioFundo = new Audio();
audioFundo.src = 'sons/somdefundo.mp3';

var audioVicky = new Audio();
audioVicky.src = 'sons/somfundo_vicky.mp3';

var audioWin = new Audio();
audioWin.src = 'sons/winning.wav';

var audioPlastic = new Audio();
audioPlastic.src = 'sons/apanhamicro.wav';

var audioColisao = new Audio();
    audioColisao.src = 'sons/colisao.wav';

var audioFail = new Audio();
audioFail.src = 'sons/fail.wav';

//
window.onload = function () {

    landingpage();
    document.getElementById('jogar').onclick = function () {
        jogar();
    };
};
window.onkeydown = function (event) {
    processa_tecla(event)
};
window.addEventListener("load", function () {
    const loader = document.querySelector(".carrega");
    loader.className += ' hidden';

    document.getElementById('oc').className = 'mt-5';
});


function landingpage() {

    if (jogo==true){
        som.style.zIndex ='1';
        som.style.textAlign ='text-right';

        document.getElementById('regras').onclick = function () {
            rules();
        };
        document.getElementById('narrativa').onclick = function () {
            audioFundo.pause();
            historia();
        };

        divAjuda.style.display = 'block';
        main.style.display = 'block';

        divAjuda.style.position = "absolute";
        divAjuda.style.width = "100%";
        divAjuda.style.height = "100%";

        inicio.style.textAlign = 'center';
        logo.className = 'col-3';
        logo.style.display = 'inline';

        logo.innerHTML = '<img src="imagens/OceanCleaner.png" id="oceancleaner" class="align-content-center mt-5 mx-auto" height="230" width="245">';

        caixabutton.style.textAlign = 'center';
        caixabutton.className = 'marginbuttontop';
        startjogar.className = 'col-3';
        startjogar.style.display = 'inline';
        regras.className = 'col-3';
        regras.style.display = 'inline';
        narrativa.className = 'col-3';
        narrativa.style.display = 'inline';

        startjogar.innerHTML = '<img src="imagens/playgame.png" id="playgame" height="130" width="121">';

        $('#playgame').hover(function () {
            $(this).attr('src', 'imagens/playgamehover.png');
        }, function () {
            $(this).attr('src', 'imagens/playgame.png');
        });

        regras.innerHTML = '<img src="imagens/rules.png" id="rules" height="130" width="121">';

        $('#rules').hover(function () {
            $(this).attr('src', 'imagens/ruleshover.png');
        }, function () {
            $(this).attr('src', 'imagens/rules.png');
        });

        narrativa.innerHTML = '<img src="imagens/story.png" id="story" height="130" width="121">';

        $('#story').hover(function () {
            $(this).attr('src', 'imagens/storyhover.png');
        }, function () {
            $(this).attr('src', 'imagens/story.png');
        });
        som.innerHTML = '<img src="imagens/volumeoff.png" id="somoff" height="50" width="50">';
        som.style.position = "absolute";
        som.style.right = "2.5rem";
        som.style.top = "27px";

        som.onclick = function () {

            if (soundboleano == true) {
                audioFundo.pause();
                som.innerHTML = '<img src="imagens/volumeoff.png" id="somoff" height="50" width="50">';
                soundboleano = false;
            } else {
                audioFundo.play();
                som.innerHTML = '<img src="imagens/volumeon.png" id="somon" height="50" width="50">';
                soundboleano = true;
            }
        };

        document.getElementById('a_carregar').style.fontFamily = "Ubuntu";
        document.getElementById('oc').style.marginTop = "4rem";

        bgmove = document.getElementById("bgmove");
        bgmove.style.display ='none';
        bgmove.style.backgroundPositionX = 0;

        vidas.innerHTML = '<img src="imagens/vida3.png" alt="toca" id="vida3" width="230" height="60">';
        vidas.style.display ='none';
        vidas.style.position ='absolute';
        vidas.style.top = 20 + 'px';
        vidas.style.left = 120 + "px";

        voltar.innerHTML = '<img src="imagens/goback.png" id="back">';
        $('#back').hover(function () {
            $(this).attr('src', 'imagens/gobackhover.png');
        }, function () {
            $(this).attr('src', 'imagens/goback.png');
        });


        voltar.style.display ='none';
        voltar.style.position ='absolute';
        voltar.style.top = 15 + 'px';
        voltar.style.left = 20 + 'px';

        barraprogresso.innerHTML = '<img src="imagens/progresso.png" id="barrabaixo" height="75">';
        barraprogresso.style.display ='none';
        barraprogresso.style.position ='none';
        barraprogresso.style.position ='absolute';
        barraprogresso.style.top = 15 + 'px';
        barraprogresso.style.left = 65 + '%';
        barraprogresso.style.right = "3rem";

        barra.innerHTML = '<img src="imagens/barra.png" id="barranova" height="25" width="285">';
        barra.style.display ='none';
        barra.style.position ='none';
        barra.style.position ='absolute';
        barra.style.top = 37 + 'px';
        barra.style.left = 66.2 + '%';
        barra.style.right = "3rem";


        document.getElementById('contadormicro').style.display = 'none';
        document.getElementById('contadormicro').style.position ='absolute';
        document.getElementById('contadormicro').style.top = 15 + 'px';
        document.getElementById('contadormicro').style.left = 40 + '%';
        document.getElementById('contadormicro').style.fontSize = '1.5rem';
        document.getElementById('contadormicro').style.color = 'white';

        divJogar.innerHTML = '<img src="imagens/Vicky2.gif" id="vicky" width="400" height="221">';

        document.getElementById("vicky").style.position = "absolute";
        document.getElementById('vicky').style.top = 200 + 'px';
        document.getElementById("vicky").style.left = 220 + "px";
        document.getElementById('vicky').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/coral_0.png' id='obj0'>";
        document.getElementById('obj0').style.position = 'fixed';
        document.getElementById("obj0").style.left = w + "px";
        document.getElementById('obj0').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/coral_1.png' id='obj1' >";
        document.getElementById('obj1').style.position = 'fixed';
        document.getElementById("obj1").style.left = w + "px";
        document.getElementById('obj1').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/planta_2.png' id='obj2' >";
        document.getElementById('obj2').style.position = 'fixed';
        document.getElementById("obj2").style.left = w + "px";
        document.getElementById('obj2').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/coral_3.png' id='obj3' >";
        document.getElementById('obj3').style.position = 'fixed';
        document.getElementById("obj3").style.left = w + "px";
        document.getElementById('obj3').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/coral_4.png' id='obj4' >";
        document.getElementById('obj4').style.position = 'fixed';
        document.getElementById("obj4").style.left = w + "px";
        document.getElementById('obj4').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/estrela_5.png' id='obj5'>";
        document.getElementById('obj5').style.position = 'fixed';
        document.getElementById("obj5").style.left = w + "px";
        document.getElementById('obj5').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/estrela_6.png' id='obj6' >";
        document.getElementById('obj6').style.position = 'fixed';
        document.getElementById("obj6").style.left = w + "px";
        document.getElementById('obj6').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/peixe_7.png' id='obj7'>";
        document.getElementById('obj7').style.position = 'fixed';
        document.getElementById("obj7").style.left = w + "px";
        document.getElementById('obj7').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/polvo_8.png' id='obj8' >";
        document.getElementById('obj8').style.position = 'fixed';
        document.getElementById("obj8").style.left = w + "px";
        document.getElementById('obj8').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/tartaruga_9.png' id='obj9' >";
        document.getElementById('obj9').style.position = 'fixed';
        document.getElementById("obj9").style.left = w + "px";
        document.getElementById('obj9').style.display = 'none';

        divJogar.innerHTML += "<img src= 'imagens/peixinho.png' id='obj10'>";
        document.getElementById('obj10').style.position = 'fixed';
        document.getElementById("obj10").style.left = w + "px";
        document.getElementById('obj10').style.display = 'block';
        document.getElementById('obj10').style.top = 200 + "px";

        var num_obj10 = 10;
        pos_obj = parseInt(document.getElementById("obj10").style.left);


        var timer_objetos = setInterval(function () {

            pos_obj = pos_obj - 2;
            document.getElementById("obj10").style.left = pos_obj + "px";

            if (pos_obj < -200) {
                pos_obj = w;
                num_obj = parseInt(Math.random() * 10);
                //console.log(num_obj);


                if (num_obj == 10) {
                    document.getElementById("obj" + num_obj).style.top = parseInt(Math.random() * h) + "px";
                }

            }

        }, 10);


        for (var n = 1; n <= 4; n++) {

            divJogar.innerHTML += '<img src="imagens/plástico' + n + '.png" id="plástico' + n + '" height="50" width="50">';
            document.getElementById('plástico' + n).style.top= parseInt(Math.random() * h) + "px";
            document.getElementById('plástico' + n).style.position = 'fixed';
            document.getElementById('plástico' + n).style.left = w + "px";
            document.getElementById('plástico' + n).style.display = 'none';

        }
    }

}

function processa_tecla(event) {
    console.log(event.key);
    pos_top = parseInt(document.getElementById('vicky').style.top);

    if (pos_top > 520 || pos_top < 0) {
        limite = false
    }


    if (limite == true) {
        if (pos_top >= 0) {
            if (event.key == 'ArrowUp') {
                document.getElementById('vicky').style.top = pos_top - 9 + 'px';
                limite = true;
            }
        }
        if (pos_top <= 520) {
            if (event.key == 'ArrowDown') {
                desce_jogador();
                limite = true;
            }
        }
    }


    if (limite == false) {
        if (pos_top < 0) {

            if (event.key == 'ArrowUp') {
                document.getElementById('vicky').style.top = 0 + 'px';
                limite = true
            }
            if (event.key == 'ArrowDown') {
                document.getElementById('vicky').style.top = pos_top + 9 + 'px';
                limite = true
            }
        }
        if (pos_top > 520) {
            if (event.key == 'ArrowDown') {
                document.getElementById('vicky').style.top = pos_top + 0 + 'px';
                limite = true
            }
        }

    }


}

function bg_movimento() {
    if(parar_jogo==false)
    {
        var velocidade = 5;
        bgmove.style.backgroundPositionX = parseInt(bgmove.style.backgroundPositionX) - velocidade * 1.7 + "px";
    }

}

function jogar() {

    tempofundo = setInterval("bg_movimento()", 40);


    divAjuda.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
    main.style.display = 'block';
    main.style.zIndex = '-1';
    bgmove.style.display = 'block';
    divJogar.style.position = "absolute";
    divJogar.style.width = "100%";
    divJogar.style.height = "100%";

    voltar.style.display ="block";
    vidas.style.display ="block";
    barraprogresso.style.display ="block";
    barra.style.display ="block";

    document.getElementById('contadormicro').style.display ='block';

    timer_barra = setInterval("aumentar()", 200);

    document.getElementById('obj10').style.display = 'none';

    document.getElementById('vicky').style.display = 'block';
    document.getElementById('obj0').style.display = 'block';
    document.getElementById('obj0').style.top = 455 + "px";
    document.getElementById('obj1').style.display = 'block';
    document.getElementById('obj1').style.top = 455 + "px";
    document.getElementById('obj2').style.display = 'block';
    document.getElementById('obj2').style.top = 455 + "px";
    document.getElementById('obj3').style.display = 'block';
    document.getElementById('obj3').style.top = 455 + "px";
    document.getElementById('obj4').style.display = 'block';
    document.getElementById('obj4').style.top = 455 + "px";
    document.getElementById('obj5').style.display = 'block';
    document.getElementById("obj5").style.top = parseInt(Math.random() * h-100) + "px";
    document.getElementById('obj6').style.display = 'block';
    document.getElementById('obj6').style.top = parseInt(Math.random() * h) + "px";
    document.getElementById('obj7').style.display = 'block';
    document.getElementById('obj7').style.top = parseInt(Math.random() * h) + "px";
    document.getElementById('obj8').style.display = 'block';
    document.getElementById('obj8').style.top = parseInt(Math.random() * h ) + "px";
    document.getElementById('obj9').style.display = 'block';
    document.getElementById('obj9').style.top = parseInt(Math.random() * h ) + "px";

    document.getElementById('voltar').onclick =function (){
        location.reload();
    };

    num_obj = parseInt(Math.random() * 10);
    //console.log(num_obj);
    pos_obj = parseInt(document.getElementById("obj" + num_obj).style.left);


    var timer_objetos = setInterval(function () {

        pos_obj = pos_obj - 2;
        document.getElementById("obj" + num_obj).style.left = pos_obj + "px";

        //console.log(pos_obj);

        if(pos_obj<-100)
        {
            document.getElementById("obj" + num_obj).style.display='none';
        }

        if (pos_obj < -200) {
            pos_obj = w;
            num_obj = parseInt(Math.random() * 10);
            document.getElementById("obj" + num_obj).style.display='block';
            //console.log(num_obj);


            if (num_obj == 0 || num_obj == 1 || num_obj == 2 || num_obj == 3 || num_obj == 4) {
                document.getElementById("obj" + num_obj).style.top = 550 + "px";
            } else {
                document.getElementById("obj" + num_obj).style.top = parseInt(Math.random() * h) + "px";
            }

        }
        deteta_colisao_objetos();

        if (parar_jogo==true)
        {
            clearInterval(timer_objetos);
        }

        if(tiravida == false)
        {
            setTimeout(function ()
            {
                tiravida = true;
                //console.log('é true')

            },1000);
        }




    }, 10);


    for (var n = 1; n <= 4; n++) {
        document.getElementById('plástico' + n).style.display = 'block';
        document.getElementById('plástico' + n).style.top = parseInt(Math.random() * h - 220) + "px";

    }


    var intrevalo = setTimeout(function () {
        liberta_o_plastico()

    }, 5000);


    document.getElementById('fim').innerHTML += '<img src="imagens/fundofim.png" id="fimimg">';
    document.getElementById('fim2').innerHTML += '<img src="imagens/fundofimmau.png" id="fimimg2">';
    document.getElementById('fim').style.display ='none';
    document.getElementById('fim2').style.display ='none';
    document.getElementById('fimimg').style.width = 100 + '%';
    document.getElementById('fimimg2').style.width = 100 + '%';
    document.getElementById('fimimg').style.height = 100 + '%';
    document.getElementById('fimimg2').style.height = 100 + '%';

    document.getElementById('fim').innerHTML += '<button class="btn btn-light buttonagain" id="jogaragain">JOGAR NOVAMENTE</button>';
    document.getElementById('jogaragain').style.display = 'none';
    document.getElementById('jogaragain').style.position = 'absolute';
    document.getElementById('jogaragain').style.top = '60%';
    document.getElementById('jogaragain').style.left = '40%';

    document.getElementById('fim2').innerHTML += '<button class="btn btn-light buttonagain" id="jogaragain2">JOGAR NOVAMENTE</button>';
    document.getElementById('jogaragain2').style.display = 'none';
    document.getElementById('jogaragain2').style.position = 'absolute';
    document.getElementById('jogaragain2').style.top = '60%';
    document.getElementById('jogaragain2').style.left = '40%';


}

function aumentar() {

    document.getElementById('barranova').style.width = tamanho_barra + "px";
    //console.log(tamanho_barra);
    tamanho_barra++;
    if (tamanho_barra >= 285) {
        clearInterval(timer_barra);
        pontos();
    }

    if(parar_jogo==true){

    }


}

function historia() {


    divAjuda.style.display = 'none';
    main.style.display = 'none';
    main3.style.display = 'none';

    som.style.display = 'none';

    divHist.style.position = "absolute";
    divHist.style.width = "100%";
    divHist.style.height = "100%";

    document.getElementById('h0').innerHTML = 'CLICAR NO ESPAÇO CONTINUAMENTE';
    document.getElementById('h0').style.fontFamily = 'Quicksand, sans-serif';
    document.getElementById('h0').style.fontSize = '5rem';
    document.getElementById('h0').style.color = 'white';
    document.getElementById('h0').style.textAlign = 'center';
    document.getElementById('h0').style.marginTop = '19%';
    document.getElementById('h0').innerHTML += '<img src="imagens/spacebar.png" id="spacebar" width="110px" height="40px">';
    document.getElementById('spacebar').style.display = 'block';
    document.getElementById('spacebar').className = 'mx-auto mt-2';

    slideimagens();

}

function rules() {
    divAjuda.style.display = 'none';
    main.style.display = 'none';
    main2.style.display = 'none';

    main3.style.display ='block';

    main3.style.position = "absolute";
    main3.style.width = "100%";
    main3.style.height = "100%";

    main3.innerHTML = '<img src="imagens/modal.png" id="modal">'

    document.getElementById('voltar').style.display = 'block';
    document.getElementById('voltar').style.zIndex = '99';
    document.getElementById('voltar').onclick =function (){
        location.reload();
    };

    document.getElementById('modal').style.height = '100%';

}

function slideimagens() {

    var i = 1;

    //console.log(i);
    window.onkeyup = function (event) {
        if (event.key == ' ') {
            if (i == 1) {
                audioVicky.play();
                som.innerHTML = '<img src="imagens/volumeon.png" id="somon" height="50" width="50">';
                document.getElementById('h0').style.display = 'none';
                img1();
                i++;
                return;
            }
            if (i == 2) {
                img2();
                i++;
                return;
            }
            if (i == 3) {
                img3();
                i++;
                return;
            }
            if (i == 4) {
                img4();
                document.getElementById('h1').style.display = 'none';
                document.getElementById('h3').style.display = 'none';
                document.getElementById('h2').style.display = 'none';
                i++;
                return;
            }
            if (i == 5) {
                img5();
                i++;
                return;
            }
            if (i == 6) {
                img6();
                i++;
                return;
            }
            if (i == 7) {
                img7();
                i++;
                return;
            }
            if (i == 8) {
                img8();
                i++;
            }
        }
    };

    img9();

}

function img1() {

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553;

        $("#exp1").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "80px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "30px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h1').style.display = 'inline';
    document.getElementById('h1').innerHTML = '<img src="imagens/exp_1.png" id="exp1">';

}

function img2() {

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553;

        $("#exp2").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "500px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "200px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h2').style.display = 'inline';
    document.getElementById('h2').innerHTML = '<img src="imagens/exp_2.png" id="exp2">';
}

function img3() {
    document.getElementById('h3').style.display = 'inline';
    document.getElementById('h3').innerHTML = '<img src="imagens/exp_3.png" id="exp3">';

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553;

        $("#exp3").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "870px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "60px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
}

function img4() {

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553; // 2 refere-se a borda

        $("#exp4").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "50px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "50px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h4').style.display = 'inline';
    document.getElementById('h4').innerHTML = '<img src="imagens/exp_4.png" id="exp4">';

}

function img5() {

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553; // 2 refere-se a borda

        $("#exp5").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "150px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "310px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h5').style.display = 'inline';
    document.getElementById('h5').innerHTML = '<img src="imagens/exp_5.png" id="exp5">';

}

function img6() {

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553;

        $("#exp6").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "470px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "480px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h6').style.display = 'inline';
    document.getElementById('h6').innerHTML = '<img src="imagens/exp_6.png" id="exp6">';

}

function img7() {

    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553; // 2 refere-se a borda

        $("#exp7").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "860px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "120px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h7').style.display = 'inline';
    document.getElementById('h7').innerHTML = '<img src="imagens/exp_7.png" id="exp7">';

}

function img8() {
    $(function () {
        var larguraTela = $(window).width();
        var alturaTela = $(document).height();
        var larguraElem = 491;
        var alturaElem = 553;

        $("#exp8").html("").animate({
                marginLeft: (larguraTela - larguraElem) + "px"
            },
            0,
            function () {
                $(this).html("").animate({
                        marginTop: (alturaTela - alturaElem) + "px"

                    },
                    0,
                    function () {
                        $(this).html("").animate({
                                marginLeft: "1150px"
                            },
                            0,
                            function () {
                                $(this).html("").animate({
                                        marginTop: "600px"
                                    },
                                    500,
                                    function () {
                                        $(this).html("");
                                    });
                            });
                    });
            });
    });
    document.getElementById('h8').style.display = 'inline';
    document.getElementById('h8').innerHTML = '<img src="imagens/exp_8.png" id="exp8" height="121" width="121">';

    document.getElementById('exp8').onclick = function () {
        audioVicky.pause();
        jogar();
        document.getElementById('som').style.display = 'block';
        document.getElementById('somon').src = 'imagens/volumeoff.png';
    }

}

function img9() {

    timerplay = setTimeout(function () {

        $(function () {
            var larguraTela = $(window).width();
            var alturaTela = $(document).height();
            var larguraElem = 491;
            var alturaElem = 553;

            $("#exp9").html("").animate({
                    marginLeft: (larguraTela - larguraElem) + "px"
                },
                0,
                function () {
                    $(this).html("").animate({
                            marginTop: (alturaTela - alturaElem) + "px"

                        },
                        0,
                        function () {
                            $(this).html("").animate({
                                    marginLeft: "1300px"
                                },
                                0,
                                function () {
                                    $(this).html("").animate({
                                            marginTop: "600px"
                                        },
                                        500,
                                        function () {
                                            $(this).html("");
                                        });
                                });
                        });
                });
        });
        document.getElementById('h9').style.display = 'inline';
        document.getElementById('h9').innerHTML = '<img src="imagens/exp_9.png" id="exp9" height="121" width="121">';

        document.getElementById('exp9').onclick = function () {
            audioVicky.pause();
            jogar();
        }

    }, 46000);
}

function desce_jogador() {

    if (pos_top < 510) {
        pos_top += 9;
        document.getElementById('vicky').style.top = pos_top + 'px';
    }
}

function fim() {

    parar_jogo=true;
    audioFundo.pause();
    audioWin.play();
    document.getElementById('fim').style.display ='block';
    document.getElementById('fim2').style.display ='none';
    voltar.style.display ="none";
    vidas.style.display ="none";
    barraprogresso.style.display ="none";
    barra.style.display ="none";
    document.getElementById('main').style.display ='none';
    document.getElementById('jogaragain').style.display = 'block';
    document.getElementById('jogaragain').style.zIndex = '100';
    document.getElementById('contadormicro').style.display = 'block';
    document.getElementById('contadormicro').style.color = 'black';

    document.getElementById('jogaragain').onclick = function () {
        location.reload();
    }

}

function fim_jogo() {

    tamanho_barra=0;
    parar_jogo = true;
    audioFail.play();
    audioFundo.pause();
    document.getElementById('fim2').style.display ='block';
    document.getElementById('fim').style.display ='none';
    voltar.style.display ="none";
    vidas.style.display ="none";
    barraprogresso.style.display ="none";
    barra.style.display ="none";
    document.getElementById('main').style.display ='none';
    document.getElementById('jogaragain2').style.display = 'block';
    document.getElementById('jogaragain2').style.zIndex = '999';
    document.getElementById('contadormicro').style.display = 'block';
    document.getElementById('contadormicro').style.color = 'black';

    document.getElementById('jogaragain2').onclick = function () {
        location.reload();
    }
}

function liberta_o_plastico() {

    num_plas=parseInt(Math.random()*4)+1;
    //console.log(num_plas);
    pos_plas=parseInt(document.getElementById('plástico'+num_plas).style.left);

    var timer_plasticos = setInterval(function ()
    {

        pos_plas=pos_plas-2;
        document.getElementById('plástico'+num_plas).style.left=pos_plas+'px';
        document.getElementById('plástico'+num_plas).style.display= 'block';

        if(pos_plas<-200)
        {
            pos_plas= w;
            num_plas=parseInt(Math.random()*4)+1;
            document.getElementById('plástico'+num_plas).style.top= parseInt(Math.random() * h) + "px";
            document.getElementById('plástico'+num_plas).style.visibility= 'visible';

        }

        deteta_colisao_plastico();

        if (parar_jogo==true)
        {
            clearInterval(timer_plasticos);
        }


    },5);
}
function deteta_colisao_plastico() {

    var jogador_top = parseInt(document.getElementById('vicky').style.top);
    var jogador_left = parseInt(document.getElementById('vicky').style.left);

    document.getElementById('contadormicro').style.fontFamily = 'Ubuntu';
    document.getElementById('contadormicro').style.fontSize = '3rem';
    document.getElementById('contadormicro').style.fontWeight = 'bold';

    for(var n=1; n<=4; n++)
    {
        var plastico_top = parseInt(document.getElementById('plástico'+n).style.top);
        var plastico_left = parseInt(document.getElementById('plástico'+n).style.left);

        if (plastico_left < jogador_left+307 && jogador_left < plastico_left+50)
        {
            switch (n)
            {
                case 1:
                    if (jogador_top+199>plastico_top && jogador_top<plastico_top+50)
                    {
                        document.getElementById('plástico'+n).style.visibility= 'hidden';
                        audioPlastic.play();
                        micro= micro + 1;
                        document.getElementById('contadormicro').innerHTML = micro;
                        console.log(micro);
                    }
                    break;
                case 2:
                    if (jogador_top+199>plastico_top && jogador_top<plastico_top+50)
                    {
                        document.getElementById('plástico'+n).style.visibility= 'hidden';
                        audioPlastic.play();
                        micro= micro +1;
                        document.getElementById('contadormicro').innerHTML = micro;
                        console.log(micro);
                    }
                    break;
                case 3:
                    if (jogador_top+199>plastico_top && jogador_top<plastico_top+50)
                    {
                        document.getElementById('plástico'+n).style.visibility= 'hidden';
                        audioPlastic.play();
                        micro= micro +1;
                        document.getElementById('contadormicro').innerHTML = micro;
                        console.log(micro);
                    }
                    break;
                case 4:
                    if (jogador_top+199>plastico_top && jogador_top<plastico_top+50)
                    {
                        document.getElementById('plástico'+n).style.visibility= 'hidden';
                        audioPlastic.play();
                        micro= micro +1;
                        document.getElementById('contadormicro').innerHTML = micro;
                        console.log(micro);
                    }
                    break;

            }

        }


    }

}

function deteta_colisao_objetos() {
    var jogador_top = parseInt(document.getElementById('vicky').style.top);
    var jogador_left = parseInt(document.getElementById('vicky').style.left);
    //console.log('entrou');



    for(var contador=0; contador<10; contador++) {

        var obj_top = parseInt(document.getElementById('obj'+contador).style.top);
        var obj_left = parseInt(document.getElementById('obj'+contador).style.left);
        //console.log(contador);

        switch (contador) {
            case 0:
                objwidth = 149;
                break;
            case 1:
                objwidth = 149;
                break;
            case 2:
                objwidth = 30;
                break;
            case 3:
                objwidth = 149;
                break;
            case 4:
                objwidth =149;
                break;
            case 5:
                objwidth = 146;
                break;
            case 6:
                objwidth =146;
                break;
            case 7:
                objwidth =146;
                break;
            case 8:
                objwidth =86;
                break;
            case 9:
                objwidth =161;
                break;

        }

        var largura = obj_left + objwidth;
        if (obj_left < jogador_left && jogador_left < largura) {
            switch (contador) {
                case 0:
                    if (jogador_top+100>obj_top && jogador_top+40<obj_top+210)
                    {
                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";

                    }
                    break;
                case 1:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+210)
                    {

                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";


                    }
                    break;
                case 2:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+102)
                    {
                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";


                    }
                    break;
                case 3:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+210)
                    {

                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";


                    }
                    break;
                case 4:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+200)
                    {

                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";



                    }
                    break;
                case 5:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+210)
                    {

                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";



                    }
                    break;
                case 6:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+167)
                    {
                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";

                    }
                    break;
                case 7:
                    if (jogador_top+100>obj_top && jogador_top+40<obj_top+133)
                    {
                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";



                    }
                    break;
                case 8:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+133)
                    {
                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";


                    }
                    break;

                case 9:
                    if (jogador_top+100>obj_top && jogador_top+100<obj_top+110)
                    {

                        if (tiravida==true)
                        {
                            conta_vida = conta_vida -1;
                            //console.log(conta_vida);
                            audioColisao.play();
                            tiravida =false;
                        }

                        document.getElementById('vidas').innerHTML="<img src='imagens/vida"+conta_vida+".png' alt='tocou' width='230' height='60'>";


                    }
                    break;

            }

        }

    }

    if (conta_vida == 0){
        fim_jogo()
    }

}

function pontos()
{
    if(micro<1500){fim_jogo()}
    else {fim()}
}




