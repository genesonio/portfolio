import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Stack
} from "@mantine/core"
import { useForm } from "@mantine/form"
import emailjs from "@emailjs/browser"

import useStyles from "./Contact.style"

import { env } from "@/env.mjs"

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    validate: {
      name: value => value.trim().length < 2,
      email: value => !/^\S+@\S+$/.test(value),
      subject: value => value.trim().length === 0
    }
  })

  emailjs.init(env.NEXT_PUBLIC_EMAILJS)

  const { classes } = useStyles()
  return (
    <section className={classes.root} id="contact">
      <Container>
        <Stack spacing="xl">
          <Title className={classes.title}>
            <span className={classes.span}>&lt;</span>Contact
            <span className={classes.span}>&gt;</span>
          </Title>
          <form
            onSubmit={form.onSubmit(formData => {
              emailjs
                .send(
                  "Portfólio",
                  "Portfolio",
                  formData,
                  env.NEXT_PUBLIC_EMAILJS
                )
                .then(res => console.log("SUCCESS!!", res.status, res.text))
                .catch(err => console.error("FAILED...", err))
            })}
          >
            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput
                label="Nome"
                placeholder="Seu Nome"
                name="name"
                variant="filled"
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="Seu Email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>
            <TextInput
              label="Assunto"
              placeholder="Assunto"
              mt="md"
              name="subject"
              variant="filled"
              {...form.getInputProps("subject")}
            />
            <Textarea
              label="Message"
              placeholder="Sua mensagem"
              mt="md"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps("message")}
            />
            <Group position="center" mt="xl">
              <Button className={classes.button} type="submit" size="md">
                Enviar
              </Button>
            </Group>
          </form>
          <Title className={classes.title}>
            <span className={classes.span}>&lt;/</span>Contact
            <span className={classes.span}>&gt;</span>
          </Title>
        </Stack>
      </Container>
    </section>
  )
}

export default Contact
