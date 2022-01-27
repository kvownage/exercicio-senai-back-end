class Evento{
    //atributos
    constructor(){
        this.id = 0;
        this.arrayEventos = [];                
    }
    
    //Métodos
    apagaCamposEvento(){
        document.getElementById('nomeEvento').value = '';
        document.getElementById('nomePalestrante').value = '';
        document.getElementById('dataEvento').value = '';
    }
    salvar(){
        let evento = this.lerDados();
        if(this.validaCampos(evento)){
            this.adicionarDados(evento);
        }
        
        this.limpaCampos();
        console.log(this.arrayEventos);        
    }       
    
    lerDados(){
        //instanciei um objeto evento
        let evento = {}
            evento.id = this.id;
            evento.nome = document.getElementById('nomeEvento').value;
            evento.palestrante = document.getElementById('nomePalestrante').value;   
            evento.data = document.getElementById('dataEvento').value;
            evento.numeroInscritos = 0;
        return evento;
    }

    adicionarDados(evento){
        this.arrayEventos.push(evento);
        this.id ++;
        
        alert('Evento adicionado com sucesso');
        fechaModal();
    }   

    validaCampos(evento){
        let msg='';
        
        if(evento.nome == ''){
            msg += '-Por favor, digitar o nome do evento \n';
        }

        if(evento.palestrante == ''){
            msg += '-Por favor, digite o nome do palestrante';
        }
        
        if(evento.data == ''){
            msg += '-Por favor, escolha uma data válida';
        }

        
        let dataevento = new Date(evento.data);
        let datahoje = new Date();

        if(dataevento < datahoje){
            
            msg += '- Por favor, escolha uma data válida';
        }

        if(msg!=''){
            alert(msg);
            return false;
        }         

        return true;
    }

    limpaCampos(){
        document.getElementById('nomeEvento').value= '';
        document.getElementById('nomePalestrante').value = '';
        document.getElementById('dataEvento').value = '';
    }

    cancelar(){
        this.apagaCamposEvento();
        fechaModal();
    }

    listaTabela(){
        var tbod = document.querySelector('tbody');
        evento.resetaTabela();

        var novoElemento = document.createElement('tbody');
        document.querySelector('table').appendChild(novoElemento);
        let tbody = document.querySelector('tbody');
        let listaTabela = document.querySelector('.tabelaeventos');
        listaTabela.style.display = 'block';
        // tbody.removeChild();
       

        
        for(let i=0; i<this.arrayEventos.length;i++){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nomeEvento = tr.insertCell();
            let td_palestrante = tr.insertCell();
            let td_dataEvento = tr.insertCell();
            let td_numeroInscritos = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayEventos[i].id;
            td_nomeEvento.innerText = this.arrayEventos[i].nome;
            td_palestrante.innerText = this.arrayEventos[i].palestrante;
            td_dataEvento.innerText = this.arrayEventos[i].data;
            td_numeroInscritos.innerText = this.arrayEventos[i].numeroInscritos;

            let imgSelect = document.createElement('img');
             td_acoes.appendChild(imgSelect);
            imgSelect.src = 'img/select.png';
            imgSelect.addEventListener('click', function(e){
                var id = (e.target.parentNode).parentNode.firstElementChild.textContent;                
                // var nInscritosAtt = evento.acrescentaParticipante(id);    
                evento.acrescentaParticipante(id);            
            });       
            
      
        }
    
    }

    acrescentaParticipante(id){
        for(var i=0; i<this.arrayEventos.length;i++){
            if(this.arrayEventos[i].id == id){
                if(this.arrayEventos[i].numeroInscritos<100){
                    this.arrayEventos[i].numeroInscritos++;               
                    evento.resetaTabela();  
                    evento.listaTabela(); 
                }else{
                    alert('Evento lotado');
                }
                            
                // nInscritos++;              
                // debugger;
            }           
        }
    }

    resetaTabela(){
        var tbod = document.querySelector('tbody');
        // debugger;
        if(tbod != null){
            for(var i = 0; i< evento.arrayEventos.length;i++){
                // debugger;
                tbod.remove(i);
            }
        }       
    }
}


var evento = new Evento();
//Criei uma classe Usuario
class Usuario{
    constructor(){
        this.nome;
        this.idade;
    }

    cadastraUsuario(id){     
      
            
        console.log(id);
        //evento.arrayEventos.
        console.log(evento.arrayEventos[id-1].nome);
        //evento.arrayEventos[id].numeroInscritos = evento.arrayEventos[id].numeroInscritos + 1;
    }
    hideBotoes(){
        let listaTabela = document.querySelector('.btn_iniciais');
        listaTabela.style.display = 'none';
    }
    perguntaIdade(){
        //alert("pergunta idade");
        let formularioIdade = document.querySelector('.formularioIdade');
        formularioIdade.style.display = 'block'
        this.hideBotoes();
    }

    voltaTelaInicial(){
        let btn_iniciais = document.querySelector('.btn_iniciais');
        btn_iniciais.style.display = 'block';
        let formularioIdade = document.querySelector('.formularioIdade');
        formularioIdade.style.display = 'none';
        let listaTabela = document.querySelector('.tabelaeventos');
        listaTabela.style.display = 'none';
        usuario.apagaCampos();

    }

    apagaCampos(){
        let nomeUsuario = document.getElementById('nomeUsuario').value = '';
        let idadeUsuario = document.getElementById('idadeUsuario').value = '';        
    }

    verificaIdade(){        
        if(document.getElementById('idadeUsuario').value>=18){
            let formularioIdade = document.querySelector('.formularioIdade');
            formularioIdade.style.display = 'none';                             
            evento.listaTabela();
        }
    }
  
}

var usuario = new Usuario();

function cadastrar(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
    usuario.hideBotoes();
    
}

function fechaModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
    usuario.voltaTelaInicial();

}

function mostraEventos(){

}
