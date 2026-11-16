// Cada checklist da plataforma é um objeto desta lista.
// Para criar uma nova, adicione outro objeto com um `slug` único.
//
// Importante: o `id` de cada item é usado para salvar o que já foi marcado.
// Pode mudar o texto (`label`) ou a ordem à vontade, mas não reaproveite um `id`.

module.exports = [
  {
    slug: 'formatacao',
    title: 'Formatação',
    subtitle: 'Checklist geral – conferência de computadores',
    description: 'Confira cada item antes de entregar a máquina ao dono.',
    items: [
      { id: 'backup-antes', label: 'Backup realizado antes da formatação' },
      { id: 'bios', label: 'Configuração da BIOS' },
      { id: 'disco', label: 'HD/SSD funcionando e com saúde verificada' },
      { id: 'so', label: 'Instalação S.O.' },
      { id: 'windows-update', label: 'Windows Update' },
      { id: 'backup-feito', label: 'Backup feito' },
      { id: 'pacote-padrao', label: 'Instalação Pacote padrão' },
      { id: 'drivers', label: 'Drivers instalados e funcionando' },
      { id: 'audio', label: 'Áudio e microfone funcionando' },
      { id: 'teclado-mouse', label: 'Teclado e mouse/touchpad funcionando' },
      { id: 'usb', label: 'Portas USB funcionando' },
      { id: 'rede', label: 'Wi-Fi e conexão de rede funcionando' },
      { id: 'bluetooth', label: 'Bluetooth funcionando', note: 'se disponível' },
      { id: 'webcam', label: 'Webcam funcionando', note: 'se disponível' },
      { id: 'bateria', label: 'Bateria e carregamento funcionando', note: 'notebooks' },
      { id: 'ativacao', label: 'Ativação Windows + Office' },
      { id: 'ctt-tools', label: 'CTT Tools' },
      { id: 'energia', label: 'Liga, reinicia, desliga e suspende' },
      { id: 'memtest', label: 'MemTest – teste de memória RAM' },
    ],
  },
  {
    slug: 'manutencao-hardware-notebook',
    title: 'Manutenção em Hardware Notebook',
    subtitle: 'Checklist de manutenção em hardware',
    description: 'Siga cada etapa, do diagnóstico até a entrega ao cliente.',
    // `detail` é o texto explicativo que aparece abaixo do título do item.
    items: [
      {
        id: 'fonte-carregador',
        label: 'Testar tensões da fonte / Carregador e Jack DC',
        detail:
          'No desktop, medir as tensões da fonte com multímetro ou testador e fechar o curto no fio verde (PS-ON) para validar o acionamento. No notebook, confirmar se o carregador entrega a voltagem nominal na ponta e verificar se não há folga ou solda fria no conector DC Jack.',
      },
      {
        id: 'isolar-bateria',
        label: 'Isolar bateria interna (Notebooks)',
        detail:
          'Desconectar a bateria principal da placa-mãe e tentar ligar o equipamento direto na fonte externa, descartando curto interno na bateria que possa estar travando o circuito de stand-by.',
      },
      {
        id: 'botao-power',
        label: 'Testar continuidade do Botão Power (Painel / Flat)',
        detail:
          'No desktop, fechar curto momentâneo direto nos pinos PWR_BTN da placa-mãe para descartar defeito no botão do gabinete. No notebook, testar continuidade no cabo flat ou na microchave do botão de ligar.',
      },
      {
        id: 'memoria-ram',
        label: 'Teste e limpeza dos contatos de Memória RAM',
        detail:
          'Caso a máquina ligue mas não dê vídeo, remover os módulos de RAM, limpar os contatos dourados com borracha branca ou álcool isopropílico, e testar um pente por vez alternando os slots para isolar falhas de leitura ou trilha.',
      },
      {
        id: 'saude-disco',
        label: 'Verificar saúde do SSD/HD (CrystalDiskInfo)',
        detail:
          'Assim que subir imagem, rodar o CrystalDiskInfo para checar o status SMART, porcentagem de vida útil (TBW) e temperatura, além de garantir que nenhum disco em curto esteja travando o POST da placa.',
      },
      {
        id: 'limpeza-interna',
        label: 'Limpeza interna completa (Dissipadores, ventoinhas e placa-mãe)',
        detail:
          'Remover toda a poeira acumulada nas aletas do dissipador e coolers (causa comum de desligamento térmico) e lavar eventuais pontos de oxidação ou zinabre na placa com álcool isopropílico.',
      },
      {
        id: 'pasta-termica',
        label: 'Troca de pasta térmica e inspeção de thermal pads',
        detail:
          'Remover completamente os resíduos ressecados do processador, chip gráfico e base do dissipador até espelhar, aplicar pasta térmica de alta condutividade e conferir se os thermal pads das memórias e VRMs estão íntegros.',
      },
      {
        id: 'estresse-portas',
        label: 'Testes de estresse finais (CPU/GPU) e portas I/O',
        detail:
          'Submeter o equipamento a carga máxima para validar estabilidade e temperaturas seguras sob estresse, além de testar todas as portas USB, saídas de vídeo (HDMI/DisplayPort), áudio e rede antes de fechar.',
      },
      {
        id: 'limpeza-externa',
        label: 'Limpeza externa completa e acessórios organizados',
        detail:
          'Limpar carcaça, gabinete e tela sem deixar marcas de dedo, conferir o aperto de todos os parafusos e deixar fontes, cabos e peças antigas separados para o cliente retirar.',
      },
    ],
  },
  {
    slug: 'manutencao-hardware-desktop-gamer',
    title: 'Manutenção em Hardware de Desktops (Gamer)',
    subtitle: 'Checklist de manutenção em hardware',
    description: 'Confira cada componente antes de entregar a máquina ao cliente.',
    items: [
      { id: 'fonte', label: 'Fonte' },
      { id: 'memoria-ram', label: 'Memória RAM' },
      { id: 'reset-bios', label: 'Reset BIOS' },
      { id: 'placa-de-video', label: 'Placa de vídeo' },
      { id: 'saude-discos', label: 'Saúde de discos' },
      { id: 'placa-mae', label: 'Placa-mãe' },
      { id: 'processador', label: 'Processador' },
      { id: 'pasta-termica', label: 'Pasta térmica' },
      { id: 'limpeza', label: 'Limpeza gabinete, fans, dispositivos' },
      { id: 'memtest', label: 'MemTest' },
    ],
  },
];
