import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {
	//constructor(private tent: tentativasComponent ) { }
	constructor() { }

	timer;
	tempoRestante: number = 99;

  	ngOnInit() {
  		 this.timer = setInterval(() => {
  			if(this.tempoRestante > 0) {
  				this.tempoRestante-=0.3333;
  			} else {
  				this.tempoRestante = 0;
  				this.perderTempo();
  			}
  		},100);  		
  	}

	fimJogo="none";
	fimTitulo="";
	fimMensagem="";

	textoVerificar = "";
	numQuestao = 1;
	tentativas = 3;
	textErrado ="materialize-textarea textoErrado";
	respostaUsuario = true;	

	vidaJogo1="assets/images/coracao_cheio.png";
	vidaJogo2="assets/images/coracao_cheio.png";
	vidaJogo3="assets/images/coracao_cheio.png";

	questao="Good morning";	
	verificarResposta(resposta) { 
		this.respostaUsuario=false;
		if(this.numQuestao==1)
		{	
			if(resposta.toUpperCase().trim()=="BOM DIA")
			{
				this.acertarResposta();
				this.questao = "Thank you";
			}
			else
			{
				this.errarResposta();
			}
		}
		else
		{
			if(this.numQuestao==2)
			{	
				if(resposta.toUpperCase().trim()=="OBRIGADO")
				{
					this.acertarResposta();
					this.questao = "Hello my friend"
				}
				else
				{
					this.errarResposta();
				}
			}
			else
			{
				if(this.numQuestao==3)
				{	
					if(resposta.toUpperCase().trim()=="OLÁ MEU AMIGO" || resposta.toUpperCase().trim()=="OLA MEU AMIGO" || resposta.toUpperCase().trim()=="OI MEU AMIGO")
					{
						this.acertarResposta();
						this.questao = "I am from Brazil";
					}
					else
					{
						this.errarResposta();
					}
				} 
				else
				{
					if(this.numQuestao==4)
					{	
						if(resposta.toUpperCase().trim()=="EU SOU DO BRASIL")
						{
							this.testeConcluido();    						
						}
						else
						{
							this.errarResposta();
						}
					} 

				} 
			}     
		}     
	} 
	acertarResposta(){
		this.respostaUsuario = true;
		this.numQuestao++;				
		this.textoVerificar=" "; 
	}
   	errarResposta()	{	   		
   		this.respostaUsuario = false;
   		this.tentativas--;
   		if(this.tentativas==2)
   		{   			

   			this.vidaJogo3="assets/images/coracao_vazio.png";
   		}
   		else
   		{
   			if(this.tentativas==1)
   			{
   				this.vidaJogo2="assets/images/coracao_vazio.png";
   			}
   			else
   			{
   				if(this.tentativas==0)
   				{
   					this.vidaJogo1="assets/images/coracao_vazio.png";   					
   					this.perderErro()
   				}
   			}
   		}   		
   	}
   	testeConcluido()
   	{   		
   		clearInterval(this.timer);   		
   		this.respostaUsuario = true;
   		this.fimJogo="grid";
   		this.fimTitulo="CONGRATULATIONS"
   		this.fimMensagem="YOU WON, GOOD JOOB!!!";
    }
   	perderTempo()
   	{   		
   		clearInterval(this.timer);   		
   		this.fimJogo="grid";
   		this.fimTitulo="YOU LOST - NO MORE TIME"
   		this.fimMensagem="PRACTICE MORE A LITTLE /:";
   	}
   	perderErro()
   	{   		  	
   		clearInterval(this.timer);   		
   		this.fimJogo="grid";
   		this.fimTitulo="YOU LOST - NO MORE LIFES"
   		this.fimMensagem="PRACTICE MORE A LITTLE /:";
   	}
 
}
