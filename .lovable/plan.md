

## Plano: Adicionar vídeo do YouTube na seção "Sobre o Método"

### Como funciona

Como o vídeo tem mais de 100MB, a melhor solução é hospedá-lo no YouTube (pode ser como "não listado" para não aparecer no seu canal publicamente) e incorporá-lo na página via iframe embed.

### O que você precisa fazer

1. Suba o vídeo no YouTube
2. Copie o link do vídeo (ex: `https://www.youtube.com/watch?v=XXXXXXX`)
3. Me envie o link aqui no chat

### O que vou implementar

- Adicionar um player de YouTube responsivo (16:9) dentro da seção "Sobre o Método", logo abaixo do texto explicativo
- O vídeo será incorporado via iframe do YouTube com lazy loading
- Layout responsivo que se adapta a mobile e desktop
- Bordas e estilo visual consistente com o resto da página

### Estrutura

A seção "Sobre o Método" ficará assim:

```text
┌──────────────────────────────────┐
│     SOBRE O MÉTODO               │
│     Texto explicativo...         │
│                                  │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │    Player YouTube 16:9     │  │
│  │                            │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

### Próximo passo

Me envie o link do YouTube para eu implementar.

