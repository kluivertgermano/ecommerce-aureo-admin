import {createBrowserRouter} from "react-router";

import {Cadastro, Carrinho, CheckoutDetalhes, CheckoutEntrega, CheckoutMetodoPagamento, CheckoutReview, Contacto, ContaDetalhes, ContaEnderecos, ContaMetodoPagamento, ContaPainel, ContaPedidos, ContaSenha, ERR0404, EsqueceuSenha, EsqueceuSenhaAlterarSenha, EsqueceuSenhaPIN, FinalizadaCompra, Home, Login, Produtos, ProdutosDetalhes, Sobre,} from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/esqueceu-senha",
    element: <EsqueceuSenha/>,
  },
  {
    path: "/esqueceu-senha-pin",
    element: <EsqueceuSenhaPIN/>,
  },
  {
    path: "/esqueceu-senha-alterar-senha",
    element: <EsqueceuSenhaAlterarSenha/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/conta-painel",
    element: <ContaPainel/>,
  },
  {
    path: "/conta-pedidos",
    element: <ContaPedidos/>,
  },
  {
    path: "/conta-enderecos",
    element: <ContaEnderecos/>,
  },
  {
    path: "/conta-metodos-pagamento",
    element: <ContaMetodoPagamento/>,
  },
  {
    path: "/conta-detalhes",
    element: <ContaDetalhes/>,
  },
  {
    path: "/conta-senha",
    element: <ContaSenha/>,
  },
  {
    path: "/sobre",
    element: <Sobre/>,
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
  {
    path: "/loja",
    element: <Produtos/>,
  },
  {
    path: "/loja/:produto",
    element: <ProdutosDetalhes/>,
  },
  {
    path: "/carrinho",
    element: <Carrinho/>,
  },
  {
    path: "/checkout-detalhes",
    element: <CheckoutDetalhes/>,
  },
  {
    path: "/checkout-entregas",
    element: <CheckoutEntrega/>,
  },
  {
    path: "/checkout-pagamento",
    element: <CheckoutMetodoPagamento />
  },
  {
    path: "/checkout-review",
    element: <CheckoutReview/>
  },
  {
    path: "/finalizar-compra",
    element: <FinalizadaCompra/>
  },
  {
    path: "*",
    element: <ERR0404/>,
  }
]);

export default router