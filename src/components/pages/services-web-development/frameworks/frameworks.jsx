import React from 'react';

import gatsbyBackground from './images/gatsby-background.svg';
import GatsbyLogo from './images/gatsby.inline.svg';
import NextjsLogo from './images/nextjs.inline.svg';
import RemixLogo from './images/remix.inline.svg';

const Frameworks = () => (
  <section className="safe-paddings bg-black pt-80 text-white lg:pt-64">
    <div className="container grid-gap-x grid grid-cols-2 items-center">
      <div>
        <h2 className="text-6xl font-normal leading-snug lg:text-5xl">
          We leverage the greatest <span className="text-red">React</span> frameworks
        </h2>
        <p className="mt-5 max-w-[410px]">
          Always ready to jump on a project quickly with our custom inclusive GatsbyJS & NextJS
          starters.
        </p>
      </div>
      <div>
        <div
          className="relative flex aspect-[592/224] items-center justify-between rounded-2xl pl-10 pr-6 lg:pl-6"
          style={{ background: 'linear-gradient(261.85deg, #773399 19.08%, #402060 81.57%)' }}
        >
          <GatsbyLogo className="relative z-10 h-14 lg:h-12" aria-hidden />
          <span className="sr-only">Gatsby</span>
          <p className="relative z-10 max-w-[256px] lg:max-w-[190px] lg:text-base">
            Best for building SEO-friendly, high-performing marketing websites
          </p>
          <img
            className="absolute top-0 right-0 bottom-0 left-0"
            src={gatsbyBackground}
            alt=""
            loading="lazy"
            aria-hidden
          />
        </div>
        <div className="mt-8 flex space-x-8 lg:mt-4 lg:space-x-4">
          <div className="flex aspect-[280/224] w-1/2 flex-col items-start justify-between rounded-2xl bg-gray-9 px-6 pt-4 pb-5">
            <RemixLogo className="h-14" aria-hidden />
            <span className="sr-only">Remix</span>
            <p className="text-base lg:text-sm">For full-stack dynamic applications</p>
          </div>
          <div className="flex aspect-[280/224] w-1/2 flex-col items-start justify-between rounded-2xl bg-gray-9 px-6 pt-4 pb-5">
            <NextjsLogo className="h-14" aria-hidden />
            <span className="sr-only">Next.js</span>
            <p className="text-base lg:text-sm">For enterprise-grade dynamic web applications</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Frameworks;
