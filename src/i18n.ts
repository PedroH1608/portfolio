import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          about: {
            greeting: "Hi, I'm Pedro!",
            intro:
              "Full Stack Developer with 2 years' experience building and deploying web applications. Proficient in front-end, back-end, and DevOps practices. Currently engaged as a freelance developer.",
          },
          courses: {
            title: "Education",
            educationList: [
              {
                course: "Systems Analysis and Development",
                period: "January 2025 - January 2027",
              },
              {
                course: "Front-End and Back-End Development",
                period: "February 2023 - August 2025",
              },
            ],
          },
          skills: {
            title: "Skills",
          },
          projects: {
            title: "Projects",
            subtitle: "My latest projects",
            website: "Website",
            source: "Source",
            projectList: [
              {
                title: "NextBoxd AI",
                dates: "August 2025 - October 2025",
                description:
                  "NextBoxd AI is an intelligent movie suggestion application. It uses AI (OpenRouter) to provide personalized recommendations based on your prompts or by analyzing uploaded CSV watchlists. It fetches detailed movie info (posters, trailers) from TMDB API.",
              },
              {
                title: "Racing Leagues (WIP)",
                dates: "October 2025 - Present",
                description:
                  "Website for finding and creating sim-racing leagues.",
              },
            ],
          },
          contact: {
            title: "Contact",
            message:
              "I am open to new opportunities and collaborations. Please feel free to <1>contact me via email</1> or <2>connect with me on LinkedIn</2>.",
          },
          menu: {
            theme: "Theme",
            language: "Language",
          },
          footer: {
            builtWith:
              "This site was built using React, TypeScript and Tailwind CSS, with icons provided by Devicon and Heroicons. Hosted on Vercel.",
          },
        },
      },
      "pt-BR": {
        translation: {
          about: {
            greeting: "Olá, sou o Pedro!",
            intro:
              "Desenvolvedor Full Stack com 2 anos de experiência na construção e implantação de aplicações web. Proficiente em práticas de front-end, back-end e DevOps. Atualmente atuando como desenvolvedor freelancer.",
          },
          courses: {
            title: "Formação",
            educationList: [
              {
                course: "Análise e Desenvolvimento de Sistemas",
                period: "Janeiro 2025 - Janeiro 2027",
              },
              {
                course: "Desenvolvimento Front-End e Back-End",
                period: "Fevereiro 2023 - Agosto 2025",
              },
            ],
          },
          skills: {
            title: "Habilidades",
          },
          projects: {
            title: "Projetos",
            subtitle: "Projetos recentes",
            website: "Página",
            source: "Código",
            projectList: [
              {
                title: "NextBoxd AI",
                dates: "Agosto 2025 - Outubro 2025",
                description:
                  "NextBoxd AI é uma aplicação inteligente de sugestão de filmes. Utiliza IA (OpenRouter) para fornecer recomendações personalizadas com base nos seus prompts ou analisando listas de filmes em CSV. Busca informações detalhadas dos filmes (pôsteres, trailers) da API TMDB.",
              },
              {
                title: "Racing Leagues (WIP)",
                dates: "Outubro 2025 - Presente",
                description:
                  "Site para encontrar e criar ligas de automobilismo virtual.",
              },
            ],
          },
          contact: {
            title: "Contato",
            message:
              "Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para <1>entrar em contato por e-mail</1> ou <2>se conectar comigo no LinkedIn</2>.",
          },
          menu: {
            theme: "Tema",
            language: "Idioma",
          },
          footer: {
            builtWith:
              "Este site foi construído com React, TypeScript e Tailwind CSS, com ícones fornecidos por Devicon e Heroicons. Hospedado na Vercel.",
          },
        },
      },
    },
  });

export default i18n;
