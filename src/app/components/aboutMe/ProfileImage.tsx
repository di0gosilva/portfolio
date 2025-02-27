import Image from "next/image"

export default function ProfileImage() {
  return (
    <section className='mt-16 flex items-center justify-center
      lg:mt-[4.5rem]
    '>
      <Image
        src="../../images/perfil.svg"
        alt='Imagem de Perfil'
        width={155}
        height={155}
        className="md:h-52 md:w-52
          lg:h-[17.25rem] lg:w-[17.25rem]
          xl:h-[19.063rem] xl:w-[19.063rem]
        "
        />
    </section>
  )
}
