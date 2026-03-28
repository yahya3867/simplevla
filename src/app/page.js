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
            A VLA model is a type of foundation model that integrates NLU
            (natural language understanding), perception (vision), and actions
            in one unified framework.
          </p>
          <p>
            By processing these three inputs together, VLA models allow
            robots/systems to perform real-time tasks like manipulation,
            navigation, and generalization to new scenarios without retraining.
          </p>

          <div className="pl-4 ml-4 border-l-4 border-neutral-300">
            <p>
              <i>Brief timeline:</i>
            </p>
            <p className="mt-4">
              VLAs have evolved over the years, starting with foundation models followed by scaling/policy 
              models, followed by specialization models, and finally, generalized models. 
            </p>
            <p className="mt-4">
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
        </div>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          How a VLA model is trained
        </h2>
        <br />

        <p>
          Before we dive deep into the model&apos;s complex components, we would like to delve into how these
          VLA systems are trained. For instruction-following robots (Google&apos;s RT-2 and Amazon&apos;s 
          Astro), VLA training combines semantic understanding with robotic datasets.
        </p>

        <br />

        <p>At a high level, the training data has two seperate parts:</p>

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
          While right here feels like the perfect spot to talk about practial training pipelines,
          we think it is best to delve deeper into the multiple components that can make up a VLA model.
        </p>

        <br />
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-1">
          What is a Neural Network?
        </h2>
        <br />
        <p>
          A Neural Network (NN) is a computational system similiar to how the human brain processes
          information. A neural network composes of neurons which are connected to each other, which
          allows them to learn to recognize hidden patterns in data, and even, make decisions.
          At its most vanilla form, a NN is also known as a Multilayer Perceptron (MLP). 
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
          But first, what does the word neuron really mean...?  In the context of a NN, we can think of a
          neuron as a thing that holds a number between 0 and 1. And that specific number,
          whether 0.0, 1.0, or 0.58, is called its activation. Zooming out, a MLP for recognizing
          digits based off a drawing or image has around 3-4 layers. Layer 1 is the input layer where
          every individual pixel maps to a neural activation, which in this case represents the grayscale value
          (1.0 if its white, 0.0 if its black). Layers 2 and 3 are the hidden layers where the output
          activations from the previous layer determines the activations in the current layer. And finally, 
          the output layer consists of only 10 neurons corresponding to the 10 digits. The neuron with the 
          greatest activation value is the predicted digit based off the input drawing.
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
          Intuitively, the input layer (layer 1) and the output layer (layer 4) make sense, however, the hidden
          layers (layers 2-3) are a bit confusing in terms of how they effect each other.
          Specifically, how do the activations in one layer determine the activations in the next layer? This is where
          weights come into play. Weights represent the strength and importance of connections between
          neurons. They determine which pixel patterns the neuron should pay attention to by scaling the
          input activations.
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
          Let us dig deeper into what this really means because even I am VERY confused. In a NN, a
          neuron&apos;s activation is determined by taking the activations of all the neurons in the previous
          layer by computing a weighted sum using all the weights associated with each connection.
          Since each weight is a number that multiplies the activation from a preceding neutron, it acts 
          as a dial that controls how much influence, or strength that connection has. So basically,
          think about ONE singular neuron. Let&apos;s say this neuron has 8 edges connected to it (all from 
          different neurons) from the previous layer. All these edges/connections have a specific value
          called the weight. This weight is multiplied with the activation value of its starting point neuron
          and then all these are summed up to create the weighted sum which becomes that ONE singular neuron&apos;s
          activation.
        </p>
        <p className = "mt-4">
          FIRST thing that came to mind was what determines the values of the weights. However, the answer
          is pretty straightforward. A network starts with completely RANDOM weights, which naturally leads
          to horrible performance. However, during training, the network becomes better using a function
          that measures how wrong its answers are.
        </p>
        <p className="mt-4">
          How does the activation stay between 0 and 1? This is thanks to the Sigmoid function, which makes
          very negative inputs close to 0 and very positive inputs close to 1. 

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
