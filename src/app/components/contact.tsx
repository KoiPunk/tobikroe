const response = {
}

export default function Contact() {
  return (
    <form className="bg-neutral-200 pb-24" action="" method="POST">
        <h2>Leave a message!</h2>
        <p>* INDICATES REQUIRED FIELD</p>
        <div className="flex">
            <section>
                <label for="name">Name *</label>
                <input id="name" type="text" name="name" required></input>
            </section>

            <section>
                <label for="email">Email *</label>
                <input id="email" type="text" name="email" required></input>
            </section>
        </div>

        <section>
            <label for="subject">Subject *</label>
            <input id="subject" type="text" name="subject" required></input>
        </section>

        <section>
            <label for="message">Word *</label>
            <textarea id="message" name="message" rows="5" cols="" required></textarea>
        </section>

        <input type="submit" value="Submit" className="bg-black text-white w-fit px-8 py-2"/>
    </form>
  )
}
