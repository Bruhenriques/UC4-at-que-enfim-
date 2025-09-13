import path from "path";
import readlineSync from "readline-sync";
import fs from "fs";
import { execSync } from "child_process";
import { TsConfig } from "./Interfaces/TsConfig";
import { PackageJson } from "./Interfaces/packageJson";

// Função principal que irá criar o projeto
function createTsProject(): void {
  // Passo 1: Pergunta o nome do projeto
  const projectName: string = readlineSync.question("Digite o nome do projeto: ");

  // Validação simples: não pode ser vazio
  if (!projectName) {
    console.log("❌ Nome do projeto não pode ser vazio!");
    return; // encerra a função se o usuário não digitou nada
  }

  // Caminho da pasta que será criada "uma acima" da pasta atual
  const projectPath: string = path.join("..", projectName);

  // Cria a pasta do projeto, recursive:true garante criação de pastas intermediárias
  fs.mkdirSync(projectPath, { recursive: true });

  // Executa npm init dentro da pasta criada
  execSync("npm init -y", { stdio: "inherit", cwd: projectPath });

  execSync("npm install typescript", { stdio: "inherit" });

  // Cria o tsconfig.json com as configurações desejadas
  const tsConfig: TsConfig = {
    compilerOptions: {
      target: "ES6",
      module: "commonjs",
      outDir: "./dist",
      rootDir: "./src",
      strict: true,
      moduleResolution: "Node",
      esModuleInterop: true,
    },
    include: ["src"],
    exclude: ["node_modules"],
  };

  fs.writeFileSync(
    path.join(projectPath, "tsconfig.json"),
    JSON.stringify(tsConfig, null, 2)
  );

  // Lê o package.json criado pelo npm init
  const packageJsonRaw: string = fs.readFileSync(
    path.join(projectPath, "package.json"),
    "utf-8"
  );

  // Converte o texto JSON em um objeto
  const packageJson: PackageJson = JSON.parse(packageJsonRaw);

  // Adiciona scripts desejados
  packageJson.scripts = {
    test: 'echo "Error: no test specified" && exit 1',
    build: "tsc",
    start: "tsc && node dist/index.js",
  };

  fs.writeFileSync(
    path.join(projectPath, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  // Cria pasta src e um arquivo index.ts inicial
  fs.mkdirSync(path.join(projectPath, "src"));
  fs.writeFileSync(
    path.join(projectPath, "src", "index.ts"),
    `console.log("Hello TypeScript!");`
  );

  console.log(`\n✅ Projeto "${projectName}" criado com sucesso em "${projectPath}"`);
  console.log("👉 Para começar:");
  console.log(`cd ../${projectName}`);
  console.log("npm run build");
  console.log("npm start");
}

// Chama a função principal
createTsProject();
