import moment from 'moment';
class integradaFormat {

    formataCep(cep) {
        return cep.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1.$2-$3");
    }

    formataCpf(cpf) {
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    }

    formatCurrency(value) {
        if (value == null) {
            value = 0;
        }
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    formatDecimal(value, minimumFractionDigits = 2, maximumFractionDigits = 2) {
        if (value == null) {
            value = 0;
        }
        return value.toLocaleString('pt-BR', {
            style: 'decimal', currency: 'BRL',
            minimumFractionDigits: minimumFractionDigits, maximumFractionDigits: maximumFractionDigits
        });
    }

    formatDate(data) {
        var options = { year: 'numeric', month: 'numeric', day: 'numeric' }; options.timeZone = 'UTC';
        return data ? new Date(data).toLocaleDateString("pt-BR", options) : '';
    }

    formatDateCustom(data, format) {
        return data ? moment(data).format(format) : '';
    }

    subtrairDias(data, dias) {
        return data ? moment(data).subtract(dias, 'days').toDate() : '';
    }

    subtrairMeses(data, meses) {
        return data ? moment(data).subtract(meses, 'month').toDate() : '';
    }

    duracaoEntreDatas(dataInicial, dataFinal) {
        const inicio = moment(dataInicial);
        const fim = moment(dataFinal);
        const duracao = moment.duration(inicio.diff(fim));
        const minutos = parseInt(duracao.asMinutes());

        if (minutos < 1) {
            const segundos = parseInt(duracao.asSeconds());
            return `há ${segundos} segundo${segundos > 1 ? 's' : ''}`;
        }
        if (minutos >= 1 && minutos < 60) {
            return `há ${minutos} minuto${minutos > 1 ? 's' : ''}`;
        }
        else if (minutos >= 60 && minutos < 1440) {
            const horas = parseInt(duracao.asHours());
            return `há ${horas} hora${horas > 1 ? 's' : ''}`;
        }
        else if (minutos >= 1440 && minutos < 10080) {
            const dias = parseInt(duracao.asDays());
            return `há ${dias} dia${dias > 1 ? 's' : ''}`;
        }
        else if (minutos >= 10080 && minutos < 43800) {
            const semanas = parseInt(duracao.asWeeks());
            return `há ${semanas} semana${semanas > 1 ? 's' : ''}`;
        }
        else if (minutos >= 43800 && minutos < 525600) {
            const meses = parseInt(duracao.asMonths());
            return `há ${meses} ${meses > 1 ? 'meses' : 'mês'}`;
        }
        else {
            const anos = parseInt(duracao.asYears());
            return `há ${anos} ano${anos > 1 ? 's' : ''}`;
        }
    }
}

export default new integradaFormat();