import { useCarrinho } from "../../context/CarrinhoContext";
import { useState, useEffect } from "react";

const ResumoCarrinho = () => {
    const { carrinho, removerProduto, limparCarrinho } = useCarrinho();
    const [aberto, setAberto] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    // Fechar com ESC
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setAberto(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const abrirWhatsApp = () => {
        const mensagem = carrinho.map(p => `• ${p.nome}`).join("\n");
        const link = `https://wa.me/5585997734319?text=${encodeURIComponent("Olá! Gostaria de pedir:\n" + mensagem)}`;
        window.open(link, "_blank");

        // Mostrar animação de sucesso
        setSucesso(true);
        setTimeout(() => {
            setSucesso(false);
            setAberto(false);
            limparCarrinho();
        }, 2500);
    };

    return (
        <>
            {/* Botão flutuante */}
            {carrinho.length > 0 && !sucesso && (
                <button
                    onClick={() => setAberto(true)}
                    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg text-sm md:text-base z-50"
                >
                    ({carrinho.length})
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                </button>
            )}

            {/* Modal */}
            {aberto && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                    onClick={() => setAberto(false)}
                >
                    <div
                        className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setAberto(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold text-[#005c99] mb-4">Resumo do Carrinho</h2>

                        <ul className="space-y-2 max-h-60 overflow-y-auto text-left text-sm">
                            {carrinho.map((produto, idx) => (
                                <li key={idx} className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
                                    <span>{produto.nome}</span>
                                    <button
                                        onClick={() => removerProduto(produto)}
                                        className="text-red-600 hover:underline text-xs flex fill-red-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-x-fill fill-red-600" viewBox="0 0 16 16">
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708" />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 space-y-2">
                            <button
                                onClick={abrirWhatsApp}
                                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                            >
                                Finalizar pedido no WhatsApp
                            </button>
                            <button
                                onClick={limparCarrinho}
                                className="w-full text-sm text-red-600 hover:underline"
                            >
                                Limpar carrinho
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Animação de sucesso */}
            {sucesso && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 shadow-xl text-center animate-fadeIn">
                        <h2 className="text-2xl font-bold text-green-600 mb-2">Pedido enviado!</h2>
                        <p className="text-gray-700">Aguarde o atendimento via WhatsApp.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResumoCarrinho;
