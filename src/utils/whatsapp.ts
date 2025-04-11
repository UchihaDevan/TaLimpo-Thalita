import { Produto } from '../types/Produto';

export function gerarLinkWhatsApp(produtos: Produto[]) {
  const mensagem = produtos.map(p => `- ${p.nome}`).join('\n');
  return `https://wa.me/5585999999999?text=Olá! Quero comprar:\n${mensagem}`;
}
