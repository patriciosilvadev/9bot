const util = require('./util');
module.exports =[
    
    {
        "id": "probsist_oper_problema_invalido",
        "priority":-2,
        "scoreRule": {
            "intent": "problema_sistema",
            "entities":{
                "sistema":"oper",
                "problema_sistema":"*"
            }
        },
        "action": {
            "reply": [
                "Não consigo te ajudar com este problema neste sistema."
            ],
            "defineContext":util.clearContext
        }
    },

    {
        "id": "probsist_oper_reset_senha",
        "scoreRule": {
            "intent": "problema_sistema",
            "entities":{
                "sistema":"oper",
                "problema_sistema":"reset_senha"
            }
        },
        "action": {
            "defineContext":{"entities":{"problema_sistema":"acesso"}},
            "evaluateNow":true
        },

    },

    {
        "id": "probsist_oper_acesso",
        "scoreRule": {
            "intent": "problema_sistema",
            "entities":{
                "sistema":"oper",
                "problema_sistema":"acesso"
            },
            "probsist_oper_acesso":null
        },
        "action": {
            "reply": [
                "Gostaria de solicitar um reset de senha para o Oper?"
            ],
            "listenTo":["entities"],
            "defineContext":{"probsist_oper_acesso":1,"entities":{"tipo_resposta":null}}
        }
    },
    {
        "id": "probsist_oper_acesso_sim",
        "scoreRule": {
            "intent": "problema_sistema",
            "entities":{
                "sistema":"oper",
                "problema_sistema":"acesso",
                "tipo_resposta":"sim"
            },
            "probsist_oper_acesso":1
        },
        "action": {
            "reply": [
                "Sua senha foi redefinida para #lasa2017."
            ],
            "defineContext":util.clearContext
        }
    },

    {
        "id": "probsist_oper_acesso_nao",
        "scoreRule": {
            "intent": "problema_sistema",
            "entities":{
                "sistema":"oper",
                "problema_sistema":"acesso",
                "tipo_resposta":"nao"
            },
            "probsist_oper_acesso":1
        },
        "action": {
            "reply": [
                "Ok. Se precisa de mim para alguma outra coisa, estou aqui."
            ],
            "defineContext":util.clearContext
        }
    },

    {
        "id": "probsist_oper_acesso_desconhecido",
        "scoreRule": {
            "intent": "problema_sistema",
            "entities":{
                "sistema":"oper",
                "problema_sistema":"acesso",
                "tipo_resposta":null
            },
            "probsist_oper_acesso":1
        },
        "action": {
            "reply": [
                "Não entendi. Vou cancelar o procedimento, e se precisar pode tentar novamente a qualquer momento."
            ],
            "defineContext":util.clearContext
        }
    }

];