import {createBrowserRouter} from "react-router";

import {Login, Dashboard, Pedidos, Erro404, Produtos, Facturas, Movimentos, Inscricao, RecuperarSenha, CodigoConfirmacao, StatusConfirmacaoSenha, MFA, UploadIdentificacao, RecuperacaoSenhaNova, MudarSenhaActual, Configuracoes, Relatorios, SuportePosVenda, FAQ, Actividades, Clientes, Expedicao, Integracao, Microservicos, Permissoes, Sessoes, Usuarios, Analise, API} from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },{
    path: "/mfa-login",
    element: <MFA/>,
  },{
    path: "/mudar-senha-actual",
    element: <MudarSenhaActual/>,
  },{
    path: "/inscricao",
    element: <Inscricao/>,
  },{
    path: "/upload-documentacao",
    element: <UploadIdentificacao/>,
  },{
    path: "/recuperar-senha",
    element: <RecuperarSenha/>,
  },{
    path: "/codigo-confirmacao",
    element: <CodigoConfirmacao/>,
  },{
    path: "/senha-nova-recuperacao",
    element: <RecuperacaoSenhaNova/>,
  },{
    path: "/status-confirmacao",
    element: <StatusConfirmacaoSenha/>,
  },{
    path: "/dashboard",
    element: <Dashboard/>,
  },{
    path: "/pedidos",
    element: <Pedidos/>,
  },{
    path: "/produtos",
    element: <Produtos/>,
  },{
    path: "/analise",
    element: <Analise/>,
  },{
    path: "/suporte",
    element: <SuportePosVenda/>,
  },{
    path: "/relatorios",
    element: <Relatorios/>,
  },{
    path: "/facturas",
    element: <Facturas/>,
  },{
    path: "/movimentos",
    element: <Movimentos/>,
  },{
    path: "/configuracoes",
    element: <Configuracoes/>,
  },{
    path: "/actividades",
    element: <Actividades/>,
  },{
    path: "/clientes",
    element: <Clientes/>,
  },{
    path: "/entrega",
    element: <Expedicao/>,
  },{
    path: "/integracoes",
    element: <Integracao/>,
  },{
    path: "/microservicos",
    element: <Microservicos/>,
  },{
    path: "/acessos",
    element: <Permissoes/>,
  },{
    path: "/sessoes",
    element: <Sessoes/>,
  },{
    path: "/usuarios",
    element: <Usuarios/>,
  },{
    path: "/api",
    element: <API/>,
  },{
    path: "/configuracoes",
    element: <Configuracoes/>,
  },{
    path: "/ajuda",
    element: <FAQ/>,
  },{
    path: "*",
    element: <Erro404 />
  }
]);

export default router