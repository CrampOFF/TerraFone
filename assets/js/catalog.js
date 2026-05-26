

/* Script Ativar e desativar filtros na versão mobile */


function filtrar(tipo, botao) {
            document.querySelectorAll('.filtro').forEach(function(btn) {
                btn.classList.remove('ativo');
            });
            botao.classList.add('ativo');

            document.querySelectorAll('.card').forEach(function(card) {
                if (tipo === 'todos') {
                    card.style.display = 'flex';
                } else if (card.dataset.tipo === tipo || card.dataset.subtipo === tipo) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });


            /* Fecha o menu de filtros no mobile após selecionar */


            fecharFiltros();
        }

        function abrirFiltros() {
            document.getElementById('filtros').classList.add('aberto');
            document.getElementById('fundo-escuro').classList.add('visivel');
        }

        function fecharFiltros() {
            document.getElementById('filtros').classList.remove('aberto');
            document.getElementById('fundo-escuro').classList.remove('visivel');
        }


 /* Função para atualizar as cidades com base no estado selecionado */


            var cidades = {
        AC: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá', 'Feijó'],
        AL: ['Maceió', 'Arapiraca', 'Palmeira dos Índios', 'Rio Largo', 'Penedo'],
        AM: ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari'],
        AP: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque', 'Mazagão'],
        BA: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Ilhéus', 'Juazeiro', 'Barreiras'],
        CE: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral', 'Crato', 'Itapipoca'],
        DF: ['Brasília', 'Ceilândia', 'Taguatinga', 'Samambaia', 'Planaltina'],
        ES: ['Vitória', 'Serra', 'Vila Velha', 'Cariacica', 'Cachoeiro de Itapemirim'],
        GO: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia'],
        MA: ['São Luís', 'Imperatriz', 'São José de Ribamar', 'Timon', 'Caxias', 'Codó'],
        MG: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros', 'Uberaba'],
        MS: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã'],
        MT: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Tangará da Serra'],
        PA: ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Castanhal', 'Altamira'],
        PB: ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux'],
        PE: ['Recife', 'Caruaru', 'Olinda', 'Petrolina', 'Paulista', 'Jaboatão dos Guararapes'],
        PI: ['Teresina', 'Parnaíba', 'Picos', 'Piripiri', 'Floriano'],
        PR: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'Foz do Iguaçu'],
        RJ: ['Rio de Janeiro', 'São Gonçalo', 'Niterói', 'Duque de Caxias', 'Petrópolis', 'Volta Redonda'],
        RN: ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Caicó'],
        RO: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal'],
        RR: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Alto Alegre', 'Mucajaí'],
        RS: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria', 'Novo Hamburgo'],
        SC: ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Chapecó', 'Itajaí'],
        SE: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'São Cristóvão'],
        SP: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Ribeirão Preto', 'Sorocaba', 'Santos', 'Osasco'],
        TO: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins']
    };

   
 
    function atualizarCidades() {
        var estado = document.getElementById('estado').value;
        var selectCidade = document.getElementById('cidade');
 
        // Limpa as opções atuais
        selectCidade.innerHTML = '';
 
        if (estado === '') {
            selectCidade.innerHTML = '<option value="">Selecione o estado primeiro</option>';
            selectCidade.disabled = true;
            return;
        }
 
        // Adiciona a opção padrão
        selectCidade.innerHTML = '<option value="">Selecione a cidade...</option>';
 
        // Adiciona as cidades do estado selecionado
        var listaCidades = cidades[estado];
        for (var i = 0; i < listaCidades.length; i++) {
            var option = document.createElement('option');
            option.value = listaCidades[i];
            option.textContent = listaCidades[i];
            selectCidade.appendChild(option);
        }
 
        selectCidade.disabled = false;
    }
