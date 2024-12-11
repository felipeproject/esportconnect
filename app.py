import webview

# Caminho para o seu arquivo index.html
html_path = "index.html"

# Criando a janela do webview em tela cheia
webview.create_window("Minha Janela", html_path)

# Iniciando o webview
webview.start()
