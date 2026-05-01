type Runtime = import("./i18n/types").Translation;

declare namespace App {
  interface Locals {
    t: Runtime;
    lang: string;
    all: string[];
  }
}
