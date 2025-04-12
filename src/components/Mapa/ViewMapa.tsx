// src/components/Localizacao.tsx
const Localizacao = () => {
    return (
      <section className="bg-[#f0faff] py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#005c99] mb-6">Onde estamos</h2>
          <p className="text-gray-700 mb-6">
            Visite a loja física da TaLimpo Thalita! Estamos de portas abertas para te receber com os melhores produtos de limpeza.
          </p>
  
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#cceeff]">
            <iframe
              title="Mapa da loja TaLimpo Thalita"
              src="https://www.google.com/maps/embed?pb=!4v1744429012663!6m8!1m7!1suKzxsAfgMo0S4use9bcrdA!2m2!1d-3.815243689022366!2d-38.58613681909921!3f220.7630043677348!4f-9.463688134347464!5f0.7820865974627469"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default Localizacao;
  