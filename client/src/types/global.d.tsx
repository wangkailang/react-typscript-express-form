/** Global definitions for developement **/

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

declare interface NavItemProps {
  title: string;
  path: string;
  toggleState?: boolean;
};