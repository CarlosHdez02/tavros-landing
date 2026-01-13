export default function Philosophy() {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#E8B44F] uppercase tracking-[0.2em] text-sm font-semibold border-l-2 border-[#E8B44F] pl-4">
              Nuestra Filosofía
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              MÁS QUE SOLO ACERO. <br />
              <span className="italic text-muted-foreground font-light">
                UN SANTUARIO DE PODER.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-muted-foreground text-lg leading-relaxed text-justify">
            Creemos que el gimnasio no es solamente para ejercitarse, sino un
            templo donde el ser humano puede alcanzar la excelencia estética y
            fuerza. Con nuestros métodos probados y ambiente enfocado, podrás
            alcanzar todos tus objetivos y forjar tu legado.
          </p>
        </div>
      </div>
    </section>
  );
}
