/* 
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior
    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
    - passo 2 - dar um jeito de identificar o clique no elemento da aba
 	- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
	- passo 4 - marcar a aba clicada como selecionado
	- passo 5 - esconder o conteúdo anterior
	- passo 6 - mostrar o conteúdo da aba selecionada
*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
//CLASSES DE TAGS TEM "." ANTES DO SEU NOME
const abas = document.querySelectorAll(".aba");
//CONST = SIGNIFICA QUE ESSSE VARIAVEL NÃO VAI PODER SER ALTERADO O SEU VALOR, PQ ELA É CONSTANTE
//ABAS FOI CRIADA, É O NOME DA VARIÁVEL
// QUERYSELECTALL = VARIOS ELEMENTOS, SELECIONA VARIOS ELEMENTOS

// passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {  //ADICIONOU UM EVENTO AO CLICAR
        //FOREACH = PECORRE UMA LISTAE EXECUTA UMA AÇÃO PARA CADA ITEM DESSA LISTA
        //ADDEDVENTLISTENER = CRIA UM EVENTO QUANDO O USUARIO INTERAGIR
        //ABA É O NOME DA VARIÁVEL QUE RECEBE OS DADOS
    
        if(aba.classList.contains("selecionado")){  //VERIFICANDO SE A TAG TEM A CLASSE SELECIONADO
            
            return;
            //SE TIVER A CLASSE SELECIONADO ELE EXECUTA O RETURN E NÃO EXECUTA O RESTO DA FUNÇÃO
            //SE NÃO TIVER ELE CONTINUA A EXECUTAR O RESTO DA FUNÇÃO
            //ESSA CONDIÇÃO PREVINE DO USER FICAR EXECUTANDO LINHAS DE CODIGO DESNECESSÁRIOS
        }

        selecionarAba(aba)   //CHAMANDO A FUNÇÃO DE SELECIONA ABA
        mostrarInformacoesDaAba(aba)   //CHAMANDO A FUNÇÃO QUE OCULTA E MOSTA O CONTEÚDO DAS ABAS 
    });
});

function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");  //SELECIONANDO APENAS QUEM TEM ESSAS 2 CLASSES
    //QUERYSELECT = UM ELEMENTO, SELECIONA APENAS UM ELEMENTO
    //ABASELECIONADA É O NOME DA VARIÁVEL

    abaSelecionada.classList.remove("selecionado"); //REMOVENDO A CLASSE SELECIONADO

    // passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");  //SELECIONANDO APENAS QUE TEM A CLASSE ABA E ADICIONANDO A CLASSE SELECIONADO
}

function mostrarInformacoesDaAba(aba){
    // passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado"); //BUSCANDO APENAS AS TAGS QUE TENHA ESSAS 2 CLASSES
    informacaoSelecionada.classList.remove("selecionado");
    //INFORMAÇÃOSELECIONADA É O NOME DA VARIÁVEL

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`   //BUSCANDO O ID DO ELEMENTO ABA NO QUAL FOI CLICADO
    //IDDOELEMENTODEINFORMAÇÃODEABA É O NOME DA VARIÁVEL
    
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)   //SELECIONANDO A ABA A SER MOSTRADA
    informacaoASerMostrada.classList.add("selecionado")  //ADICIONANDO A CLASSE SELECIONADO PARA MOSTRAR A ABA
    //INFORMAÇAÕASERMOSTRADA É O NOME DA VARIÁVEL
}