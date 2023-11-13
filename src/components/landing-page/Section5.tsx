import { Card } from "@/components/landing-page/Card"

export function Section5() {
  return (
    <section
      className="bg-fixed bg-cover bg-center h-full py-32"
      style={{ backgroundImage: "url('/landing-page/example_04.jpg')" }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-second rounded-xl py-12 px-4 :px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-main mb-6">
          Nossos serviços
        </h2>
        <p className="text-lg mb-6">
          Nós oferecemos serviços completos para a solicitação da sua cidadania, desde a análise dos documentos necessários até o fim do processo com a obtenção da nacionalidade portuguesa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card props={{
            title: "Assessoria",
            description: "Oferecemos suporte durante todo o processo de solicitação de nacionalidade."
          }} />
          <Card props={{
            title: "Verificação de requisitos",
            description: "Verificamos se você atende a todos os requisitos legais para a solicitação."
          }} />
          <Card props={{
            title: "Preparação de documentos",
            description: "Preparamos todos os documentos necessários para a solicitação de nacionalidade."
          }} />
          <Card props={{
            title: "Gerenciamento de processo",
            description: "Nós gerenciamos todo o processo de solicitação junto às autoridades portuguesas."
          }} />
          <Card props={{
            title: "O investimento a ser realizado incluem todos os serviços necessários para a obtenção da cidadania portuguesa!",
            description: "",
            custom: "col-span-1 md:col-span-2"
          }} />
        </div>
      </div>
    </section>
  )
}