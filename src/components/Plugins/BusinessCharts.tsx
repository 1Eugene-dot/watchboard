import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business Charts
 */
export const BusinessCharts: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Charts</Card.Heading>
      <Card.Description>
        Integrates charts and graphs created by the Apache ECharts library into your Grafana dashboard.
      </Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-charts/">
          <svg width={40} height={40} viewBox="0 0 107 94">
            <rect x="27" y="73" width="16" height="15" fill="#5F3DC4" />
            <rect x="27" y="73" width="16" height="15" fill="#FA5252" />
            <rect x="27" y="73" width="16" height="15" fill="#FA5252" />
            <rect x="57" y="58" width="16" height="30" fill="#5F3DC4" />
            <rect x="57" y="58" width="16" height="30" fill="#FA5252" />
            <rect x="87" y="73" width="17" height="15" fill="#5F3DC4" />
            <rect x="87" y="73" width="17" height="15" fill="#FA5252" />
            <rect x="27" y="58" width="16" height="15" fill="#5F3DC4" />
            <rect x="27" y="58" width="16" height="15" fill="#9364F4" />
            <rect x="27" y="58" width="16" height="15" fill="#9364F4" />
            <rect x="57" y="37" width="16" height="21" fill="#5F3DC4" />
            <rect x="57" y="37" width="16" height="21" fill="#9364F4" />
            <rect x="87" y="22" width="17" height="51" fill="#5F3DC4" />
            <rect x="87" y="22" width="17" height="51" fill="#9364F4" />
            <path
              d="M17 92C17 92.8284 17.6716 93.5 18.5 93.5C19.3284 93.5 20 92.8284 20 92L17 92ZM17 4L17 92L20 92L20 4L17 4Z"
              fill="#9364F4"
            />
            <path
              d="M19 90.5C18.1716 90.5 17.5 91.1716 17.5 92C17.5 92.8284 18.1716 93.5 19 93.5L19 90.5ZM107 90.5L19 90.5L19 93.5L107 93.5L107 90.5Z"
              fill="#9364F4"
            />
            <path d="M2 11H10" stroke="#9364F4" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 86H10" stroke="#9364F4" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 71H10" stroke="#9364F4" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 56H10" stroke="#9364F4" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 41H10" stroke="#FF5656" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 26H10" stroke="#9364F4" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M28.9784 38.2165C28.6618 38.2778 28.3605 38.4012 28.0918 38.5796C27.8231 38.758 27.5924 38.9878 27.4129 39.2558C27.2335 39.5238 27.1089 39.8247 27.0464 40.1411C26.9838 40.4575 26.9846 40.7831 27.0485 41.0992C27.1577 41.6638 27.4625 42.1719 27.9094 42.5338C28.3563 42.8958 28.9165 43.0885 29.4915 43.078H29.9556C31.4947 42.7605 65.5744 35.7491 89.3691 10.0488L89.1981 12.3208C89.1579 12.965 89.3742 13.599 89.7999 14.0842C90.2256 14.5694 90.8261 14.8664 91.4701 14.9104H91.6411C92.2644 14.9115 92.8645 14.6743 93.3187 14.2474C93.7729 13.8205 94.0467 13.2361 94.0841 12.614L94.6459 2.62212C94.673 2.25354 94.6162 1.88362 94.4796 1.54021C94.343 1.1968 94.1303 0.888852 93.8575 0.639551C93.5847 0.390249 93.2589 0.206095 92.9045 0.100953C92.5502 -0.00418913 92.1767 -0.0275778 91.8121 0.0325482L82.0401 1.64492C81.7193 1.69625 81.4117 1.81027 81.135 1.98047C80.8582 2.15066 80.6177 2.3737 80.4272 2.63685C80.2366 2.9 80.0997 3.19811 80.0244 3.51415C79.9491 3.83019 79.9367 4.15797 79.988 4.47879C80.0393 4.79961 80.1534 5.10718 80.3236 5.38393C80.4938 5.66068 80.7168 5.9012 80.9799 6.09176C81.2431 6.28232 81.5412 6.41918 81.8572 6.49453C82.1733 6.56987 82.5011 6.58223 82.8219 6.5309L86.3398 5.96902C63.6444 31.1807 29.3449 38.1676 28.9784 38.2165Z"
              fill="#9364F4"
            />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Panel']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/business-charts/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-charts"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="destructive"
          icon="play"
          target="_blank"
          href="https://www.youtube.com/playlist?list=PLPow72ygztmQHGWFqksEf3LebUfhqBfFu"
        >
          YouTube
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/"
        >
          Grafana Catalog
        </LinkButton>
        <LinkButton variant="secondary" icon="building" target="_blank" href="https://echarts.volkovlabs.io">
          Examples
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
