import React, { useEffect, useState } from 'react';

interface SvgInlineProps {
  url: string;
}

export const SvgInline: React.FC<SvgInlineProps> = (props) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.text())
      .then(setSvg)
      .catch(() => setIsErrored(true))
      .then(() => setIsLoaded(true));
  }, [props.url]);

  return (
    <div
      className={`svgInline svgInline--${
        isLoaded ? 'loaded' : 'loading'
      } ${isErrored ? 'svgInline--errored' : ''}`}
      dangerouslySetInnerHTML={{ __html: svg ?? '' }}
    />
  );
};
