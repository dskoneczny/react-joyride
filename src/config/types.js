import type { Node } from 'react';

export type StateHelpers = {
  close: Function,
  go: Function,
  index: Function,
  info: Function,
  next: Function,
  prev: Function,
  reset: Function,
  restart: Function,
  skip: Function,
  start: Function,
  stop: Function,
};

export type StateInstance = {
  ...StateHelpers,
  update: Function,
};

export type StateObject = {
  action: string,
  controlled: boolean,
  index: number,
  lifecycle: string,
  size: number,
  status: string,
};

type placement = 'top' | 'top-start' | 'top-end' |
  'bottom' | 'bottom-start' | 'bottom-end' |
  'left' | 'left-start' | 'left-end' |
  'right' | 'right-start' | 'right-end' |
  'auto' | 'center';

export type StepProps = {
  beaconComponent: ?Node,
  content: Node | string,
  disableBeacon: boolean,
  disableCloseOnEsc: boolean,
  disableOverlay: boolean,
  disableOverlayClose: boolean,
  disableScrolling: boolean,
  event: string,
  hideBackButton: ?boolean,
  isFixed: ?boolean,
  offset: number,
  placement: placement,
  showProgress: ?boolean,
  showSkipButton: ?boolean,
  spotlightPadding: number,
  spotlightClicks: boolean,
  styles: ?Object,
  target: string | HTMLElement,
  title: ?Node,
  tooltipComponent: ?Node,
  tooltipOptions: ?Object,
}

export type JoyrideProps = {
  beaconComponent: ?Node,
  callback: ?Function,
  continuous: boolean,
  debug: boolean,
  disableCloseOnEsc: boolean,
  disableOverlay: boolean,
  disableOverlayClose: boolean,
  disableScrolling: boolean,
  hideBackButton: boolean,
  locale: ?Object,
  run: boolean,
  scrollOffset: number,
  scrollToFirstStep: boolean,
  showProgress: boolean,
  showSkipButton: boolean,
  spotlightPadding: boolean,
  spotlightClicks: boolean,
  stepIndex: ?number,
  steps: Array<StepProps>,
  styles: ?Object,
  tooltipComponent: ?Node,
  tooltipOptions: ?Object,
}

export type CallBackProps = {
  action: string,
  controlled: boolean,
  index: number,
  lifecycle: string,
  size: number,
  status: string,
  step: StepProps,
  type: string,
}