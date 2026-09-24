import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import "../lp.css";

// Substitua pelo link real do checkout quando ele estiver disponível.
const CHECKOUT_URL = "#";

const TITLE = "Presépio Iluminado da Sagrada Família";
const DESCRIPTION =
  "Presépio Iluminado da Sagrada Família para trazer fé, significado e acolhimento ao seu lar. Frete grátis para todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 18h6M10 22h4M8.2 14.8a7 7 0 1 1 7.6 0c-.8.6-1.3 1.4-1.3 2.2h-5c0-.8-.5-1.6-1.3-2.2Z" />
        <path d="M12 2V0M4.9 4.9 3.5 3.5M19.1 4.9l1.4-1.4M2 12H0M24 12h-2" />
      </svg>
    ),
    question: "Como funciona a iluminação?",
    answer:
      "A iluminação é feita por uma vela a bateria com botão liga e desliga interno. É prática, simples de usar e deixa o presépio ainda mais especial.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="m4 16 12-12 4 4L8 20H4v-4Z" />
        <path d="m13 7 4 4M7 17l-2-2M10 14l-2-2M13 11l-2-2" />
      </svg>
    ),
    question: "Qual o tamanho do presépio?",
    answer: "O presépio possui aproximadamente 10 cm de altura.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M8 2v7M16 2v7M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5" />
      </svg>
    ),
    question: "O presépio precisa ficar ligado na tomada?",
    answer:
      "Não. A iluminação funciona com vela a bateria, sem necessidade de tomada ou fios.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
    question: "Vocês enviam para todo o Brasil?",
    answer: "Sim. Enviamos para todo o Brasil.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    ),
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos Pix e cartão.",
  },
];

function Index() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="lp-page">
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow">PRESÉPIO ILUMINADO</p>
            <div className="sacred-divider" aria-hidden="true">
              <span></span>
              <b>†</b>
              <span></span>
            </div>

            <h1 id="hero-title">
              Leve a presença e a luz da Sagrada Família
              <em>para o seu lar.</em>
            </h1>

            <p className="hero__copy">
              Um Presépio Iluminado da Sagrada Família para trazer fé, significado e
              acolhimento ao seu cantinho especial.
            </p>

            <a
              className="cta-button"
              href="#oferta"
              aria-label="Quero comprar meu Presépio Iluminado"
            >
              <span>QUERO O MEU PRESÉPIO</span>
              <span className="cta-arrow" aria-hidden="true">
                ›
              </span>
            </a>

            <p className="shipping-note">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
              Frete grátis para todo o Brasil
            </p>
          </div>
        </section>

        <figure className="product-hero">
          <img
            src="/assets/PRODUTO_REAL_FONTE_DE_VERDADE.jpg"
            alt="Presépio Iluminado da Sagrada Família"
            width={1200}
            height={1200}
          />
        </figure>

        <section
          className="benefits"
          aria-label="Informações e benefícios do Presépio Iluminado"
        >
          <div className="benefits__grid">
            <article className="benefit">
              <p className="benefit__eyebrow">ILUMINAÇÃO SUAVE</p>
              <h2 className="benefit__title">Uma luz delicada</h2>
              <p className="benefit__description">
                Que deixa o ambiente mais acolhedor.
              </p>
            </article>

            <article className="benefit">
              <p className="benefit__eyebrow">FUNCIONA A BATERIA</p>
              <h2 className="benefit__title">Mais praticidade</h2>
              <p className="benefit__description">Sem necessidade de tomada.</p>
            </article>

            <article className="benefit">
              <p className="benefit__eyebrow">PARA SEU CANTINHO DE FÉ</p>
              <h2 className="benefit__title">Um toque especial</h2>
              <p className="benefit__description">
                Ideal para oratório, sala ou espaço de oração.
              </p>
            </article>
          </div>
        </section>

        <section className="product-video" aria-label="Vídeo do Presépio Iluminado">
          <div className="product-video__slot">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Vídeo do Presépio Iluminado"
            >
              <source src="/assets/presepio-video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="details" aria-labelledby="details-title">
          <div className="section-heading">
            <h2 id="details-title">Beleza e significado em cada detalhe</h2>
            <div className="sacred-divider sacred-divider--small" aria-hidden="true">
              <span></span>
              <b>†</b>
              <span></span>
            </div>
          </div>

          <div className="gallery" aria-label="Detalhes do Presépio Iluminado">
            <figure className="gallery__item">
              <img
                src="/assets/galeria-01.png"
                alt="Vista traseira do Presépio Iluminado"
                width={300}
                height={300}
                loading="lazy"
              />
            </figure>
            <figure className="gallery__item">
              <img
                src="/assets/galeria-02.png"
                alt="Vista traseira em ângulo do Presépio Iluminado"
                width={300}
                height={300}
                loading="lazy"
              />
            </figure>
            <figure className="gallery__item">
              <img
                src="/assets/galeria-03.png"
                alt="Vista frontal do Presépio Iluminado aceso"
                width={300}
                height={300}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="faq-section__inner">
            <h2 id="faq-title">PERGUNTAS FREQUENTES</h2>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <article
                    key={faq.question}
                    className="faq-item"
                    data-open={isOpen ? "true" : "false"}
                  >
                    <button
                      className="faq-question"
                      type="button"
                      id={`faq-question-${index + 1}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index + 1}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="faq-icon" aria-hidden="true">
                        {faq.icon}
                      </span>
                      <span className="faq-question__text">{faq.question}</span>
                      <svg className="faq-chevron" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      className="faq-answer"
                      id={`faq-answer-${index + 1}`}
                      aria-labelledby={`faq-question-${index + 1}`}
                      aria-hidden={!isOpen}
                    >
                      <div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="offer-section" id="oferta" aria-labelledby="offer-title">
          <div className="offer-section__inner">
            <header className="offer-heading">
              <h2 id="offer-title">
                <span className="offer-title__line offer-title__line--primary">
                  LEVE A SAGRADA FAMÍLIA
                </span>
                <span className="offer-title__line offer-title__line--accent">
                  PARA UM LUGAR
                </span>
                <span className="offer-title__line offer-title__line--accent">
                  ESPECIAL DA SUA CASA.
                </span>
              </h2>
              <p>
                Um símbolo de fé, amor e união, que ilumina e transforma o ambiente todos
                os dias.
              </p>
            </header>

            <div className="offer-card">
              <div className="offer-card__symbol" aria-hidden="true">
                <span></span>
                <b>†</b>
                <span></span>
              </div>
              <p className="offer-card__eyebrow">SÍMBOLO DE FÉ E AMOR</p>

              <div className="offer-price">
                <p>Seu Presépio Iluminado por apenas</p>
                <strong>R$ 129,90</strong>
                <small>Pix ou cartão de crédito em até 12x</small>
              </div>

              <a
                className="offer-cta"
                href={CHECKOUT_URL}
                aria-label="Quero comprar meu Presépio Iluminado"
              >
                <span>QUERO O MEU PRESÉPIO</span>
                <span className="offer-cta__arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <div className="offer-trust" aria-label="Garantias da compra">
                <span>
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <rect x="5" y="10" width="14" height="11" rx="1" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                  Pagamento seguro
                </span>
                <i aria-hidden="true"></i>
                <span>
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                  Enviamos para todo o Brasil
                </span>
                <i aria-hidden="true"></i>
                <span>
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 2 20 6v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4Z" />
                    <path d="m8.5 12 2.2 2.2 4.8-5" />
                  </svg>
                  Seus dados protegidos
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
