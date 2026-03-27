import Image from "next/image";

function Placeholder({ label, ratioClass = "aspect-[16/9]" }) {
  return (
    <div
      className={`w-full ${ratioClass} rounded-2xl border border-neutral-300 bg-neutral-100/80 flex items-center justify-center text-neutral-500 text-sm md:text-base`}
    >
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden flex justify-center items-start px-4 sm:px-6 lg:px-8 pt-10 md:pt-28 pb-10 ">
      <div className="w-full max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-left break-words">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
          Road to VLA
        </h1>

        <div className="space-x-4">
          <p className="text-xs sm:text-sm text-neutral-600 mb-2 sm:mb-3 whitespace-normal break-words">
            Mar 25th 2026 ·
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-neutral-800 mr-1 ml-1"
            >
              Yahya Masri
            </a>
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 mb-2 sm:mb-3 whitespace-normal break-words">
            Contributors: Akshith Ambekar · Abhi Maddi
          </p>

          <div className="mt-6 mb-6 sm:mb-8 flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/yahya3867/simplevla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded md:rounded-md text-xs font-medium bg-neutral-200 border border-neutral-400 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_0_rgba(0,0,0,0.25)] hover:bg-neutral-300"
              aria-label="Project on GitHub"
            >
              Github
            </a>
          </div>
        </div>

        <p>
          We have spent years building with language models, but we kept
          feeling a gap between using these systems and truly understanding
          them. This project is our attempt to close that gap by learning how a
          VLA model works from first principles.
        </p>

        <div className="mt-[30px] mb-[30px]">
          <div className="w-full aspect-[1358/404] rounded-2xl overflow-hidden border border-neutral-300 bg-white">
            <div className="relative w-full h-full">
              <Image
                src="/vla.svg"
                alt="Road to VLA main visual"
                fill
                className="object-contain py-2"
                priority
              />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 text-center">
            How a VLA model works
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1 mt-12">
          Why did we start this project?
        </h2>
        <br />

        <p>
          We wanted to do something genuinely difficult to prove to ourselves
          that we can go beyond using AI systems and actually understand how
          they work under the hood. Building toward a VLA model felt like the
          right
          challenge because it combines perception, language reasoning, and
          action in one stack.
        </p>

        <ul className="list-disc list-inside text-left mt-4 break-words">
          <li>
            We have used LLM tooling in practice, but we want first-principles
            understanding instead of surface-level familiarity.
          </li>
          <li>
            There still is not a simple, practical, beginner-friendly path that
            shows how to reason from model outputs all the way to physical
            actions.
          </li>
        </ul>
        <br />

        <p>
          Our working philosophy for this project is: build before
          over-consuming theory. We want to prototype, fail, and debug small
          components first, then study papers with sharper questions. That way
          we are not just repeating terminology, we are forming real intuition.
        </p>
        <br />

        <p>
          We also want this to shape how we think: slower, more deliberate, and
          more grounded in fundamentals. Instead of treating advanced systems
          like black boxes, we want to document each piece, explain it clearly,
          and share progress publicly as we go.
        </p>

        <div className="mt-6 md:mt-8">
          <p>
            Throughout this project, we are trying to learn by drawing system
            diagrams, writing down assumptions, and validating each step with
            implementation. The goal is to make the learning path inspectable
            and reproducible.
          </p>
          <br />
          <p>
            Before moving forward, one clarification: this is not trying to be a
            perfect reproduction of any production VLA system. It is our
            first-principles attempt to understand and build the core ideas end
            to end.
          </p>
        </div>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          What is a VLA model?
        </h2>

        <div className="space-y-4 md:space-y-6">
          <br />
          <p>
            A VLA model is a type of a foundation model which integrates NLU (natural language understanding),
            perception (vision), and actions within one unified framework. By processing these three inputs
            at the same time, VLA models allow robots/systems to perform real-time tasks, such as manipulating objects,
            navigating, and even generalizing to new scenarios without the need to be retrained.
          </p>

          <div className="pl-4 ml-4 border-l-4 border-neutral-300">
            <p>
              <i>Brief timeline:</i>
              <br />
              <br />
              VLAs have evolved over the years, starting with foundation models followed by scaling/policy 
              models, followed by specialization models, and finally, generalized models. 
              The current state of VLAs (generalized) means that these systems are SAFETY-AWARE and most
              importantly, REAL-WORLD deployment ready.
            </p>

            <figure className="my-6">
              <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
                <div className="relative w-full aspect-[1080/1154]">
                  <Image
                    src="/vla_evolutions.png"
                    alt="Evolution timeline of VLA models"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <figcaption className="text-sm text-center text-gray-600 mt-2">
                Evolution timeline of VLA models, adapted from{" "}
                <a
                  href="#ref-vla-evolutions"
                  className="no-underline text-purple-700 hover:text-purple-900"
                >
                  Vision-Language-Action (VLA) Models: Concepts, Progress,
                  Applications and Challenges
                </a>
                .
              </figcaption>
            </figure>
          </div>
          <p>
            
          </p>
        </div>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          How a VLA model is trained
        </h2>
        <br />

        <p>
          Before diving deeper into the intricate individual parts that make up a VLA, we think it's best to
          understand how a VLA model is trained. What does training data look like for a VLA system such as
          robots that follow human instruction (Google's RT-2 and Amazon's Astro)?

          

        </p>

        <div className="mt-0">
          <Placeholder
            label="Secondary visual placeholder (replace with figure sequence)"
            ratioClass="aspect-[1816/940]"
          />
          <p className="mt-2 text-sm text-gray-600 text-center">
            Placeholder for gradient, training, or evaluation visualization.
          </p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          hendrerit dui, ac volutpat erat volutpat et. Mauris blandit posuere
          viverra. Sed malesuada feugiat sapien, quis suscipit nulla pretium id.
        </p>

        <div className="my-6">
          <Placeholder
            label="Social/embed placeholder"
            ratioClass="aspect-[16/6]"
          />
        </div>

        <p className="text-sm text-neutral-600 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          varius mi in augue sollicitudin, ac fermentum lorem consequat.
        </p>
        <hr className="mt-10 md:mt-16 mb-4 border-neutral-200" />
        <h2 className="text-xs uppercase tracking-wide text-neutral-500">
          Footnotes
        </h2>
        <p id="fn1" className="text-xs md:text-sm text-neutral-700 mt-2">
          [1] Footnote template: use a marker in the main text, then define the
          full note here for context and sourcing.
          {" "}
          <a
            href="#fn1-ref"
            className="no-underline text-purple-700 hover:text-purple-900"
          >
            ↩ back
          </a>
        </p>

        <section className="mt-10">
          <h2 className="text-xs uppercase tracking-wide text-neutral-500">
            References
          </h2>
          <ul className="list-disc pl-5 text-xs md:text-sm text-neutral-700 mt-2 space-y-1">
            <li id="ref-vla-evolutions">
              <a
                href="https://arxiv.org/abs/2505.04769"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                Vision-Language-Action (VLA) Models: Concepts, Progress,
                Applications and Challenges
              </a>
              {" "}
              — Sapkota et al., 2025 (arXiv:2505.04769).
            </li>
            <li>
              <a
                href="https://example.com/reference-1"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                Reference Title One
              </a>
              {" "}
              — short note describing why this reference is useful.
            </li>
            <li>
              <a
                href="https://example.com/reference-2"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                Reference Title Two
              </a>
              {" "}
              — short note about what this source helped clarify.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xs uppercase tracking-wide text-neutral-500">
            Important resources
          </h2>
          <ul className="list-disc pl-5 text-xs md:text-sm text-neutral-700 mt-2 space-y-1">
            <li>
              <a
                href="https://www.pi.website"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                Physical Intelligence (π)
              </a>
              {" "}
              — physical intelligence homepage (VLA research lab).
            </li>
            <li>
              <a
                href="https://openreview.net/pdf/6593f484501e295cdbe7efcbc46d7f20fc7e741f.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                TurboQuant Paper
              </a>
              {" "}
              — algorithm that compresses AI models (especially LLM KV caches and vector databases) without losing accuracy, while also making them faster and cheaper to run.
            </li>
            <li>
              <a
                href="https://openai.com/index/parameter-golf/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                OpenAI&apos;s Parameter Gulf
              </a>
              {" "}
              — research competition challenging participants to train the most efficient, high-performance language model possible under extreme constraints.
            </li>
            <li>
              <a
                href="https://research.nvidia.com/labs/dir/cosmos-reason1/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                NVIDIA Cosmos-Reason1 (Project Page)
              </a>
              {" "}
              — project overview from NVIDIA Research on physical common sense
              and embodied reasoning.
            </li>
            <li>
              <a
                href="https://arxiv.org/html/2503.15558v1"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-purple-700 hover:text-purple-900"
              >
                Cosmos-Reason1: From Physical Common Sense To Embodied Reasoning
                (arXiv 2503.15558v1)
              </a>
              {" "}
              — technical paper detailing the model architecture, four-stage
              training pipeline, and physical AI reasoning benchmarks.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
