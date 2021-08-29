declare module 'react-native-responsive-screen' {
  import { Component, Dispatch, SetStateAction } from 'react';

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function listenOrientationChange({classComponentThis, setStateHook}: {classComponentThis?: Component<any, any>, setStateHook?: Dispatch<SetStateAction<any>>}): void;
  export function removeOrientationListener(): void;
}
