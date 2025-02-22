import Image from "next/image"

export default function ProfileImage() {
  return (
    <section className='mt-16 flex items-center justify-center
    '>
      <Image
        src="../../images/perfil.svg"
        alt='Imagem de Perfil'
        width={155}
        height={155}
        className="sm:h-52 sm:w-52"
        />
    </section>
  )
}
