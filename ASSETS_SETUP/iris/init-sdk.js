const chatBot = {
    /**
     * Initializes the SDK and sets a global field with passed name for it the can
     * be referred later
     *
     * @param {string} name Name by which the chat widget should be referred
     */
    initSdk(name, isClientAuthEnabled, nome, sobrenome, matricula) {
        // Retry initialization later if the web page hasn't finished loading or the WebSDK is not available yet
        if (!document || !document.body || !WebSDK) {
            setTimeout(function () {
                initSdk(name);
            }, 2000);
            return;
        }

        if (!name) {
            name = 'Bots';          // Set default reference name to 'Bots'
        }

        let Bots;

        const chatWidgetSettings = {
            URI: 'oda-0ac5d100d4104a40acd324fb23ca091e-da10.data.digitalassistant.oci.oraclecloud.com',
            channelId: "50ba405f-73de-4f97-9373-7833ff15895f",
            showConnectionStatus: true,
            position: { bottom: '40px ', right: '20px' },
            enableTimestamp: true,
            timestampMode: "absolute",
            enableClearMessage: true,
            disablePastActions: "none",
            showTypingIndicator: true,
            timestampFormat: 'DD/MM/YYYY  hh:mm:ss a',
            initUserHiddenMessage: 'ola',
            initUserProfile: {
                profile: {
                    nome: nome,
                    sobrenome: sobrenome,
                    matricula: matricula
                }
            },
            width: '400px',
            logoIcon: 'layout/images/chatbot/bannerInt.jpg',
            botButtonIcon: 'layout/images/chatbot/logo-integrada-dark.png',
            personIcon: 'layout/images/chatbot/humanIntegrada_3.png',
            botIcon: 'layout/images/chatbot/BotIntegrada.png',
            enableSpeech: true,
            enableBotAudioResponse: true,
            speechLocale: WebSDK.SPEECH_LOCALE.PT_BR,
            theme: 'default',
            colors: {
                branding: 'white'
            },
            shareMenuItems: [{
                type: 'visual',
                label: 'Imagem/Video',
                icon: 'layout/images/chatbot/IconCamera.jpg'
            },
            {
                type: 'audio',
                label: 'Audio',
                icon: 'layout/images/chatbot/Icon_Audio.jpg'

            }, {
                type: 'file',
                label: 'Arquivo',
            }],
            i18n: {
                en: {
                    chatTitle: 'Iris',       // Replaces Chat
                    connected: 'Conectado',            // Replaces Connected
                    inputPlaceholder: 'Digite aqui', // Replaces Type a message
                    send: 'Enviar (Enter)',          // Replaces Send tool tip
                    defaultWaitMessage: "Ainda estou trabalhando no seu pedido. Obrigado pela sua paciência!",
                    clear: "Limpar conversa",
                    close: "Minimizar",
                    endConversationConfirmMessage: 'Tem certeza que quer encerrar a conversa?',
                    noText: 'Não',
                    yesText: 'Sim',
                    endConversationDescription: 'Isso também limpará seu histórico de conversas.',
                    errorSpeechUnavailable: 'Para permitir mensagens de voz, atualize as configurações do seu navegador para permitir o acesso ao seu microfone.',
                    audioResponseOff: 'Ativar resposta de áudio',
                    audioResponseOn: 'Desativar resposta de áudio',
                    speak: 'Fale sua mensagem',
                    upload: 'Compartilhar',
                    download: 'Baixar',
                    errorSpeechUnavailable: 'Para permitir mensagens de voz, atualize as configurações do seu navegador para permitir o acesso ao seu microfone.',
                    errorSpeechTooMuchTimeout: 'A mensagem de voz é muito longa para reconhecer e gerar texto.',
                    errorSpeechMultipleConnection: 'Outro reconhecimento de voz está em andamento. Não é possível iniciar um novo.',
                    connectionFailureMessage: 'Desculpe, o assistente não está disponível no momento. Se o problema persistir, entre em contato com o suporte técnico.'
                }
            },
            fontSize: "13px",
            fontFamily: '"Oracle Sans","Helvetica Neue", Helvetica, Arial, sans-serif',
            targetElement: 'chat-container',
            conversationBeginPosition: 'bottom',
            enableEndConversation: false,
        };

        // Initialize SDK
        if (isClientAuthEnabled) {
            Bots = new WebSDK(chatWidgetSettings, generateToken);
        } else {
            Bots = new WebSDK(chatWidgetSettings);
        }

        // Connect to skill when the widget is expanded for the first time
        let isFirstConnection = true;

        Bots.on(WebSDK.EVENT.WIDGET_OPENED, function () {
            if (isFirstConnection) {
                Bots.connect();

                isFirstConnection = false;
            }
        });

        Bots.openChat();

        // Create global object to refer Bots
        window[name] = Bots;
    }
}

export default chatBot;
