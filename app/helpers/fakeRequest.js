const data = {
	login: {
		data: {
			access_token: "asdaldnawidjalwdj5464"
		}
	},
	getUserData: {
		data: {
			data: {
				uuid: "1515",
				name: "Pablo Neres",
				email: "pablo@clickweb.com.br",
				avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
				avatar_sizes: {},
				document_type: "CPF",
				document: "123.123.123-12",
				gender: null,
				birth: null,
				phone: "(11) 95852-8808",
				city: {
					label: "Guarulhos-SP",
					valueLabel: "Guarulhos-SP"
				},
				balance: 0,
				is_completed: 1,
				custom_data: null,
				plan: "Plano premium"
			}
		}
	},
	search: {
		data: {
			data: [
				{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum?",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum"
				},
				{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum?",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum"
				},
				{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum?",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum lorem ipsum dolor sit amet, consectetur adipiscing elitc ac sed in interdum"
				},
			],
			meta: {
				current_page: 1
			}
		}
	},
	chat: {
		data: [
			{
				uuid: "12313",
				atendente: true,
				mensagem: "Bom dia, estou com dificuldade para gerar meu informe de rendimentos."
			},
			{
				uuid: "12313",
				atendente: false,
				mensagem: "Olá, eu sou a IRIS e vou te ajudar."
			},
		]
	}
}

export default (success = true, type, dados = null, time = 1000) => {
	const returnSuccess = () => {
		return data[type]
	}

	if (type) {
		if (type === "return") {
			return new Promise((resolve, reject) => setTimeout(() => {
				success ? resolve({ data: { data: dados } }) : reject
			}, time))
		}

		return new Promise((resolve, reject) => setTimeout(() => {
			success ? resolve(returnSuccess()) : reject
		}, time))
	}

	return new Promise((resolve, reject) => setTimeout(success ? resolve : reject, time))
}