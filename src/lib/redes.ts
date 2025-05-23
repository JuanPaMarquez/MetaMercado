import { redesIcon } from "../utils/redIcons"

interface Red {
  id: number,
  nombre: string,
  link: string,
  icon: React.JSX.Element,
}

export const redes: Red[] = [
  {
    id: 1,
    nombre: "Linkedin",
    link: "https://www.linkedin.com/in/juanp-marquez",
    icon: redesIcon.youtube
  },
  {
    id: 2,
    nombre: "Github",
    link: "https://github.com/JuanPaMarquez",
    icon: redesIcon.github
  },
  {
    id: 3,
    nombre: "Gmail",
    link: "mailto:juan013sanchez@gmail.com",
    icon: redesIcon.gmail
  }
]