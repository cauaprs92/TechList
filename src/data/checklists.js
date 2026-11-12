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
];
