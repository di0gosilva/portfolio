const socials = [
  {
    src: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    title: "Linkedin"
  },
  {
    src: "https://github.com/di0gosilva",
    title: "Github"
  },
  {
    src: "https://instagram.com/di0gosilva",
    title: "Instagram"
  },
]

export default function SocialLinks() {
  return (
    <>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.src}
          target='_blank'
          rel="noopener noreferrer"
        >
          <h2 className='mt-5 text-5xl uppercase tracking-[-0.05rem] mb-[-0.5rem]
            sm:text-[3.5rem] sm:mt-4
            md:text-7xl md:mt-5
          '>{social.title}</h2>
        </a>
      ))}
    </>
  )
}
