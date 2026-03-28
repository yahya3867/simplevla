"use client";

import { useState } from "react";
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

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.31.1-2.74 0 0 .84-.27 2.75 1.03a9.16 9.16 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.43.2 2.48.1 2.74.64.71 1.03 1.62 1.03 2.72 0 3.91-2.34 4.77-4.57 5.03.36.32.69.94.69 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function FigureCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <figure className="my-6">
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
        <div className={`relative w-full ${currentSlide.aspectClass || "aspect-[678/431]"}`}>
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={showPrevious}
          className="px-2 py-1 text-xs rounded border border-neutral-400 bg-neutral-200 hover:bg-neutral-300"
          aria-label="Show previous figure"
        >
          {"<"}
        </button>
        <p className="text-xs text-neutral-600 text-center">
          Figure {currentIndex + 1} of {slides.length}
        </p>
        <button
          type="button"
          onClick={showNext}
          className="px-2 py-1 text-xs rounded border border-neutral-400 bg-neutral-200 hover:bg-neutral-300"
          aria-label="Show next figure"
        >
          {">"}
        </button>
      </div>
      <figcaption className="text-sm text-center text-gray-600 mt-2">
        {currentSlide.caption}
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const mlpSlides = [
    {
      src: "/nn-input-layer.svg",
      alt: "Input layer only",
      caption: "Input layer: raw values enter the network.",
    },
    {
      src: "/nn-input-hidden-layers.svg",
      alt: "Input and hidden layers",
      caption: "Hidden layers transform input features into higher-level patterns.",
    },
    {
      src: "/nn-full-network.svg",
      alt: "Input, hidden, and output layers",
      caption: "Full network view: input, hidden layers, and output prediction.",
    },
  ];

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
              Yahya Masri, Akshith Ambekar, Abhi Maddi
            </a>
          </p>

          <div className="mt-6 mb-6 sm:mb-8 flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/yahya3867/simplevla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded md:rounded-md text-xs font-medium bg-neutral-200 border border-neutral-400 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_0_rgba(0,0,0,0.25)] hover:bg-neutral-300"
              aria-label="Project on GitHub"
            >
              <GitHubIcon />
              Github
            </a>
            <a
              href="https://github.com/akshithambekar/vla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded md:rounded-md text-xs font-medium bg-neutral-200 border border-neutral-400 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_0_rgba(0,0,0,0.25)] hover:bg-neutral-300"
              aria-label="Code repository on GitHub"
            >
              <GitHubIcon />
              Code Repo
            </a>
          </div>
        </div>

        <p>
          Nobody really understands VLAs end-to-end, and neither do we. We
          started this project to learn by building each piece ourselves from
          first principles.
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
          We picked this because it is hard. We did not want to stay at the API
          layer; we wanted to understand how perception, language, and action
          connect.
        </p>

        <ul className="list-disc list-inside text-left mt-4 break-words">
          <li>
            We use LLM tools daily, but we want first-principles understanding.
          </li>
          <li>
            There is still no clear beginner path from model outputs to
            real-world robot actions.
          </li>
        </ul>
        <br />

        <p>
          Our design philosophy is simple: build first, read later. We
          prototype, fail, debug, then return to papers with sharper questions.
        </p>
        <br />

        <p>
          We also want to train a style of thinking: patient, deliberate, and
          grounded in fundamentals. Instead of treating VLAs like black boxes,
          we document each assumption and share progress publicly as we go.
        </p>

        <div className="mt-6 md:mt-8">
          <p>
            Throughout this project, we learn by drawing system diagrams,
            writing assumptions down, and validating each step in code. The
            goal is an inspectable, reproducible learning path.
          </p>
          <br />
          <p>
            Before we move forward, one clarification: this is not a production
            VLA replica. It is our attempt to re-invent the core ideas
            ourselves.
          </p>
        </div>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          What is a VLA model?
        </h2>

        <div className="space-y-4 md:space-y-6">
          <br />
          <p>
            A VLA model unifies vision, language, and action in one model.
            Given images, text, and state, it predicts actions.
          </p>
          <p>
            In practice, this lets robots follow instructions, manipulate
            objects, and generalize to new scenes with less task-specific
            retraining.
          </p>

          <div className="pl-4 ml-4 border-l-4 border-neutral-300">
            <p>
              <i>Brief timeline:</i>
            </p>
            <p className="mt-4">
              VLAs have moved from pure vision-language pretraining to policy
              fine-tuning and then to broader generalist systems.
            </p>
            <p className="mt-4">
              The current frontier focuses on reliability: safer behavior,
              better grounding, and stronger real-world transfer.
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
        </div>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          How a VLA model is trained
        </h2>
        <br />

        <p>
          Before we dive into architecture details, we should cover training.
          Modern VLA pipelines combine web-scale semantic supervision with robot
          interaction data.
        </p>

        <br />

        <p>At a high level, the training mix has two parts:</p>

        <ul className="list-disc list-inside text-left mt-4 break-words">
          <li>
            <b>Web-scale semantic data:</b> image-caption pairs, instruction-following, 
            and visual question-answering corpora that teach language-grounded perception. 
          </li>
          <li>
            <b>Robot interaction data:</b> demonstration datasets; real or simulated.
          </li>
        </ul>

        <br />

        <div className="mt-6">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
            <div className="relative w-full aspect-[678/431]">
              <Image
                src="/training_data.svg"
                alt="Training data split for VLA models"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Training data composition for VLA models: web-scale semantic data
            and robot interaction trajectories.
          </p>
        </div>

        <p className="mt-10">
          This is the right place to discuss full training pipelines, but first
          we need the core building blocks that make a VLA possible.
        </p>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          What is a Neural Network?
        </h2>
        <br />
        <p>
          A neural network is a function approximator made of layers of neurons.
          Each neuron combines inputs, applies weights, and outputs an
          activation. The simplest version is a multilayer perceptron (MLP).
        </p>
        <figure className="my-6">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
            <div className="relative w-full aspect-[678/431]">
              <Image
                src="/nn-single-neuron.svg"
                alt="A single neuron with incoming signals"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2">
            A single neuron combines multiple incoming signals.
          </figcaption>
        </figure>
        <p className="mt-4">
          What is a neuron in this context? It is a single scalar value, usually
          called an activation. For digit classification, an MLP might have 3-4
          layers: an input layer, one or two hidden layers, and an output layer
          of 10 neurons. In the input layer, each pixel maps to one activation
          (black near 0, white near 1). The output neuron with the highest
          activation is the predicted digit.
        </p>
        <figure className="my-6">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
            <div className="relative w-full aspect-[678/431]">
              <Image
                src="/nn-neuron-pixel.svg"
                alt="Input neuron corresponding to a single pixel"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2">
            Input neurons can correspond directly to pixel-level signal values.
          </figcaption>
        </figure>
        <FigureCarousel slides={mlpSlides} />
        <p className="mt-4">
          Input and output layers are intuitive, but hidden layers raise the key
          question: how does one layer determine the next? Through weights. A
          weight scales an incoming activation and controls how strongly one
          neuron influences another.
        </p>
        <figure className="my-6">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
            <div className="relative w-full aspect-[678/431]">
              <Image
                src="/nn-weights.svg"
                alt="Weighted connections between neurons"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2">
            Weights control how much each incoming activation influences the next neuron.
          </figcaption>
        </figure>
        <p className="mt-4">
          Take one neuron in a hidden layer with eight incoming connections.
          Each incoming activation is multiplied by its corresponding weight, and
          those products are summed. That weighted sum becomes the
          neuron&apos;s pre-activation signal.
        </p>
        <p className="mt-4">
          So where do weights come from? We start with random values. At first
          the network performs poorly, then training updates the weights to
          reduce prediction error.
        </p>
        <p className="mt-4">
          To keep activations bounded in this toy example, we use a sigmoid
          function. Large negative inputs map near 0, and large positive inputs
          map near 1.
        </p>
        <figure className="my-6">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-300 bg-white">
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/nn-sigmoid.svg"
                alt="Sigmoid activation function"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2">
            Sigmoid activation curve used to squash values into a bounded range.
          </figcaption>
        </figure>
        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          New section 2
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          iaculis lorem sed sapien tristique, nec luctus lectus commodo. Etiam
          non massa nec nisi dictum feugiat. Aliquam erat volutpat. Maecenas
          tincidunt mi eget est faucibus, ut luctus lorem iaculis.
        </p>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          New section 3
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Morbi vulputate justo non magna fringilla, eu posuere mauris
          tincidunt. Sed in tempor eros, vitae bibendum nunc. Nunc aliquet
          ullamcorper augue, sed pretium velit tristique a.
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
