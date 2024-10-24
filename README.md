# Projeto Portal com Monorepo Nx, Angular, Tailwind e DaisyUI

Este é um projeto de portal desenvolvido com o framework Angular, utilizando o monorepo Nx para gerenciar o projeto e as dependências. O projeto utiliza o Tailwind CSS para estilização e o DaisyUI para facilitar a criação de componentes.

✨ Seu novo e brilhante [Nx workspace](https://nx.dev) está quase pronto ✨.

[Aprenda mais sobre essa configuração do espaço de trabalho e suas capacidades](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) ou execute `npx nx graph` para explorar visualmente o que foi criado. Agora, vamos começar!

## Conclua a configuração do CI
[Clique aqui para concluir a configuração do seu espaço de trabalho!](https://cloud.nx.app/connect/8qSvoDN7Us)

## Tecnologias Utilizadas
<a alt="Angular logo" href="https://angular.dev/" target="_blank" rel="noreferrer"><img src="https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png" width="35"></a> <a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="55" style="margin-left: 15px"></a> 

- **Angular**: framework de desenvolvimento de aplicativos web.
- **Tailwind CSS**: biblioteca de estilização CSS.
- **DaisyUI**: biblioteca de componentes do Tailwind CSS.
-  **Monorepo Nx**: ferramenta de gerenciamento de projetos.

## Execute tarefas
Para executar o servidor de desenvolvimento para o seu aplicativo, use:

```sh
npx nx serve angular-monorepo-nx
```

Para criar um pacote de produção:

```sh
npx nx build angular-monorepo-nx
```

Para ver todas as tarefas disponíveis para executar em um projeto, execute:

```sh
npx nx show project angular-monorepo-nx
```

Essas tarefas são [inferidas automaticamente](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) ou definidas nos arquivos `project.json` ou `package.json`.

[Mais sobre a execução de tarefas na documentação &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Adicione novos projetos

Embora você possa adicionar novos projetos ao seu espaço de trabalho manualmente, você pode aproveitar os [plugins do Nx](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) e sua [funcionalidade de geração de código](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects).

Use o gerador do plugin para criar novos projetos.

Para gerar um novo aplicativo, use:

```sh
npx nx g @nx/angular:app demo
```

Para gerar uma nova biblioteca, use:

```sh
npx nx g @nx/angular:lib mylib
```

Você pode usar `npx nx list` para obter uma lista de plugins instalados. Em seguida, execute `npx nx list <nome-do-plugin>` para aprender mais sobre as capacidades específicas de um plugin em particular. Como alternativa, [instale o Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) para navegar pelos plugins e geradores no seu IDE.

[Aprenda mais sobre os plugins do Nx &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Navegue pelo registro de plugins &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Aprenda mais sobre o Nx no CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


## Instale o Nx Console

O Nx Console é uma extensão do editor que enriquece a experiência do desenvolvedor. Ele permite executar tarefas, gerar código e melhora a autocompletar de código no seu IDE. Ele está disponível para o VSCode e o IntelliJ.

[Instale o Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Links úteis

Aprenda mais:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
