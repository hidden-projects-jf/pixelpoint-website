import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Layout, Fit, Alignment } from 'rive-react';

import ImagePlaceholder from 'components/shared/image-placeholder';
import useRiveLazy from 'hooks/use-rive-lazy';

const items = [
  'Astonishingly looking</br> pixel-perfect UI',
  'Dazzling illustrations</br> and animations',
  'Obvious and clear way to</br> operate on your content',
  'Robust release</br> management flow',
  'Integrations, 3rd parties</br> and analytics set up',
  'High-performing,</br> SEO & a11y friendly',
];

const Features = () => {
  const [wrapperRef, isWrapperInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [containerRef, isContainerInView] = useInView({ triggerOnce: true, rootMargin: '500px' });

  const { RiveLazyComponent: Icon1, rive: iconAnimation1 } = useRiveLazy(
    {
      src: '/animations/pages/home/features/1.riv',
      autoplay: false,
      layout: new Layout({
        fit: Fit.FitWidth,
        alignment: Alignment.Center,
      }),
    },
    isContainerInView
  );

  const { RiveLazyComponent: Icon2, rive: iconAnimation2 } = useRiveLazy(
    {
      src: '/animations/pages/home/features/2.riv',
      autoplay: false,
      layout: new Layout({
        fit: Fit.FitWidth,
        alignment: Alignment.Center,
      }),
    },
    isContainerInView
  );

  const { RiveLazyComponent: Icon3, rive: iconAnimation3 } = useRiveLazy(
    {
      src: '/animations/pages/home/features/3.riv',
      autoplay: false,
      layout: new Layout({
        fit: Fit.FitWidth,
        alignment: Alignment.Center,
      }),
    },
    isContainerInView
  );

  const { RiveLazyComponent: Icon4, rive: iconAnimation4 } = useRiveLazy(
    {
      src: '/animations/pages/home/features/4.riv',
      autoplay: false,
      layout: new Layout({
        fit: Fit.FitWidth,
        alignment: Alignment.Center,
      }),
    },
    isContainerInView
  );

  const { RiveLazyComponent: Icon5, rive: iconAnimation5 } = useRiveLazy(
    {
      src: '/animations/pages/home/features/5.riv',
      autoplay: false,
      layout: new Layout({
        fit: Fit.FitWidth,
        alignment: Alignment.Center,
      }),
    },
    isContainerInView
  );

  const { RiveLazyComponent: Icon6, rive: iconAnimation6 } = useRiveLazy(
    {
      src: '/animations/pages/home/features/6.riv',
      autoplay: false,
      layout: new Layout({
        fit: Fit.FitWidth,
        alignment: Alignment.Center,
      }),
    },
    isContainerInView
  );

  const icons = useMemo(
    () => [
      { component: Icon1, animation: iconAnimation1 },
      { component: Icon2, animation: iconAnimation2 },
      { component: Icon3, animation: iconAnimation3 },
      { component: Icon4, animation: iconAnimation4 },
      { component: Icon5, animation: iconAnimation5 },
      { component: Icon6, animation: iconAnimation6 },
    ],
    [
      Icon1,
      Icon2,
      Icon3,
      Icon4,
      Icon5,
      Icon6,
      iconAnimation1,
      iconAnimation2,
      iconAnimation3,
      iconAnimation4,
      iconAnimation5,
      iconAnimation6,
    ]
  );

  useEffect(() => {
    if (
      isWrapperInView &&
      iconAnimation1 &&
      iconAnimation2 &&
      iconAnimation3 &&
      iconAnimation4 &&
      iconAnimation5 &&
      iconAnimation6
    ) {
      iconAnimation1.play(['Animations']);
      iconAnimation1.on('stop', () => iconAnimation2.play(['Animations']));
      iconAnimation2.on('stop', () => iconAnimation3.play(['Animations']));
      iconAnimation3.on('stop', () => iconAnimation4.play(['Animations']));
      iconAnimation4.on('stop', () => iconAnimation5.play(['Animations']));
      iconAnimation5.on('stop', () => iconAnimation6.play(['Animations']));
      iconAnimation6.on('stop', () => iconAnimation1.play(['Animations']));
    }

    return () => icons.forEach(({ animation }) => animation && animation.unsubscribeAll());
  }, [
    isWrapperInView,
    iconAnimation1,
    iconAnimation2,
    iconAnimation3,
    iconAnimation4,
    iconAnimation5,
    iconAnimation6,
    icons,
  ]);

  return (
    <section className="safe-paddings mt-52 lg:mt-36 sm:mt-20" ref={wrapperRef}>
      <div className="container" ref={containerRef}>
        <h2 className="max-w-[700px] text-4xl font-normal leading-snug lg:text-[32px] sm:max-w-[370px] sm:text-2xl">
          Here is what we have to offer for the next ideal marketing website of yours:
        </h2>
        <ul className="grid-gap-x mt-16 grid grid-cols-3 gap-y-16 lg:mt-14 lg:gap-y-14 md:mt-11 md:gap-y-11 sm:mt-10 sm:grid-cols-2 sm:gap-y-10">
          {items.map((item, index) => {
            const Icon = icons[index].component;

            return (
              <li className="sm:max-w-[150px]" key={index}>
                <ImagePlaceholder className="w-20" width={80} height={62}>
                  <Icon width={80} height={62} />
                </ImagePlaceholder>
                <p
                  className="sm:hide-br mt-3 text-lg font-normal leading-snug lg:text-base"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
