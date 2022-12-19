export const MENU_GERAL = [
    {
        type: "Transações comerciais",
        id: "1",
        shortcuts: [
            {
                icon: "producao",
                title: "Produção",
                active: false,
                screen: "Production"
            },
            {
                icon: "contratos",
                title: "Contratos",
                active: false,
                screen: "Contracts"
            },
            {
                icon: "insumos",
                title: "Insumos",
                active: false,
                screen: "Inputs"
            },
            {
                icon: "notafiscal",
                title: "Notas fiscais",
                active: false,
                screen: "Invoices"
            },
            {
                icon: "precos",
                title: "Preços",
                active: false,
                screen: "Prices"
            },
        ]
    },
    {
        type: "Finanças",
        id: "2",
        shortcuts: [
            {
                icon: "contaspagar",
                title: "Contas a pagar",
                active: false,
                screen: "BillsToPay"
            },
            {
                icon: "contasreceber",
                title: "Contas a receber",
                active: false,
                screen: "BillsToReceive"
            },
            {
                icon: "sobras",
                title: "Sobras",
                active: false,
                screen: "Leftovers"
            },
            {
                icon: "rendimentos",
                title: "Informe de rendimentos",
                active: false,
                screen: "Incomes"
            },
            {
                icon: "capitalsocial",
                title: "Capital social",
                active: false,
                screen: "ShareCapital"
            },
        ]
    },
    {
        type: "Dossiê",
        id: "3",
        shortcuts: [
            {
                icon: "dossie",
                title: "Dossiê agrícola",
                active: false,
                screen: "Dossie"
            },
            {
                icon: "atendimentos",
                title: "Atendimentos",
                active: false,
                screen: "Dossie",
                params: { tabScreen: 2 }
            },
        ]
    },
    {
        type: "Cooperado",
        id: "4",
        shortcuts: [
            {
                icon: "profile",
                title: "Dados pessoais",
                active: false,
                screen: "Cooperado"
            },
            {
                icon: "planosaude",
                title: "Plano de saúde",
                active: false,
                screen: "Cooperado",
                params: { tabScreen: 2 }
            },
            {
                icon: "imoveis",
                title: "Imóveis cadastrados",
                active: false,
                screen: "Cooperado",
                params: { tabScreen: 3 }
            },
        ]
    },
    {
        type: "Relação com o cooperado",
        id: "5",
        shortcuts: [
            {
                icon: "news",
                title: "Notícias",
                active: false,
                screen: "CooperadoRelation"
            },
            {
                icon: "unidades",
                title: "Nossas unidades",
                active: false,
                screen: "CooperadoRelation",
                params: { tabScreen: 2 }
            },
            {
                icon: "estatuto",
                title: "Estatuto social",
                active: false,
                screen: "CooperadoRelation",
                params: { tabScreen: 3 }
            },
        ]
    },
    {
        type: "Outros",
        id: "6",
        shortcuts: [
            {
                icon: "classificado",
                title: "Classificados",
                active: false,
                screen: "Classified"
            }
        ]
    },
]


export const MENU_SHORTCUTS = [
    {
        icon: "producao",
        title: "Produção",
        active: false,
        screen: "Production"
    },
    {
        icon: "contratos",
        title: "Contratos",
        active: false,
        screen: "Contracts"
    },
    {
        icon: "insumos",
        title: "Insumos",
        active: false,
        screen: "Inputs"
    },
    {
        icon: "notafiscal",
        title: "Notas\nfiscais",
        active: false,
        screen: "Invoices"
    },
    {
        icon: "precos",
        title: "Preços",
        active: false,
        screen: "Prices"
    },
    {
        icon: "contaspagar",
        title: "Contas a\npagar",
        active: false,
        screen: "BillsToPay"
    },
    {
        icon: "contasreceber",
        title: "Contas a\nreceber",
        active: false,
        screen: "BillsToReceive"
    },
    {
        icon: "sobras",
        title: "Sobras",
        active: false,
        screen: "Leftovers"
    },
    {
        icon: "rendimentos",
        title: "Informe de\nrendimentos",
        active: false,
        screen: "Incomes"
    },
    {
        icon: "capitalsocial",
        title: "Capital\nsocial",
        active: false,
        screen: "ShareCapital"
    },
    {
        icon: "dossie",
        title: "Dossiê\nagrícola",
        active: false,
        screen: "Dossie",
    },
    {
        icon: "atendimentos",
        title: "Atendimentos",
        active: false,
        screen: "Dossie",
        params: { tabScreen: 2 }
    },
    {
        icon: "profile",
        title: "Dados\npessoais",
        active: false,
        screen: "Cooperado"
    },
    {
        icon: "planosaude",
        title: "Plano de\nsaúde",
        active: false,
        screen: "Cooperado",
        params: { tabScreen: 2 }
    },
    {
        icon: "imoveis",
        title: "Imóveis\ncadastrados",
        active: false,
        screen: "Cooperado",
        params: { tabScreen: 3 }
    },
    {
        icon: "news",
        title: "Notícias",
        active: false,
        screen: "CooperadoRelation"
    },
    {
        icon: "unidades",
        title: "Nossas\nunidades",
        active: false,
        screen: "CooperadoRelation",
        params: { tabScreen: 2 }
    },
    {
        icon: "estatuto",
        title: "Estatuto\nsocial",
        active: false,
        screen: "CooperadoRelation",
        params: { tabScreen: 3 }
    },
    {
        icon: "classificado",
        title: "Classificados",
        active: false,
        screen: "Classified"
    }
]