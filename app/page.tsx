/* eslint-disable @next/next/no-img-element */
import AnimatedStatValue from "./components/animated-stat-value";
import Link from "next/link";
import profile from "./assets/pf.png";
export default function Home() {
  const expertise = [
    "Next.js",
    "React",
    "React-Native",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Github",
    "Tailwind CSS",
    "REST + GraphQL",
  ];

  const stats = [
    { value: "9+", label: "years building production apps" },
    { value: "12", label: "products shipped across web and SaaS" },
    { value: "99.9%", label: "uptime mindset for backend systems" },
  ];

  const projects = [
    {
      title: "PENPAY Website",
      logo: "data:image/png;base64,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",
      type: "PENSION Payment Gateway",
      description:
        "Instantly make remittances to any pension account in Nigeria. It's free, fast and secure.",
      stack: "Next.js / React Js / PHP / MySQL / Redis",
      link: "https://www.penpay.com.ng/",
    },
    {
      title: "Treepz Website",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAzFBMVEUQEBD/v0UAAAn/yEiSdDUIDQ4AABD/xkWqhzv/wUUAAAAAAA3/zEsQEA7/xEY9MhgABw/ttkIwIhnkrkMAABToskMQEQsQEBQuIxg1JxtPPRoJABL/wksMCBAVFBr/xk0kHROcfTlKOydhTiSQdS+AaDNAMyDkuUknIxwuHhk5LBVaSSW+mkK5lEV8azCZgDXUoz+xkDNuWyrKoz1KNCQvKxjLnUFVQyhIQSIjGBh4Wy9PSSMWGRndsEe+nDrxwkdaUDGRbDb/zzwOAB9g11UpAAAFDUlEQVR4nO2ba1PbOBSGHSmWLcsSNnGqsNgxgdxaktYkJdyaTUv//39aGTr1cRdSeesY74wePgCecfTy6uhcNINlGQwGg8FgMBgMBoPBYDAYDAaDwWAwGAwacBtVJ3h6lZUf8vo0JWfdqoxH5yjXdDFWPz995Q8nw/pU2dMQV8P3Z3NbcvQ+LZ6lvj9htWmygqOQdqog4v4HZMlkvhXFQyq6nqzPqcqiOv4ls7hECwe8J5YaPvF3hxJF449Eckk+ic7P96jIWKLhk7aV1URRGl8R9eFsFTvAp/DI1nbhAKLEOkosC31OcQxEXSIu306U079WwRMc98A7FHeRnk+H2T66u1QZKiEbYBN13EhztSqBrq/J6UaWJVFXFH8HjbPI1vdAW5TzOmUThetxbqFJ2gGiZvOgxgz1jD0fua8ygrHTERsVzhzd7GCCim9Y3T4pElVLvRdB3m0MA7o/D7gV3PXh5uEJq1/Svr+S3c5okSBpepGXYbIR0CgX1S9pDzxIMgeUt/QeJZwzFz7DmVdrfvotSbQo7ZOr1pdogsF+iu20UaNUxR0/Ak+cjVQ+oYeYgs3zq2nSL8ivvG+RlaBx4UmYEFXxrvuw4tH7aj79qSjpfQ5huxTeqG7XjtZw8/CIHODgvQ4PvpRbuBVRT5ELnnXEGsnas+Y+bPY3XN938xbOmzhQ03Ye8Uad8kYpWB8vmK2y1iWo3JTujpvdPNXCgTOmgnyo+jpmhaASxul9jXPC71EV9wZ2M07/Nngn7WHmFP0KfRwforrsITjrFQHlxFgd/KFEVwK4JxbkAFV4DzZZg0wu/C4bqjnhow+DPBvqzAk1avJGGK6/+KKyFoFB3hHpUbNlWJJvAmbtLbFVxTmBmn60C83B0RTTYvd+9OTDDdDppHlP3KQmMp2BmaATf0W50CuQtZ4GvyYlSYk2DpznRvn6ZIIpaPa2w6BZTcyFh8xZMtXCoRWsOLT/HjVbXcgEdkuqugWqhbLLQb4iSZOSLPZQSkahauF4MlzDOStVc0KjPrGjrDSMr/ILQ7R0gHuOi5rtyYOoV3hCY9xFlrTJGLZ1zjpvF5qDW1GpuuGr/MYJXcRAKJ0dNXnwVOx4n9Kfp4x2aBYpTexkByMf3zTarqh26RJeEDi7fE5JBllcCvJmq4uFpn1RpKM4vsgDGi3A4EmbD3I2gxnS+cby6tIt9eRrYr0sSjtFVEkmXCb2EvhE8TL3hK2gJrqdo8R+kUT3RFaZ+6TldUuzU3Zmq4M3TeE1UHp7Nh8MjgfHiudvg8HJMx9O9NfSRbVL9/Aihe6uGZdq8IOaaJj1ttttr0T/mXB7gEyBHnZwdlJBzrlkG1y+xaOvk/5VtygenMJhuIOfDj4aY1oWtYfaRfEkgbdgQrhevqErv8KVcf1OeSNYXZzt0JacnIeigihctyg2eYStZvhF9XXBcc/R11S/U+g8BJVEpKtIpbhoAwea+kRp5qlg3oeVxF+h/E7arSKpilNaomSwgOvjpQpyy7uosned2mMKuSoZPYVULkNspJ0Pw3E1TTXHFBv7gMfwTn22fTfz/w3e9wv2a3Xq7Dsp+E6CfM/vLHJKfuUU/vjrL6entV4LyVK1f24t7ODlXmAfupqavdLS40+vrA9DG50yGAxvRhtTQjuTp0EXE1O6tNEpg8HwZrQxJbQzeRr+z7Qzptp4+gzatHH72hnoBl1MTBkMBsN/oI3JU/9/sRrlH599af5BHmVfAAAAAElFTkSuQmCC",
      type: "Travel App",
      description:
        "Treepz CA | Book Events. Plan Vacations. Rent Vehicles",
      stack: "React Js / Next JS / Node Js / WebSockets",
      link: "https://www.treepz.com/",
    },
    {
      title: "VPD Money Mobile App",
      logo: "data:image/png;base64,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",
      type: "Fintech App",
      description:
        "VPD money is a digital financial services App that offers instant access to a customisable banking experience, money management tools and added value services.",
      stack: "React Native / Kotlin",
      link: "https://vpdmoney.net",
    },
       {
      title: "Treepz Mobile App",
      logo: "data:image/png;base64,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",
      type: "Travel App",
      description:
        "Treepz CA | Book Events. Plan Vacations. Rent Vehicles",
      stack: "React Native",
      link: "https://play.google.com/store/apps/details?id=com.treepz.treepzapp",
    },
     {
      title: "Abaaly Website",
      logo: "data:image/png;base64,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",
      type: "Social Fintech Web App",
      description:
        "Abaaly is an all-in-one African super app designed to help people socialize, communicate, and transact seamlessly. We are redefining how individuals and businesses engage in the digital age.",
      stack: "Vue JS / TypeScript / HTML / CSS",
      link: "https://www.abaaly.com/",
    },
     {
      title: "Abaaly Mobile App",
      logo: "data:image/png;base64,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",
      type: "Social Fintech App",
      description:
        "Abaaly is an all-in-one African super app designed to help people socialize, communicate, and transact seamlessly. We are redefining how individuals and businesses engage in the digital age.",
      stack: "React Native / Kotlin / RUST",
      link: "https://play.google.com/store/apps/details?id=com.abaaly",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Product Strategy",
      text: "Translate goals into flows, architecture, and a roadmap that balances speed with long-term maintainability.",
    },
    {
      step: "02",
      title: "Interface Engineering",
      text: "Build responsive frontends with design systems, accessible patterns, and motion that reinforces hierarchy.",
    },
    {
      step: "03",
      title: "Backend Systems",
      text: "Design APIs, data models, authentication, and deployment pipelines that keep products reliable at scale.",
    },
  ];

  return (
    <main className="page-shell min-h-screen">
      <div className="floral-layer" aria-hidden="true">
        <div className="floral-orbit float-flower absolute -left-24 top-24 h-[28rem] w-[28rem]" />
        <div className="floral-orbit float-flower-delayed absolute right-[-8rem] top-[42rem] h-[24rem] w-[24rem]" />
        <div className="floral-orbit float-flower absolute bottom-[18rem] left-[22%] h-[18rem] w-[18rem]" />

        <div className="floral-stem float-flower absolute left-[8%] top-[9rem] h-[22rem] rotate-[-18deg]" />
        <div className="floral-stem float-flower-delayed absolute right-[12%] top-[34rem] h-[20rem] rotate-[16deg]" />
        <div className="floral-stem float-flower absolute left-[72%] top-[78rem] h-[18rem] rotate-[-12deg]" />

        <div className="floral-bloom float-flower absolute left-[-1.5rem] top-[8rem] h-40 w-40" />
        <div className="floral-bloom floral-bloom-cool float-flower-delayed absolute left-[18%] top-[32rem] h-28 w-28" />
        <div className="floral-bloom float-flower-delayed absolute right-[5%] top-[28rem] h-52 w-52" />
        <div className="floral-bloom floral-bloom-cool float-flower absolute right-[18%] top-[72rem] h-32 w-32" />
        <div className="floral-bloom float-flower absolute left-[10%] bottom-[14rem] h-44 w-44" />

        <div className="floral-petal float-flower absolute left-[12%] top-[18rem] rotate-[18deg]" />
        <div className="floral-petal float-flower-delayed absolute right-[14%] top-[17rem] rotate-[-22deg]" />
        <div className="floral-petal float-flower absolute left-[68%] top-[64rem] rotate-[36deg]" />
      </div>
      <div className="noise-overlay" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-6 md:px-10 lg:px-12">
        <header className="fade-up flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <a
            href="#top"
            className="headline-display text-lg font-semibold tracking-tight text-orange-300"
          >
          My Portfolio
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="grid flex-1 items-center gap-12 py-14 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
        >
          <div className="space-y-10">
            <div className="fade-up space-y-6" style={{ animationDelay: "100ms" }}>
              <span className="section-label">Full-Stack Developer</span>
              <h1 className="headline-display max-w-4xl text-md leading-[0.92] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                Hello! I’m<br/>
                {" "}
                <span className="accent-italic text-orange-300">Marshall Ekene</span>
                {" "}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
               I design and ship fast, scalable experiences across the full stack, from animated interfaces in Next.js to mobile apps for Android and iOS, APIs, databases, auth flows, and deployment pipelines that keep products moving.</p>
            </div>

            <div
              className="fade-up flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/10"
              >
                Let&apos;s Build Something
              </a>
            </div>

            <div
              className="fade-up flex max-w-3xl flex-wrap gap-3"
              style={{ animationDelay: "340ms" }}
            >
              {expertise.map((item) => (
                <span key={item} className="chip rounded-full px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[680px] overflow-hidden rounded-4xl bg-black/20">
            <img
              src={profile.src}
              alt="Marshall Ekene portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="fade-up grid gap-4 md:grid-cols-3" style={{ animationDelay: "420ms" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-[1.75rem] px-6 py-7 transition duration-300 hover:-translate-y-1"
            >
              <AnimatedStatValue
                value={stat.value}
                className="metric-number text-5xl font-semibold text-white"
              />
              <p className="mt-3 max-w-[18rem] text-sm leading-7 text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12"
      >
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <span className="section-label">Selected Work</span>
            <h2 className="headline-display max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Full-stack products shaped around outcomes, not just features.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
           </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/35"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                <span>{project.type}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="h-[60px] w-[60px] rounded-full"
                />
              <h3 className="headline-display mt-8 text-3xl font-semibold text-white">
                {project.title}
              </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <Link href={project.link} className="mt-4 text-sm leading-7 text-orange-500">
               <span className="text-orange-300 underline">View Project</span>
              </Link>
              <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200">
                {project.stack}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12"
      >
        <div className="space-y-5">
          <span className="section-label">Workflow</span>
          <h2 className="headline-display max-w-xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Product Strategy
          </h2>
          <p className="max-w-lg text-sm leading-7 text-slate-300">
            My role is usually part builder, part systems thinker. I work across the
            product surface so teams can move with clarity from concept to launch.
          </p>
        </div>

        <div className="space-y-5">
          {process.map((item, index) => (
            <div
              key={item.step}
              className="glass-card rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <span className="metric-number text-4xl font-semibold text-cyan-200/85">
                  {item.step}
                </span>
                <div className="max-w-xl">
                  <h3 className="headline-display text-2xl font-semibold text-orange-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-10 md:px-10 lg:px-12"
      >
        <div className="glass-card rounded-[2.25rem] px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <span className="section-label">Contact</span>
              <h2 className="headline-display max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Need a developer who can own the
                {" "}
                <span className="accent-italic text-orange-300">entire product flow</span>
                ?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                I help teams launch thoughtful web experiences with modern frontend
                architecture, backend reliability, and execution that feels senior
                from day one.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:marshallekene@hotmail.com"
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-orange-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6.75h16A1.25 1.25 0 0 1 21.25 8v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Z" />
                    <path d="m3.5 8 8.5 6 8.5-6" />
                  </svg>
                  Email
                </span>
                <span>marshallekene@hotmail.com</span>
              </a>
              <a
                href="https://github.com/marshalsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-orange-300"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.07A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.49.36 1.9-1.35 2.74-1.07 2.74-1.07.55 1.42.21 2.48.1 2.74.64.73 1.03 1.66 1.03 2.79 0 3.96-2.34 4.83-4.58 5.09.36.32.69.94.69 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
                  </svg>
                  GitHub
                </span>
                <span>https://github.com/marshalsoft</span>
              </a>
              <a
                href="https://www.linkedin.com/in/marshallekene"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-orange-300"
                    fill="currentColor"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.7h2.67V18H5.6V9.7Zm4.34 0h2.56v1.13h.04c.36-.68 1.23-1.4 2.52-1.4 2.7 0 3.2 1.83 3.2 4.21V18h-2.67v-3.88c0-.92-.01-2.1-1.24-2.1-1.25 0-1.44.99-1.44 2.03V18H9.94V9.7Z" />
                  </svg>
                  LinkedIn
                </span>
                <span>https://www.linkedin.com/in/marshallekene</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
