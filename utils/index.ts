export const getComponentName = (component: string) => {
  const componentNameMatch = component.match(
    /const\s+([A-Z]\w*)\s*=\s*\(\s*\)\s*=>/
  );

  if (componentNameMatch && componentNameMatch[1]) {
    return componentNameMatch[1];
  }

  return null;
};
