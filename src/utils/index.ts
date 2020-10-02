export function buildClassName(...classNames: (string | undefined | null | false)[]) {
  const validClasses = classNames.filter(className => className) as string[];
  if (validClasses.length > 0) {
    return validClasses.join(' ');
  }
}
