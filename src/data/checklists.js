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
    items: [
      { id: 'fonte-carregador', label: 'Testar tensões da fonte / Carregador e Jack DC' },
      { id: 'isolar-bateria', label: 'Isolar bateria interna (Notebooks)' },
      { id: 'botao-power', label: 'Testar continuidade do Botão Power (Painel / Flat)' },
      { id: 'memoria-ram', label: 'Teste e limpeza dos contatos de Memória RAM' },
      { id: 'saude-disco', label: 'Verificar saúde do SSD/HD (CrystalDiskInfo)' },
      { id: 'limpeza-interna', label: 'Limpeza interna completa (Dissipadores, ventoinhas e placa-mãe)' },
      { id: 'pasta-termica', label: 'Troca de pasta térmica e inspeção de thermal pads' },
      { id: 'estresse-portas', label: 'Testes de estresse finais (CPU/GPU) e portas I/O' },
      { id: 'limpeza-externa', label: 'Limpeza externa completa e acessórios organizados' },
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
