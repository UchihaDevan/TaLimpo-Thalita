import { useState } from "react";
import { Produto } from "../../types/Produto";
import { useCarrinho } from "../../context/CarrinhoContext";

const produtosMock: Produto[] = [
  { nome: "Alvejante Brilux 5L", descricao: "Cheiro de lavanda", imagem: "/src/assets/ImgProdutos/alvejante.png" },
  { nome: "Alvejante Brilux 1L", descricao: "Remove gordura facilmente", imagem: "/src/assets/ImgProdutos/alvejante1l.png" },
  { nome: "Aromatizante TaLimpo", descricao: "Para roupas mais limpas", imagem: "/src/assets/ImgProdutos/aromatizante.png" },
  { nome: "Oleo de Peroba", descricao: "Para roupas mais limpas", imagem: "/src/assets/ImgProdutos/oleo_peroba.png" },
  { nome: "Água Sanitária", descricao: "Para roupas mais limpas", imagem: "/src/assets/ImgProdutos/agua_sanitaria_brilux.png" },
];

const ProdutoList = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const { adicionarProduto } = useCarrinho();

  return (
    <>
      <div className="justify-between flex mt-28 max-w-[90%] mx-auto text-[#005c99]">
        <h2 className="text-3xl font-bold">Produtos em destaque</h2>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="text-xl">Ver tudo</a>
      </div>
      <section className="max-w-[90%] mx-auto py-8 px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {produtosMock.map((produto, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-2xl p-4 hover:scale-105 transition-all flex flex-col w-[250px] justify-around">
            <img src={produto.imagem} alt={produto.nome} className="w-full h-40 object-contain rounded-xl mb-2" />
            <div>
              <h3 className="text-lg font-semibold text-[#005c99]">{produto.nome}</h3>
              <p className="text-sm text-gray-600 mb-3">{produto.descricao}</p>
            </div>
            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => adicionarProduto(produto)}
                className="flex-1 bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-700 flex items-center justify-center gap-1 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                </svg>
              </button>
              <button
                onClick={() => setProdutoSelecionado(produto)}
                className="flex-1 bg-[#005c99] text-white py-2 px-3 rounded-md hover:bg-[#004a80] transition"
              >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </section>

      {produtoSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setProdutoSelecionado(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} className="w-full h-[300px] object-contain rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-[#005c99]">{produtoSelecionado.nome}</h3>
            <p className="text-gray-700 mt-2">{produtoSelecionado.descricao}</p>
            <button
              className="mt-6 bg-[#0099cc] text-white px-4 py-2 rounded-md hover:bg-[#0077aa] transition w-full"
              onClick={() => {
                adicionarProduto(produtoSelecionado);
                setProdutoSelecionado(null);
              }}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProdutoList;
