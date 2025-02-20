const socials = [
  {
    src: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    title: "Lindekdin"
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
          <h2 className='mt-5 text-5xl uppercase tracking-[-0.05rem] mb-[-0.5rem]'>{social.title}</h2>
        </a>
      ))}
    </>
  )
}
