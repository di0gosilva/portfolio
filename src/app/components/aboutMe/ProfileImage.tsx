import Image from "next/image"

export default function ProfileImage() {
  return (
    <section className='mt-16 flex items-center justify-center
      lg:mt-[4.5rem]
      xlwin:mt-16
    '>
      <Image
        src="../../images/perfil.svg"
        alt='Imagem de Perfil'
        width={155}
        height={155}
        className="
          sm:h-48 sm:w-48
          md:h-52 md:w-52
          lg:h-[17.25rem] lg:w-[17.25rem]
          xl:h-[19.063rem] xl:w-[19.063rem]
          xlwin:h-[18rem]
          2xl:h-[21.875rem] 2xl:w-[21.875rem]
        "
        />
    </section>
  )
}
