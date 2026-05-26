

/* Script Ativar e desativar filtros na versão mobile */


function filtrar(tipo, botao) {
            document.querySelectorAll('.filtro').forEach(function(btn) {
                btn.classList.remove('ativo');
            });
            botao.classList.add('ativo');
            
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


 
