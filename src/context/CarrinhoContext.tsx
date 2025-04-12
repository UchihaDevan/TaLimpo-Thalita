import { createContext, useContext, useState, ReactNode } from "react";
import { Produto } from "../types/Produto";

type CarrinhoContextType = {
  carrinho: Produto[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (produto: Produto) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionarProduto = (produto: Produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  const removerProduto = (produto: Produto) => {
    setCarrinho((prev) => prev.filter((p) => p.nome !== produto.nome));
  };

  const limparCarrinho = () => setCarrinho([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho deve ser usado dentro do CarrinhoProvider");
  return context;
};
