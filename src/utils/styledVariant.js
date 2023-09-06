function getThemeValue(name, props, values) {
  let value = props && props[name];

  let themeValue;

  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }

  if (typeof themeValue === 'function') {
    return themeValue(props);
  } else {
    return themeValue;
  }
}

export const styledVariant = (name, values) => {
  return function (props) {
    return getThemeValue(name, props, values);
  };
};
