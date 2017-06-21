const util = require('./util');
module.exports = [
    {
        "id": "saudacao_inicial",
        "scoreRule": {
            "intent": "saudacao",
            "saudacao_inicial_feita": null,
        },
        "action": {
            "reply": [                          
                " {{saudacao_inicial}}",
                util.replyChoices("Título|Subtitulo|Text","Sim|Não|Quem Sabe"),
                util.replyMedia("https://www.blogdainformatica.com.br/wp-content/uploads/2015/12/giphy.gif"),
                util.replyStaticMedia("lais.png")
            ],
            "defineContext": { "saudacao_inicial_feita": 1 }
        }
    },
    {
        "id": "saudacao_geral",
        "scoreRule": {
            "intent": "saudacao",
            "saudacao_inicial_feita": 1
        },        
        "action": {
            "reply": [
                "{{saudacao_geral}}"
            ]
        }
    },
    {
        "id": "geral_agradecimento",
        "scoreRule": {
            "intent": "agradecimento"
        },
        "action": {
            "reply": [
                "{{agradecimento}}"
            ],
            "defineContext": util.clearContext
        }
    }
];