import { useState, useEffect } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs'

export function Communication() {
  const fusoLisboa = "Europe/Lisbon"
  const agoraEmLisboa = new Date().toLocaleString('pt-BR', {
    timeZone: fusoLisboa,
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  })
  const [cotacaoEuro, setCotacaoEuro] = useState(0)

  useEffect(() => {
    const obterCotacaoEuro = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
        const data = await response.json()

        setCotacaoEuro(Number(data.EURBRL.ask))
      } catch (error: any) {
        console.error('Erro ao obter a cotação do Euro:', error.message)
      }
    }

    obterCotacaoEuro()
  }, [])

  return (
    <div className="bg-zinc-900 text-white hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-3 flex justify-between">
        <div className="flex gap-4 md:gap-8">
          <p>
            Horário de Portugal: 
            <span className="ml-1 md:ml-2 font-bold">
              {agoraEmLisboa}
            </span>
          </p>
          <p>
            Cotação do Euro: 
            <span className="ml-1 md:ml-2 font-bold">
              €{cotacaoEuro.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
            </span>
          </p>
        </div>

        <div className='flex items-center gap-3 md:gap-6'>
          <BsFacebook className="w-5 h-5" />
          <BsInstagram className="w-5 h-5" />
          <BsLinkedin className="w-5 h-5" />
          <BsWhatsapp className="w-5 h-5" />
          <BsYoutube className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}