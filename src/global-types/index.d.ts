//changes for module css
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

//chagnes fro ion-icons
declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": any;
  }
}
