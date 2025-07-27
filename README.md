# `meiyo-react-components`

Uma biblioteca de componentes React modernos e acessíveis, construída com TypeScript e Vite. Focada em fornecer blocos de UI reutilizáveis e de alta qualidade para suas aplicações React.

-----

## Recursos

  * **Componentes Reutilizáveis:** Conjunto de componentes React prontos para uso.
  * **Desenvolvimento com TypeScript:** Totalmente tipado para segurança e melhor experiência do desenvolvedor.
  * **Performático:** Construído com [Vite](https://vitejs.dev/), garantindo builds rápidos e uma experiência de desenvolvimento ágil.
  * **Testes Robustos:** Cobertura de testes com [Vitest](https://vitest.dev/) para garantir a estabilidade e confiabilidade.
  * **Documentação Interativa:** Desenvolvido e documentado com [Storybook](https://storybook.js.org/), facilitando a visualização e o uso dos componentes.
  * **Fácil de Integrar:** Design minimalista e extensível, permitindo fácil personalização e integração em qualquer projeto React.

-----

## Instalação

Você pode instalar `meiyo-react-components` via npm ou yarn:

```bash
npm install meiyo-react-components
# ou
yarn add meiyo-react-components
# ou
pnpm add meiyo-react-components
```

-----

## Como Usar

Importe os componentes diretamente da biblioteca e utilize-os em suas aplicações React.

```tsx
import React from 'react';
import { Button, Input } from 'meiyo-react-components'; // Altere para o nome real da sua biblioteca

function MyApp() {
  return (
    <div>
      <Button onClick={() => alert('Clicado!')}>
        Clique-me
      </Button>
      <Input
        placeholder="Digite algo..."
        onChange={(e) => console.log(e.target.value)}
      />
      {/* Adicione mais exemplos de seus componentes aqui */}
    </div>
  );
}

export default MyApp;
```

-----

## Documentação (Storybook)

Explore todos os componentes, suas propriedades (props) e exemplos de uso na documentação interativa no Storybook.

Para iniciar o Storybook localmente:

```bash
npm run storybook
# ou
yarn storybook
# ou
pnpm storybook
```

Isso abrirá o Storybook em seu navegador (geralmente em `http://localhost:6006`).

-----

## Desenvolvimento Local

Se você deseja contribuir ou testar a biblioteca localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/meiyo-aru/meiyo-react-components.git # Atualize com o link do seu repositório
    cd meiyo-react-components
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Scripts Úteis:**

      * **Iniciar modo de desenvolvimento (Vite):**
        ```bash
        npm run dev
        ```
        (Isso é mais para testar o bundle do que a biblioteca em si, o Storybook é o ideal para o desenvolvimento de componentes).
      * **Rodar testes:**
        ```bash
        npm test
        ```
      * **Buildar a biblioteca para produção:**
        ```bash
        npm run build
        ```
      * **Buildar o Storybook para deploy:**
        ```bash
        npm run build-storybook
        ```

-----

## Testes

Os testes são escritos com [Vitest](https://vitest.dev/) e `@testing-library/react`. Para rodar todos os testes:

```bash
npm test
```

-----

## Contribuição

Contribuições são sempre bem-vindas\! Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias.

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/minha-feature`).
3.  Faça suas alterações e adicione testes.
4.  Certifique-se de que todos os testes passem e o linter não aponte erros.
5.  Envie suas alterações (`git commit -am 'feat: Adiciona nova feature'`).
6.  Envie sua branch para o GitHub (`git push origin feature/minha-feature`).
7.  Abra um Pull Request.

-----

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

-----

## Contato

Pedro Arthur Gregorio Abreu - [pedro.agb2004@gmail.com](mailto:pedro.agb2004@gmail.com)

Link do GitHub: [https://github.com/meiyo-aru/meiyo-react-components](https://github.com/meiyo-aru/meiyo-react-components)

-----