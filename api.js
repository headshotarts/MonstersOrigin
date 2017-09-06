var mongoose = require('mongoose');
var jwt        = require("jsonwebtoken");
var express = require('express');
var app = express();

// Models
var Perfil     = require('models/Perfil');

// Conecta-se o Banco de Dados
mongoose.connect('mongodb://localhost:27017/monstersdb');//Banco de Dados

app.use(express.bodyParser());

// Evitar uso em navegadores ou qualquer tipo de get
app.get('*', function(req, res) {
  res.send('Pagina não encontrada!');
});

// Autenticacao de usuario

//******* Utilize sempre o campo validation para verificar se não houve erro ********

app.post('/login', function(req, res) {
Perfil.findOne({id: req.body.id}, function(err, perfil) {
        if (err) {
            res.json({
                validation: false //Se ocorrer um erro o JSON retorna false no campo validation, verificar esse valor no UNITY
            });
        } else {
            if (perfil) {
                res.json({
                        validation: true,    // validation retorna TRUE se encontrou dados
                        username: perfil.username, 
                        id: perfil.id,
                        hc: perfil.hc,
                        shc: perfil.shc,   //Colocar todos os campos que vc deseja receber no UNITY, devera ser alterado tmb o arquivo node_modules/models/Perfil.js
                        pontuacao: perfil.pontuacao,
                        touronegro: perfil.touronegro,
                        koltsucuri: perfil.koltsucuri,
                        botao1ok: perfil.botao1ok,
                        botao2ok: perfil.botao2ok,
                        botao3ok: perfil.botao3ok,
                        contadorarmas: perfil.contadorarmas,
                        botao1arma1: perfil.botao1arma1,
                    	botao1arma2: perfil.botao1arma2,
                    	botao2arma1: perfil.botao2arma1,
                        botao2arma2: perfil.botao2arma2,
                        botao3arma1: perfil.botao3arma1,
                    	botao3arma2: perfil.botao3arma2,
                    	municaocloq17: perfil.municaocloq17,
                    	municaotouronegro: perfil.municaotouronegro,
                    	municaokoltsucuri: perfil.municaokoltsucuri,
                    	qtdeespecial: perfil.qtdeespecial,
                    	qtdeenergetico: perfil.qtdeenergetico,
                    	qtdeqisuco: perfil.qtdeqisuco,
                    	sophiadesbloqueada: perfil.sophiadesbloqueada,
                    	sophiaselecionada: perfil.sophiaselecionada,
                    	royselecionado: perfil.royselecionado,         
                        pontuacaopraia: perfil.pontuacaopraia,         
                        pontuacaoselva: perfil.pontuacaoselva,          
                        pontuacaoprefeitura: perfil.pontuacaoprefeitura,    
                        pontuacaotemplo: perfil.pontuacaotemplo,        
                        somaarmas: perfil.somaarmas,               
                        somashc: perfil.somashc,                 
                        somahc: perfil.somahc,                 
                        sophia: perfil.sophia,                  
                        somaitem: perfil.somaitem,                
                        inimigosmortos: perfil.inimigosmortos,
                        okenergetico: perfil.okenergetico,
                        okespecial: perfil.okespecial,
                        okqisuco: perfil.okqisuco,
                        passouselva: perfil.passouselva
                        
                    	
                        
                });
            } else {
                var perfilrModel = new Perfil();
                perfilrModel.username = req.body.username;
                perfilrModel.id = req.body.id;
                perfilrModel.hc = req.body.hc;
                perfilrModel.shc = req.body.shc; //Colocar todos os campos que vc deseja receber no UNITY, devera ser alterado tmb o arquivo node_modules/models/Perfil.js
                perfilrModel.pontuacao = req.body.pontuacao;
                perfilrModel.touronegro = req.body.touronegro;
                perfilrModel.koltsucuri = req.body.koltsucuri;
                perfilrModel.botao1ok = req.body.botao1ok;
                perfilrModel.botao2ok = req.body.botao2ok;
                perfilrModel.botao3ok = req.body.botao3ok;
                perfilrModel.contadorarmas = req.body.contadorarmas;
                perfilrModel.botao1arma1 = req.body.botao1arma1;
                perfilrModel.botao1arma2 = req.body.botao1arma2;
                perfilrModel.botao2arma1 = req.body.botao2arma1;
                perfilrModel.botao2arma2 = req.body.botao2arma2;
                perfilrModel.botao3arma1 = req.body.botao3arma1;
                perfilrModel.botao3arma2 = req.body.botao3arma2;
                perfilrModel.municaocloq17 = req.body.municaocloq17;
                perfilrModel.municaotouronegro = req.body.municaotouronegro;
                perfilrModel.municaokoltsucuri = req.body.municaokoltsucuri;
                perfilrModel.qtdeespecial = req.body.qtdeespecial;
                perfilrModel.qtdeenergetico = req.body.qtdeenergetico;
                perfilrModel.qtdeqisuco = req.body.qtdeqisuco;
                perfilrModel.sophiadesbloqueada = req.body.sophiadesbloqueada;
                perfilrModel.sophiaselecionada = req.body.sophiaselecionada;
                perfilrModel.royselecionado = req.body.royselecionado;          
                perfilrModel.pontuacaopraia = req.body.pontuacaopraia;         
                perfilrModel.pontuacaoselva  = req.body.pontuacaoselva;         
                perfilrModel.pontuacaoprefeitura = req.body.pontuacaoprefeitura;    
                perfilrModel.pontuacaotemplo = req.body.pontuacaotemplo;
                perfilrModel.somaarmas = req.body.somaarmas;               
                perfilrModel.somashc = req.body.somashc;                
                perfilrModel.somahc = req.body.somahc;
                perfilrModel.sophia = req.body.sophia;                  
                perfilrModel.somaitem = req.body.somaitem;               
                perfilrModel.inimigosmortos = req.body.inimigosmortos;
                perfilrModel.okenergetico = req.body.okenergetico;
                perfilrModel.okespecial = req.body.okespecial;
                perfilrModel.okqisuco = req.body.okqisuco;
                perfilrModel.passouselva = req.body.passouselva;
              
                
                // Realiza o insert do Perfil
                perfilrModel.save(function(err, perfil) {
                        res.json({
                        validation: true,   
                        username: perfilrModel.username, 
                        id: perfilrModel.id,
                        hc: perfilrModel.hc,
                        shc: perfilrModel.shc,   //Colocar todos os campos que vc deseja receber no UNITY, devera ser alterado tmb o arquivo node_modules/models/Perfil.js
                        pontuacao: perfilrModel.pontuacao,
                        touronegro: perfilrModel.touronegro,
                        koltsucuri: perfilrModel.koltsucuri,
                        botao1ok: perfilrModel.botao1ok,
                        botao2ok: perfilrModel.botao2ok,
                        botao3ok: perfilrModel.botao3ok,
                        contadorarmas: perfilrModel.contadorarmas,
                        botao1arma1: perfilrModel.botao1arma1,
                    	botao1arma2: perfilrModel.botao1arma2,
                    	botao2arma1: perfilrModel.botao2arma1,
                        botao2arma2: perfilrModel.botao2arma2,
                        botao3arma1: perfilrModel.botao3arma1,
                    	botao3arma2: perfilrModel.botao3arma2,
                    	municaocloq17: perfilrModel.municaocloq17,
                    	municaotouronegro: perfilrModel.municaotouronegro,
                    	municaokoltsucuri: perfilrModel.municaokoltsucuri,
                    	qtdeespecial: perfilrModel.qtdeespecial,
                    	qtdeenergetico: perfilrModel.qtdeenergetico,
                    	qtdeqisuco: perfilrModel.qtdeqisuco,
                    	sophiadesbloqueada: perfilrModel.sophiadesbloqueada,    
                        sophiaselecionada: perfilrModel.sophiaselecionada,       
                        royselecionado: perfilrModel.royselecionado,          
                        pontuacaopraia: perfilrModel.pontuacaopraia,         
                        pontuacaoselva: perfilrModel.pontuacaoselva,          
                        pontuacaoprefeitura: perfilrModel.pontuacaoprefeitura,    
                        pontuacaotemplo: perfilrModel.pontuacaotemplo,        
                        somaarmas: perfilrModel.somaarmas,               
                        somashc: perfilrModel.somashc,                 
                        somahc: perfilrModel.somahc,              
                        sophia: perfilrModel.sophia,                  
                        somaitem: perfilrModel.somaitem,                
                        inimigosmortos: perfilrModel.inimigosmortos,
                        okenergetico: perfilrModel.okenergetico,
                        okespecial: perfilrModel.okespecial,
                        okqisuco: perfilrModel.okqisuco,
                        passouselva: perfilrModel.passouselva
                        
                    	
                        });
                })
            }
        }
    });
});
// Fim da Autenticacao

// Atualizar Perfil
// *** ESTE ENDPOINT REALIZA A ATUALIZACAO DOS DADOS DO USUARIO, CHAMAR SEMPRE QUE HOUVER ALTERACAO
app.post('/update_perfil', function(req, res) {
Perfil.findOne({id: req.body.id}, function(err, perfil) {
        if (err) {
            res.json({
                validation: false
            });
        } else {
            if (perfil) {
                perfil.username = req.body.username;
                perfil.id = req.body.id;
                perfil.hc = req.body.hc;
                perfil.shc = req.body.shc; //Colocar todos os campos que vc deseja receber no UNITY, devera ser alterado tmb o arquivo node_modules/models/Perfil.js
                perfil.pontuacao = req.body.pontuacao;
                perfil.touronegro = req.body.touronegro;
                perfil.koltsucuri = req.body.koltsucuri;
                perfil.botao1ok = req.body.botao1ok;
                perfil.botao2ok = req.body.botao2ok;
                perfil.botao3ok = req.body.botao3ok;
                perfil.contadorarmas = req.body.contadorarmas;
                perfil.botao1arma1 = req.body.botao1arma1;
                perfil.botao1arma2 = req.body.botao1arma2;
                perfil.botao2arma1 = req.body.botao2arma1;
                perfil.botao2arma2 = req.body.botao2arma2;
                perfil.botao3arma1 = req.body.botao3arma1;
                perfil.botao3arma2 = req.body.botao3arma2;
                perfil.municaocloq17 = req.body.municaocloq17;
                perfil.municaotouronegro = req.body.municaotouronegro;
                perfil.municaokoltsucuri = req.body.municaokoltsucuri;
                perfil.qtdeespecial = req.body.qtdeespecial;
                perfil.qtdeenergetico = req.body.qtdeenergetico;
                perfil.qtdeqisuco = req.body.qtdeqisuco;
                perfil.sophiadesbloqueada = req.body.sophiadesbloqueada;
                perfil.sophiaselecionada = req.body.sophiaselecionada;
                perfil.royselecionado = req.body.royselecionado;          
                perfil.pontuacaopraia = req.body.pontuacaopraia;         
                perfil.pontuacaoselva  = req.body.pontuacaoselva;         
                perfil.pontuacaoprefeitura = req.body.pontuacaoprefeitura;    
                perfil.pontuacaotemplo = req.body.pontuacaotemplo;
                perfil.somaarmas = req.body.somaarmas;               
                perfil.somashc = req.body.somashc;                
                perfil.somahc = req.body.somahc;
                perfil.sophia = req.body.sophia;                  
                perfil.somaitem = req.body.somaitem;               
                perfil.inimigosmortos = req.body.inimigosmortos;
                perfil.okenergetico = req.body.okenergetico;
                perfil.okespecial = req.body.okespecial;
                perfil.okqisuco = req.body.okqisuco;
                perfil.passouselva = req.body.passouselva;
                
                //Realiza a atualizacao dos dados
                perfil.save(function(err, perfil) {
                        res.json({
                            validation: true   
                        });
                });                
            } else {
                res.json({
                    validation: false
                });
            }
        }
    });
});
// Fim

// Evita que o servidor node.js pare se ocorrer algum erro
process.on('uncaughtException', function(err) {
console.log(err);
});

// Aplicação disponível 
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
