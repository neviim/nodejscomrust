# Lib em Rust, chamada pelo nodejs

##  comandos basicos
```zsh
# rust lib
rustc --version
cargo --version

# alguns comandos
cargo check
cargo clean
time cargo build
time cargo check
```

# inicializa rust spacedev
```zsh
cargo run --lib nodejscomrust

# check se wasm32 esta instalado
cargo build --target wasm32-unknown-unknown

# Instala wass32- caso não tenha sido instalado.
rustup target add wasm32-unknown-unknown
rustup target add wasm32-wasi

# Build o bytecode WASM, criara a parta (./pkg)
ssvmup build
```

# node app
```zsh
asdf local nodejs 14.7.0
npm init --yes

npm set init.author.email "neviimdev@gmail.com" 
npm set init.author.name "Neviim Jads"
npm set init.license "MIT"
```

# Testar
```zsh
node app.js

sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT

curl http://127.0.0.1:8080/?name=Pong!
curl http://192.168.0.46:8080/?name=Pong!
Ping Pong!
```

## SSVM Performance - referencias
`A Second State Virtual Machine (SSVM) é um tempo de execução de WebAssembly 
de código aberto otimizado para aplicativos do lado do servidor O SSVM fornece 
não apenas um tempo de execução WebAssembly em Node.js, mas também um conjunto
de ferramentas do compilador ssvmup para Rust e JavaScript.`
```zsh
https://www.hellorust.com/news/native-wasm-target.html
https://rustwasm.github.io/book/reference/add-wasm-support-to-crate.html

```

