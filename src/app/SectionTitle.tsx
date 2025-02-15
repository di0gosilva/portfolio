type SectionTitle = {
  title: string;
}

export default function SectionTitle({ title }: SectionTitle) {
  return (
    <>
      <h3 className="mx-5 mt-10 font-medium tracking-[-0.03rem] relative">
        <span className="border-b-2 w-5 border-white absolute -bottom-px"></span>
        {title}
      </h3>
    </>
  );
}
