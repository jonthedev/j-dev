import clients from "@db/clients"

import SectionTitle from "@components/Typography/Title/SectionTitle"

const Clients = () => {
  return (
    <section className="align-element" id="skills">
      <SectionTitle title="Clients" />
      <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-2">
        {clients.map((client) => {
          return (
            <article
              key={client.id}
              className="flex items-center justify-center rounded-md bg-slate-50"
            >
              {client.img}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Clients
